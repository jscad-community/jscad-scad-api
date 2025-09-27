import { vec2, TAU, degToRad, extrudeRotate, measureCenter } from '@jscad/modeling'

import { checkOptions } from './commonChecks.js'
import { get_fragments_from_options } from './globals.js'

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
export const rotate_extrude = (options, object) => {
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
  let sweepAngle = degToRad(angle)
  if (sweepAngle < 0.0) {
    sweepStart = TAU + sweepAngle
    sweepAngle = Math.abs(sweepAngle)
  }

  // calculate the number of segments to create
  const center = measureCenter(object)
  const distance = vec2.length(center)
  const sweepSegments = get_fragments_from_options(options, distance)

  // determine the options for JSCAD
  options = {
    angle: sweepAngle,
    startAngle: sweepStart,
    segments: sweepSegments
  }

  return extrudeRotate(options, object)
}
