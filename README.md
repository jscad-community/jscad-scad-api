# jscad-scad-api

> JSCAD bridge for OpenSCAD designs

## Overview

This packages provides a OpenSCAD-like API. See [OpenSCAD User Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)

This allows OpenSCAD designs to be ported to JSCAD, and gives OpenSCAD designers a slightly easier learning experience.
However, OpenSCAD designs need to be converted to JSCAD (and JavaScript).

## Usage

## Implementation Notes

OpenSCAD is based on some bazzare non-procedural language, while JSCAD is 100% JavaScript.
A lot of language constructs are the same but there will be some pain, and learning required.

This package doesn't try to reproduce OpenSCAD, but does provide most of the functionality found in OpenSCAD.
The main difference is that the 'named' parameters are required. This shouldn't be hard but OpenSCAD designs may need some changes.
For example, OpenSCAD translate([1,2,3]) needs to be changed to translate(v=[1,2,3])

### 2D Objects
| Shape   | Parameters    | Notes       |
| square  | size, center  |             |
| circle  | r, d          |             |
| polygon | points, paths |             |
| text    |               | UNSUPPORTED |

### 3D Objects
| Shape      | Parameters                      | Notes       |
| cube       | size, center                    |             |
| sphere     | r, d                            |             |
| cylinder   | h, r, r1, r2, d, d1, d2, center |             |
| polyhedron | points, faces                   |             |
| surface    |                                 | UNSUPPORTED |

### Transforms
| Function       | Parameters        | Notes       |
| color          | c                 |             |
| rotate         | a, v              |             |
| translate      | v                 |             |
| mirror         | v                 |             |
| multmatrix     | m                 |             |
| scale          | v                 |             |
| resize         | newsize, auto     |             |
| offset         | r, delta, chamfer |             |
| minkowski      |                   | UNSUPPORTED |
| hull           |                   |             |

# Dimension Changes 2D/3D
| Function       | Parameters                              | Notes       |
| projection     |                                         | UNSUPPORTED |
| linear_extrude | height, v, center, twist, slices, scale |             |
| rotate_extrude | angle                                   |             |

### Boolean Combinations
| Function     | Parameters | Notes |
| union        |            |       |
| difference   |            |       |
| intersection |            |       |

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
| str      | ...values  |   |
| chr      | number     |   |
| ord      | string     |   |

### Type Test Functions
| Function  | Parameters | Notes |
| is_undef  | value      |   |
| is_bool   | value      |   |
| is_num    | value      |   |
| is_string | value      |   |
| is_list   | value      |   |

### Language Features
| Function    | Parameters | Notes |
| assert      | ...values  |  |
| echo        | ...values  |  |
| search      |            | UNSUPPORTED |
| version     |            |  |
| version_num |            |  |

If you don't see a function above then it's not supported, or the JavaScript language may have the same construct.

## License

[The MIT License (MIT)](./LICENSE)
(unless specified otherwise)

