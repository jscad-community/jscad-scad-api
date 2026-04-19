/*
 * Ranges are a syntactic short form for specifying a sequence of numbers, written in two forms:
 *
 *     [<start>:<end>] // increment defaults to 1
 *     [<start>:<increment>:<end>]
 *
 * Note: the use of ':' as separators distinguishes these from vectors, which use commas.
 *
 * The increment in a range may be negative, but then start should be smaller than end else a warning will be generated that stops execution.
 *
 * @see rangeToken.js for the plugin to JSEP
 */
export const range = (s, i, e) => {
  if (!e) {
    // short form
    // - only start and end are provided
    // - increment defaults to 1
    e = i
    i = 1
  }
  // When start is less than end, with a negative increment, no warning is generated but sets a null range, equivalent to [].
  if (s < e) {
    // positive range from s to e, expecting + increment
    if (i <= 0) {
      console.log(`WARNING: positive range has invalid increment; ${s} - ${e}, ${i}`)
      return []
    }
  }
  if (s > e) {
    // negative range from s to e, expecting - increment
    if (i >= 0) {
      console.log(`WARNING: negative range has invalid increment; ${s} - ${e}, ${i}`)
      return []
    }
  }

  // generate a list of indexes
  const indexes = []

  if (s <= e) {
    while (s <= e) {
      indexes.push(s)
      s = s + i
    }
  } else {
    while (s >= e) {
      indexes.push(s)
      s = s + i
    }
  }

  // check that start + increment x (end-start)/increment == end
  if ((s - i) !== e) {
    console.log(`WARNING: range has inconsistent increment (${i}); end ${e} != ${s}`)
  }

  return indexes
}
