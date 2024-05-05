/**
 * The $fn, $fs and $fa special variables control the number of facets used to generate an arc.
 */
let $fn = 0 // number of fragments per rotation
let $fs = 2 // the minimum size of a fragment
let $fa = 12 // the minimum angle for a fragment

let $preview = true

const GRID_FINE = 0.00000095367431640625 // guessing

const get_fragments_from_r = (r, fn, fs, fa) => {
  if (r < GRID_FINE) return 3
  if (fn > 0.0) return fn >= 3 ? Math.floor(fn) : 3
  return Math.ceil(Math.max(Math.min(360.0 / fa, r * 2 * Math.PI / fs), 5))
}

const get_fragments_from_options = (options, r) => {
  const fn = ('$fn' in options) ? options.$fn : $fn
  const fs = ('$fs' in options) ? options.$fs : $fs
  const fa = ('$fa' in options) ? options.$fa : $fa

  return get_fragments_from_r(r, fn, fs, fa)
}

module.exports = { $fn, $fs, $fa, $preview, get_fragments_from_r, get_fragments_from_options }
