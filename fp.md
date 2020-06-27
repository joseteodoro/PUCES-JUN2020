## Functional programming to improve quality

```
// Let have some users on!
const users = []
const data = []
```

### map

- Transform items returning changed ones

- Parallel

- `list states!`

### filter

- filter list items and return only those ones matching a predicate

- `all users from Oregon!`

### reduce

- Join a lot of items in a single result (like a for each)

- Need to wait all partial results to return, but dont need to wait to process
a couple of parts

- `sum of amount from Oregon users!`

### find

- returns the first item matching a predicate

- `find data from one specific user id!`

### flip

- flip arguments order

### Curry

- Partial application to avoid know a lot of other artifacts when
calling a function

- Simplify a call with a lot of arguments to a simpler one

### pick

- picks an attribute / field and returns only that instead of the entire object

### prop

- function to returns an attribute / field

### propOr

- same as prop, but has a default value

### assoc

- adding some prop for the content

### groupBy / splitBy

- get a list and group by some criteria

### compose / pipe

- Concatenate functions / steps to do not need to have intermediate vars / consts

### evolve

- runs a function to evolves a field / attribute
