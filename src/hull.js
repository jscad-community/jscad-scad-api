const { CSG, CAG } = require('@jscad/csg')
const { union } = require('./ops-booleans')

/** create a convex hull of the given shapes
 * @param {Object(s)|Array} objects either a single or multiple CSG/CAG objects to create a hull around
 * @returns {CSG} new CSG object , a hull around the given shapes
 *
 * @example
 * let hulled = hull(rect(), circle())
 */
function hull () {
  let pts = []

  let a = arguments
  if (a[0].length) a = a[0]
  let done = []

  for (let i = 0; i < a.length; i++) {              // extract all points of the CAG in the argument list
    let cag = a[i]
    if (!(cag instanceof CAG)) {
      throw new Error('ERROR: hull() accepts only 2D forms / CAG')
    }
    for (let j = 0; j < cag.sides.length; j++) {
      let x = cag.sides[j].vertex0.pos.x
      let y = cag.sides[j].vertex0.pos.y
      // avoid some coord to appear multiple times
      if (done['' + x + ',' + y]) {
        continue
      }
      pts.push({ x: x, y: y })
      done['' + x + ',' + y]++
         // echo(x,y);
    }
  }
   // echo(pts.length+" points in",pts);

   // from http://www.psychedelicdevelopment.com/grahamscan/
   //    see also at https://github.com/bkiers/GrahamScan/blob/master/src/main/cg/GrahamScan.java
  let ConvexHullPoint = function (i, a, d) {
    this.index = i
    this.angle = a
    this.distance = d

    this.compare = function (p) {
      if (this.angle < p.angle) {
        return -1
      } else if (this.angle > p.angle) {
        return 1
      } else {
        if (this.distance < p.distance) {
          return -1
        } else if (this.distance > p.distance) {
          return 1
        }
      }
      return 0
    }
  }

  let ConvexHull = function () {
    this.points = null
    this.indices = null

    this.getIndices = function () {
      return this.indices
    }

    this.clear = function () {
      this.indices = null
      this.points = null
    }

    this.ccw = function (p1, p2, p3) {
      let ccw = (this.points[p2].x - this.points[p1].x) * (this.points[p3].y - this.points[p1].y) -
                   (this.points[p2].y - this.points[p1].y) * (this.points[p3].x - this.points[p1].x)
      // we need this, otherwise sorting never ends, see https://github.com/Spiritdude/OpenJSCAD.org/issues/18
      if (ccw < 1e-5) {
        return 0
      }
      return ccw
    }

    this.angle = function (o, a) {
         // return Math.atan((this.points[a].y-this.points[o].y) / (this.points[a].x - this.points[o].x));
      return Math.atan2((this.points[a].y - this.points[o].y), (this.points[a].x - this.points[o].x))
    }

    this.distance = function (a, b) {
      return ((this.points[b].x - this.points[a].x) * (this.points[b].x - this.points[a].x) +
                 (this.points[b].y - this.points[a].y) * (this.points[b].y - this.points[a].y))
    }

    this.compute = function (_points) {
      this.indices = null
      if (_points.length < 3) {
        return
      }
      this.points = _points

         // Find the lowest point
      let min = 0
      for (let i = 1; i < this.points.length; i++) {
        if (this.points[i].y === this.points[min].y) {
          if (this.points[i].x < this.points[min].x) {
            min = i
          }
        } else if (this.points[i].y < this.points[min].y) {
          min = i
        }
      }

         // Calculate angle and distance from base
      let al = []
      let ang = 0.0
      let dist = 0.0
      for (let i = 0; i < this.points.length; i++) {
        if (i === min) {
          continue
        }
        ang = this.angle(min, i)
        if (ang < 0) {
          ang += Math.PI
        }
        dist = this.distance(min, i)
        al.push(new ConvexHullPoint(i, ang, dist))
      }

      al.sort(function (a, b) { return a.compare(b) })

         // Create stack
      let stack = new Array(this.points.length + 1)
      let j = 2
      for (let i = 0; i < this.points.length; i++) {
        if (i === min) {
          continue
        }
        stack[j] = al[j - 2].index
        j++
      }
      stack[0] = stack[this.points.length]
      stack[1] = min

      let tmp
      let M = 2
      for (let i = 3; i <= this.points.length; i++) {
        while (this.ccw(stack[M - 1], stack[M], stack[i]) <= 0) {
          M--
        }
        M++
        tmp = stack[i]
        stack[i] = stack[M]
        stack[M] = tmp
      }

      this.indices = new Array(M)
      for (let i = 0; i < M; i++) {
        this.indices[i] = stack[i + 1]
      }
    }
  }

  let hull = new ConvexHull()

  hull.compute(pts)
  let indices = hull.getIndices()

  if (indices && indices.length > 0) {
    let ch = []
    for (let i = 0; i < indices.length; i++) {
      ch.push(pts[indices[i]])
    }
    return CAG.fromPoints(ch)
  }
}

module.exports = {
  hull,
}
