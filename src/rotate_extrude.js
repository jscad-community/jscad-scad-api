const { maths, utils, extrusions, measurements } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')
const { get_fragments_from_options } = require('./globals.js')

/**
 * Rotational extrusion spins a 2D shape around the Z-axis to form a solid which has rotational symmetry.
 *
 * If used, $fa, $fs and $fn must be named parameters.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.angle=360] - number of degrees to sweep, starting at the positive X axis. The direction of the sweep is counterclockwise, hence a negative angle sweeps clockwise.
 * @returns {Geom3} new 3D geometry
 *
 * @example
 */
const rotate_extrude = (options, object) => {
  // check the options
  checkOptions(options, []) // allow named options with defaults

  const defaults = {
    angle: 360,
    fa: 12,
    fs: 2,
    fn: 0
  }
  const { angle, fa, fs, fn } = Object.assign({}, defaults, options)

  // convert angle to sweep angle and sweep stop angle
  // NOTE: OPENSCAD start angle is zero, sweeping +/- degrees
  let sweepStart = 0.0
  let sweepAngle = utils.degToRad(angle)
  if (sweepAngle < 0.0) {
    sweepStart = maths.constants.TAU + sweepAngle
    sweepAngle = Math.abs(sweepAngle)
  }

  // calculate the number of segments to create
  const center = measurements.measureCenter(object)
  const distance = maths.vec2.length(center)
  const sweepSegments = get_fragments_from_options(options, distance)

  // determine the options for JSCAD
  options = {
    angle: sweepAngle,
    startAngle: sweepStart,
    segments: sweepSegments
  }

  return extrusions.extrudeRotate(options, object)
}

module.exports = rotate_extrude
