## Functional programming to improve quality

Define functions to combine without imperative.

f(x) = x + 1

g(x) = x^2

((x + 1)^2) =~ g( f(x) )

const banana = f(args)
const b2 = g(banana)
const b3 = h( b2, banana ) =~ h( g( f(x) ), f(x) )

```
// Let have some users on!
const users = []
const data = []
```

### x map

- Transform items returning changed ones without side effects

- Parallel / concurrent

- `list states!`

### x filter

- filter list items and return only those ones matching a predicate

- `all users from Oregon!`

### x reduce

- Join a lot of items in a single result (like a for each)

- Need to wait all partial results to return, but dont need to wait to process
a couple of parts

- `sum of amount from Oregon users!`

### find

- returns the first item matching a predicate

- `find data from one specific user id!`

### flip

- flip arguments order

### x Curry

- Partial application to avoid know a lot of other artifacts when
calling a function

- Simplify a call with a lot of arguments to a simpler one

### pick

- picks an attribute / field and returns only that instead of the entire object

### x prop

- function to returns an attribute / field

### propOr

- same as prop, but has a default value

### assoc

- adding some prop for the content

### groupBy / splitBy

- get a list and group by some criteria

### x compose / pipe

- Concatenate functions / steps to do not need to have intermediate vars / consts

### evolve

- runs a function to evolves a field / attribute

### resources

[Most adequated guide to fp](https://github.com/MostlyAdequate/mostly-adequate-guide)

[Professor Frisby classes - introduction to fp](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript)

[FP patterns (a bit advanced)](https://medium.com/free-code-camp/functional-programming-patterns-cookbook-3a0dfe2d7e0a)