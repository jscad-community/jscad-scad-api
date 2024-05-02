const { maths, utils, extrusions } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')

/**
 * Rotational extrusion spins a 2D shape around the Z-axis to form a solid which has rotational symmetry.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.angle=360] - number of degrees to sweep, starting at the positive X axis. The direction of the sweep is counterclockwise, hence a negative angle sweeps clockwise.
 * @param {Integer} [options.fa=12] - minimum angle (in degrees) of each fragment
 * @param {Integer} [options.fs=2] - minimum circumferential length of each fragment
 * @param {Integer} [options.fn=0] - if provided, number of fragments in 360 degrees
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
  let sweepSegments = fn
  if (sweepSegments <= 0) {
    const minLength = fs
    const minAngle = utils.degToRad(fa)
    sweepSegments = utils.radiusToSegments(sweepAngle, minLength, minAngle)
  }

  // determine the options for JSCAD
  options = {
    angle: sweepAngle,
    startAngle: sweepStart,
    segments: sweepSegments
  }

  return extrusions.extrudeRotate(options, object)
}

module.exports = rotate_extrude
