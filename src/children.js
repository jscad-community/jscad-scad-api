import { flatten } from '@jscad/modeling'

export let $children = 0

// children()                         all children
// children(index)                    value or variable to select one child
// children([vector])                 selection of several children
export const children = (vector, allchildren) => {
  if (!allchildren) return vector

  const indexes = Array.isArray(vector) ? vector : [vector]
  const selected = indexes.map((i) => {
    return allchildren.slice(i, i + 1) // array of values
  })
  return flatten(selected) // values
}
