
## jscad-scad-api
This packages provides a OpenSCAD-like API. See [OpenSCAD User Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)

This allows OpenSCAD designs to be ported to JSCAD, and gives OpenSCAD designers a slightly easier learning experience.
However, OpenSCAD designs still need to be converted to JSCAD (and JavaScript).

## Usage

This package can be used by any JSCAD design by importing the required functions.

```
import {circle, rotate_extrude, linear_extrude, translate} from "jscad-scad-api"

export const main = (params) => {
  let s1 = circle()
  let s2 = translate({v: [3, 3]}, s1)

  let s3 = rotate_extrude({fn: 8, angle: -270}, s2)

  return [s1, s2, s3]
}
```

## Implementation Notes

OpenSCAD is based on some bazzare non-procedural language, while JSCAD is 100% JavaScript.
A lot of language constructs are the same but there will be some pain, and learning required.

This package doesn't try to reproduce OpenSCAD, but does provide most of the functionality found in OpenSCAD.
The main difference is that the 'named' parameters are required. This shouldn't be hard but OpenSCAD designs may need some changes.
For example, OpenSCAD translate([1,2,3]) needs to be changed to translate(v=[1,2,3])

### 2D Objects

| Shape   | Parameters    | Notes       |
| ------- | ------------- | ----------- |
| circle  | r, d          |             |
| polygon | points, paths |             |
| square  | size, center  |             |
| text    |               | UNSUPPORTED |

NOTE: JSCAD also supports arc, ellipse, line, roundedRectangle, star, and triangle.

### 3D Objects

| Shape      | Parameters                      | Notes       |
| ---------- | ------------------------------- | ----------- |
| cube       | size, center                    |             |
| sphere     | r, d                            |             |
| cylinder   | h, r, r1, r2, d, d1, d2, center |             |
| polyhedron | points, faces                   |             |
| surface    |                                 | UNSUPPORTED |

NOTE: JSCAD also supports cylinderElliptic, ellipsoid, geodesicSphere, roundedCuboid, and torus.

### Transforms

| Function       | Parameters        | Notes       |
| -------------- | ----------------- | ----------- |
| color          | c                 |             |
| rotate         | a, v              |             |
| translate      | v                 |             |
| mirror         | v                 |             |
| multmatrix     | m                 |             |
| scale          | v                 |             |
| resize         | newsize, auto     |             |
| offset         | r, delta, chamfer |             |
| minkowski      |                   |             |
| hull           |                   |             |

NOTE: JSCAD also supports align and center.

### Measurements

No such thing in OpenSCAD.

NOTE: JSCAD supports measurements of area, bounding box, bounding sphere, center, center of mass, dimensions, and volume.

### Dimension Changes 2D/3D

| Function       | Parameters                              | Notes       |
| -------------- | --------------------------------------- | ----------- |
| projection     | cut                                     |             |
| linear_extrude | height, v, center, twist, slices, scale |             |
| rotate_extrude | angle                                   |             |

NOTE: JSCAD also supports extrudeHelical and extrudeRectangular.

### Boolean Combinations

| Function     | Parameters | Notes |
| ------------ | ---------- | ----- |
| union        |            |       |
| difference   |            |       |
| intersection |            |       |

NOTE: JSCAD also supports scission.

### Mathematical Functions
- cos
- sin
- tan
- acos
- asin
- atan
- atan2
- abs
- ceil
- concat
- cross
- exp
- floor
- ln
- len
- log
- lookup
- max
- min
- norm
- pow
- rands
- round
- sign
- sqrt

### String Functions

| Function | Parameters | Notes |
| -------- | ---------- | ----- |
| str      | ...values  |   |
| chr      | number     |   |
| ord      | string     |   |

### String Functions

| Function | Parameters | Notes |
| -------- | ---------- | ----- |
| str      | ...values  |   |
| chr      | number     |   |
| ord      | string     |   |

### Type Test Functions

| Function  | Parameters | Notes |
| --------- | ---------- | ----- |
| is_undef  | value      |   |
| is_bool   | value      |   |
| is_num    | value      |   |
| is_string | value      |   |
| is_list   | value      |   |

### Language Features

| Function    | Parameters | Notes |
| ----------- | ---------- | ----- |
| assert      | ...values  |  |
| echo        | ...values  |  |
| search      |            | UNSUPPORTED |
| version     |            |  |
| version_num |            |  |

If you don't see a function above then it's not supported, or the JavaScript language may have the same construct.


* [jscad-scad-api](#module_jscad-scad-api)
    * [.circle](#module_jscad-scad-api.circle) ⇒ <code>Geom2</code>
    * [.color](#module_jscad-scad-api.color) ⇒ <code>Object</code> \| <code>Array</code>
    * [.cube](#module_jscad-scad-api.cube) ⇒ <code>Geom3</code>
    * [.cylinder](#module_jscad-scad-api.cylinder) ⇒ <code>Geom3</code>
    * [.difference](#module_jscad-scad-api.difference) ⇒ <code>Object</code>
    * [.assert](#module_jscad-scad-api.assert)
    * [.echo](#module_jscad-scad-api.echo)
    * [.version](#module_jscad-scad-api.version)
    * [.version_num](#module_jscad-scad-api.version_num)
    * [.render](#module_jscad-scad-api.render)
    * [.forAction](#module_jscad-scad-api.forAction) ⇒
    * [.hull](#module_jscad-scad-api.hull) ⇒ <code>Object</code>
    * [.intersection](#module_jscad-scad-api.intersection) ⇒ <code>Object</code>
    * [.linear_extrude](#module_jscad-scad-api.linear_extrude) ⇒ <code>Geom3</code>
    * [.minkowski](#module_jscad-scad-api.minkowski) ⇒ <code>Object</code>
    * [.mirror](#module_jscad-scad-api.mirror) ⇒ <code>Object</code> \| <code>Array</code>
    * [.multimatrix](#module_jscad-scad-api.multimatrix) ⇒ <code>Object</code> \| <code>Array</code>
    * [.offset](#module_jscad-scad-api.offset) ⇒ <code>Object</code> \| <code>Array</code>
    * [.polygon](#module_jscad-scad-api.polygon) ⇒ <code>Geom2</code>
    * [.polyhedron](#module_jscad-scad-api.polyhedron) ⇒ <code>Geom3</code>
    * [.resize](#module_jscad-scad-api.resize) ⇒ <code>Object</code>
    * [.rotate_extrude](#module_jscad-scad-api.rotate_extrude) ⇒ <code>Geom3</code>
    * [.rotate](#module_jscad-scad-api.rotate) ⇒ <code>Object</code> \| <code>Array</code>
    * [.scale](#module_jscad-scad-api.scale) ⇒ <code>Object</code> \| <code>Array</code>
    * [.sphere](#module_jscad-scad-api.sphere) ⇒ <code>Geom3</code>
    * [.square](#module_jscad-scad-api.square) ⇒ <code>Geom2</code>
    * [.str](#module_jscad-scad-api.str)
    * [.is_undef](#module_jscad-scad-api.is_undef) ⇒ <code>Boolean</code>
    * [.vector_char](#module_jscad-scad-api.vector_char) ⇒ <code>Object</code>
    * [.vector_text](#module_jscad-scad-api.vector_text) ⇒ <code>Array</code>
    * [.translate](#module_jscad-scad-api.translate) ⇒ <code>Object</code> \| <code>Array</code>
    * [.union](#module_jscad-scad-api.union) ⇒ <code>Object</code>


### jscad-scad-api.circle ⇒ <code>Geom2</code>
Creates a circle at the origin.

If used, $fa, $fs and $fn must be named parameters.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom2</code> - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.r] | <code>Float</code> | <code>1</code> | radius of the circle |
| [options.d] | <code>Float</code> | <code>0</code> | if provided, diameter of the circle where d = r * 2 |

**Example**  
```js
let circle1 = circle({r: 10})
let circle2 = circle({d: 20})
let circle3 = circle({r: 15, $fa: 12, $fs: 2})
let circle4 = circle({r: 10, $fn: 6})
```

### jscad-scad-api.color ⇒ <code>Object</code> \| <code>Array</code>
Displays the elements using the specified RGB color.

The color is specfified using RGBA values from 0 to 1.
The alpha value defaults to 1.0 (opaque) if not specified.

The color can also be defined by name (case insensitive).

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the colored element, or a list of colored elements  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Object</code> | either an array or a hex string of color values |
| ...elements | <code>Object</code> | the elements to color |

**Example**  
```js
let color1 = color([1,0,0,1], sphere())
let color2 = color("red", sphere())
```

### jscad-scad-api.cube ⇒ <code>Geom3</code>
Creates a cube.

When center is true, the cube is centered on the origin.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.size] | <code>Float</code> | <code>[1,1,1]</code> | size of each side (X, Y, Z), or a single size |
| [options.center] | <code>Boolean</code> | <code>false</code> | wether to center the cube/cuboid or not |

**Example**  
```js
let cube1 = cube({size: 10})
let cube2 = cube({size: [5, 10, 20]})
let cube2 = cube({size: [5, 5, 3], center: true})
```

### jscad-scad-api.cylinder ⇒ <code>Geom3</code>
Creates a cylinder centered vertically about the Z axis.

When center is true, it is also centered vertically along the Z axis.

If used, $fa, $fs and $fn must be named parameters.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.h] | <code>Float</code> | <code>1</code> | height of the cylinder |
| [options.r1] | <code>Float</code> | <code>1</code> | radius of the top of the cylinder |
| [options.r2] | <code>Float</code> | <code>1</code> | radius of the bottom of the cylinder |
| [options.r] | <code>Float</code> | <code>0</code> | if provided, r = r1 = r2 |
| [options.d] | <code>Float</code> | <code>0</code> | if provided, diameter of the cylinder, d = r1 * 2 = r2 * 2 |
| [options.d1] | <code>Float</code> | <code>0</code> | if provided, diameter of the top of the cylinder, d1 = r1 * 2 |
| [options.d2] | <code>Float</code> | <code>0</code> | if provided, diameter of the bottom of the cylinder, d2 = r2 * 2 |
| [options.center] | <code>Boolean</code> | <code>false</code> | wether to center the cylinder about Z axis or not |

**Example**  
```js
let cylinder1 = cylinder({r: 10})
let cylinder2 = cylinder({d: 20})
let cylinder3 = cylinder({h: 10, r1: 10, r2: 5})
let cylinder4 = cylinder({h: 10, d1: 20, d2: 10})
let cylinder5 = cylinder({h: 10, r1: 10, r2: 0, $fn: 32})
```

### jscad-scad-api.difference ⇒ <code>Object</code>
Subtracts all elements from the first element (logical AND NOT).

NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the difference of the elements  

| Param | Type | Description |
| --- | --- | --- |
| ...elements | <code>Object</code> | the elements to subtract from the first |

**Example**  
```js
let newshape = difference(sphere(), cube())
```

### jscad-scad-api.assert
Assert that the result is true.

If not then an error with the given message is thrown, and processing stops.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  

### jscad-scad-api.echo
Echo (print) the contents to the console, which is useful for debugging code.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**See**: str()  

### jscad-scad-api.version
Return the version as a vector of three numbers.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  

### jscad-scad-api.version\_num
Return the version as a number, e.g. 20240401.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  

### jscad-scad-api.render
Render the geometries to the screen, which is useful for debugging geometry.

NOTE: The geometries are printed to the console. There is no rendering.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  

### jscad-scad-api.forAction ⇒
Evaluate each value in a set of vectors, or each name in the attributes,
applying it to the given function.

This is bascially a replacement for the SCAD for-loop.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: union of geometries produced from the given function  

| Param | Type | Description |
| --- | --- | --- |
| where | <code>Object</code> | each attribute has a list of values |
| function | <code>function</code> | (call-back) of which to execute for each set of values |


### jscad-scad-api.hull ⇒ <code>Object</code>
Create a convex hull around the given elements.

NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the convex hall of the elements  

| Param | Type | Description |
| --- | --- | --- |
| ...elements | <code>Object</code> | the elements to hull |

**Example**  
```js
let hulled = hull(square(), circle())
```

### jscad-scad-api.intersection ⇒ <code>Object</code>
Creates the intersection all elements (logical AND).
Only the area which is common or shared by all children is retained.

NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the intersection of the elements  

| Param | Type | Description |
| --- | --- | --- |
| ...elements | <code>Object</code> | the elements to intersect |

**Example**  
```js
let newshape = intersection(sphere(), cube())
```

### jscad-scad-api.linear\_extrude ⇒ <code>Geom3</code>
Generate a 3D shape by extruding a 2D object about the Z-axis.


**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new extruded shape  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | options for extruding |
| [options.height] | <code>Float</code> | <code>100</code> | height of the extruded shape |
| [options.slices] | <code>Integer</code> | <code>8</code> | number of intermediary steps |
| [options.twist] | <code>Integer</code> | <code>0</code> | angle in which to twist the extusion about the Z-axis |
| [options.scale] | <code>Integer</code> | <code>0.0</code> | scale to acheive for the final the shape |
| [options.center] | <code>Boolean</code> | <code>false</code> | whether to center the final 3D shape |

**Example**  
```js
let shape1 = linear_extrude({height: 10}, square())
```

### jscad-scad-api.minkowski ⇒ <code>Object</code>
Compute the Minkowski sum of two 3D geometries.

NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the minkowski sum of the elements  

| Param | Type | Description |
| --- | --- | --- |
| ...elements | <code>Object</code> | the elements to sum |

**Example**  
```js
let newshape = minkowski(cube(), sphere())
```

### jscad-scad-api.mirror ⇒ <code>Object</code> \| <code>Array</code>
Transforms the object into a mirror of the original, as if it were the mirror image seen through a plane intersecting the origin.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the mirrored object, or a list of mirrored objects  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | options for mirror |
| options.v | <code>Float</code> \| <code>Array</code> | the perpendicular, normal vector of the plane passing through the origin |
| ...objects | <code>Object</code> | the objects to mirror |

**Example**  
```js
let mirrored1 = mirror({v: [1, 0, 0]}, cube()) // mirror about the X axis
```

### jscad-scad-api.multimatrix ⇒ <code>Object</code> \| <code>Array</code>
Transforms the object using the given affine transformation matrix.

The fourth row of the matrix is forced to [0,0,0,1] and can be omitted.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the transformed object, or a list of transformed objects  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | options for multmatrix |
| options.m | <code>Array</code> | affine transformation matrix, where the matrix is 4×3 or 4x4 array |
| ...objects | <code>Object</code> | the objects to transform |

**Example**  
```js
const c = cube()
const m = multimatrix([
    [cos(angle), -sin(angle), 0, 10],
    [sin(angle),  cos(angle), 0, 20],
    [         0,           0, 1, 30],
    [         0,           0, 0,  1]
  ], c)
```

### jscad-scad-api.offset ⇒ <code>Object</code> \| <code>Array</code>
Offset generates a new interior or exterior outline from an existing element.

There are two modes of operation; radial and offset.
The radial method creates a new outline as if a circle of some radius is rotated around the exterior (r>0) or interior (r<0) original outline.
The offset method creates a new outline whose sides are a fixed distance outer (delta > 0) or inner (delta < 0) from the original outline.

If used, $fa, $fs and $fn must be named parameters.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the offset element, or a list of offset elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for centering |
| [options.r] | <code>Float</code> |  | the radius of the circle that is rotated about the outline |
| [options.delta] | <code>Boolean</code> | <code>1</code> | the distance of the new outline from the original outline |
| [options.chamfer] | <code>Boolean</code> | <code>false</code> | defines if edges should be chamfered (delta mode only) |
| ...elements | <code>Object</code> |  | the elements to offset |

**Example**  
```js
const o = offset({r: 10}, square(20))
```

### jscad-scad-api.polygon ⇒ <code>Geom2</code>
Create a multiple sided shape from a list of coordinates (X, Y).

This includes irregular shapes with both concave and convex edges.

Construct a polygon either from arrays of paths and points, or just arrays of points
nested paths (multiple paths) and flat paths are supported.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom2</code> - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.paths] | <code>Array</code> | <code>[]</code> | paths of the polygon : either flat or nested array |
| [options.points] | <code>Array</code> | <code>[]</code> | points of the polygon : either flat or nested array |

**Example**  
```js
let poly1 = polygon({points: [[10,11], [0,11], [5,20]]})
let poly2 = polygon({points: [[10,11], [0,11], [5,20]], paths: [[0, 1, 2]]})
```

### jscad-scad-api.polyhedron ⇒ <code>Geom3</code>
Create a mulitple faceted polyhedron from a list of points and faces.

Each face is a list containing the indices of three or more points from the points.
Faces may be defined in any order. Define enough faces to fully enclose the solid, with no overlap.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new 3D geometry  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | options for construction |
| [options.points] | <code>Array</code> | array of points (X, Y, Z) of which to construct the polyhedron |
| [options.faces] | <code>Array</code> | array of faces, where each face contains three or more indices |

**Example**  
```js
const polyhedron1 = polyhedron({
  points: [ [10,10,0], [10,-10,0], [-10,-10,0], [-10,10,0], // the four points at base
            [0,0,10] ],                                     // the apex point
  faces: [ [0,1,4], [1,2,4], [2,3,4], [3,0,4],              // each triangle side
           [1,0,3], [2,1,3] ]                               // two triangles for square base
})
```

### jscad-scad-api.resize ⇒ <code>Object</code>
Modifies the dimensions of the element to match the new size.

If auto resizing is enabled then each zero(0) size will be taken from the first non-zero size.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the resized element  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | options for resizing |
| options.newsize | <code>Float</code> \| <code>Array</code> | either single number or an array of numbers, specifying the new sizes |
| [options.auto] | <code>Array</code> | an array of true / false values, specifying if autosizing should occur |
| element | <code>Object</code> | the element to resize |

**Example**  
```js
let resized1 = resize({newsize=[5,5], square()) // resize 2D element
let resized2 = resize({newsize=[5,5,5], cube())
let resized3 = resize({newsize=[5,0,0], auto: [false, true, false], cube())
```

### jscad-scad-api.rotate\_extrude ⇒ <code>Geom3</code>
Rotational extrusion spins a 2D shape around the Z-axis to form a solid which has rotational symmetry.

If used, $fa, $fs and $fn must be named parameters.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.angle] | <code>Float</code> | <code>360</code> | number of degrees to sweep, starting at the positive X axis. The direction of the sweep is counterclockwise, hence a negative angle sweeps clockwise. |

**Example**  
```js
const e = rotate_extrude({convexity: 10}, translate([2, 0, 0], circle({r: 1})))
```

### jscad-scad-api.rotate ⇒ <code>Object</code> \| <code>Array</code>
Rotates the objects about the axis, or around an arbitrary axis.

When 'a' (angles) is an array, the 'v' (axis) argument is ignored.
When 'a' (angles) is a number, the rotation is about the Z axis.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the rotated object, or a list of rotated objects  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | options for centering |
| options.a | <code>Float</code> \| <code>Array</code> |  | either single number or an array of numbers, specifying angles of rotation |
| [options.v] | <code>Array</code> | <code>[0,0,1]</code> | a vector [X, Y, Z] that defines an arbitrary axis for rotation |
| ...objects | <code>Object</code> |  | the objects to rotate |

**Example**  
```js
let rotated1 = rotate({a: 45}, square()) // rotate 2D objects about the Z axis
let rotated2 = rotate({{a: [45, 180, -90]}, cube())
let rotated3 = rotate({{a: [45, 180, -90], v: [0, 1, 0]}, cube())
```

### jscad-scad-api.scale ⇒ <code>Object</code> \| <code>Array</code>
Scale the elements using the specified vector.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the scaled element, or a list of scaled elements  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | options for centering |
| options.v | <code>Array</code> | a vector that defines the factors of scale |
| ...elements | <code>Object</code> | the elements to scale |

**Example**  
```js
let scaled1 = scale({v: [10, 2]}, square()) // scale 2D element
let scaled2 = scale({v: [10, 2, 3]}, sphere())
```

### jscad-scad-api.sphere ⇒ <code>Geom3</code>
Creates a sphere at the origin.

If used, $fa, $fs and $fn must be named parameters.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom3</code> - new 3D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.r] | <code>Float</code> | <code>1</code> | radius of the sphere |
| [options.d] | <code>Float</code> | <code>0</code> | if provided, diameter of the sphere where d = r * 2 |

**Example**  
```js
let sphere1 = sphere({r: 10})
let sphere2 = sphere({d: 20})
let sphere3 = sphere({r: 15, $fa: 12, $fs: 2})
let sphere4 = sphere({r: 15, $fn: 32})
```

### jscad-scad-api.square ⇒ <code>Geom2</code>
Creates a square or rectangle.

When center is true the square is centered on the origin.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Geom2</code> - new 2D geometry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | options for construction |
| [options.size] | <code>Float</code> | <code>[1,1]</code> | size of the square, either as array or scalar |
| [options.center] | <code>Boolean</code> | <code>false</code> | wether to center the square/rectangle or not |

**Example**  
```js
let square1 = square({size: [x, y], center: true})
let square2 = square({size: x})
```

### jscad-scad-api.str
Convert all arguments to strings and concatenated.

NOTE: Arguments are concatenated as given, no spaces added.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  

### jscad-scad-api.is\_undef ⇒ <code>Boolean</code>
Determine if the give value is undefined.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Boolean</code> - true if the given value is null or undefined  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | value to test |

**Example**  
```js
if (is_undef(exploded)) ...
```

### jscad-scad-api.vector\_char ⇒ <code>Object</code>
Construct a with, segments tupple from a character

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - { width: X, segments: [...] }  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Float</code> | x offset |
| y | <code>Float</code> | y offset |
| char | <code>Float</code> | character |

**Example**  
```js
let charData = vector_char(0, 12.2, 'b')
```

### jscad-scad-api.vector\_text ⇒ <code>Array</code>
Construct an array of with, segments tupple from a string

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Array</code> - [{ width: X, segments: [...] }]  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Float</code> | x offset |
| y | <code>Float</code> | y offset |
| string | <code>Float</code> | string |

**Example**  
```js
let stringData = vector_text(0, 12.2, 'b')
```

### jscad-scad-api.translate ⇒ <code>Object</code> \| <code>Array</code>
Translate the elements along the specified vector.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> \| <code>Array</code> - the translated element, or a list of translated elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | options for translating |
| [options.v] | <code>Array</code> | <code>[0,0,0]</code> | a vector that defines the movement in position |
| ...elements | <code>Object</code> |  | the elements to translate |

**Example**  
```js
let moved1 = translate({v: [10, 2]}, square()) // translate 2D element
let moved2 = translate({v: [10, 2, 0]}, sphere())
```

### jscad-scad-api.union ⇒ <code>Object</code>
Creates a union of all elements (logical OR). This is the sum of all elements.

NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.

**Kind**: static constant of [<code>jscad-scad-api</code>](#module_jscad-scad-api)  
**Returns**: <code>Object</code> - the union of the elements  

| Param | Type | Description |
| --- | --- | --- |
| ...elements | <code>Object</code> | the elements to union |

**Example**  
```js
let newshape = union(sphere(), cube())
```
