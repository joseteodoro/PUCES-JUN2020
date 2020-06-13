# A class about code desing and good practices

#### Class structure

- exercises (individual), multi choice quizes(individual), a good white board test in the end (group).

Do it all and will be fine! :D

## Good practices

### Design principles

- good desing, concise, clean, simple

- maintenance, extension, simplicity

- DRY, SOLID, KISS

- does'nt matter the programming paradigm

### Some tips

- code for contract if needed

- encapsulate what changes more

- composition is better then inheritance

- keep same granularity and have naming , style and convention consistent

- have well defined boundaries over components / packages

- Software architecture does not age gracefully. Choose your battles (for maintenance)

- don't suprise other devs with unexpected behavior and don't update function parameters' contents

- respect namespacing

- Convention over Configuration over Code

- Env vars over Files over Hard coded (default)

## About flexibility and complexity

- rigid vs flexible

- easy vs hard

- simple vs complex

- what if we use a bit of both?

## About patterns

First of all, what is a pattern? Recurrent solutions for recurrent problems

### Object oriented programming

- Abstraction, Polymorphism, Encapsulation and Inheritance

- Coupled classes, god classes, huge inheritance chains, tangled code, hyper fine grained O.O.P.

## Most known O.O.P design patterns

- creational, structural and behavioral

- and others more than that

- why use patterns?

- pros and cons

### creational

Hides complexity, 
expose specific boundaries, 
hides configuration to improve simplicity when using some code / function,
reuse expensive or scarce resources

### structural

Ways to glue your code pieces

### behavioral

Well known solutions for recurrent problems

## Creational Patterns

### Factory method

- Keep going with contracts and types (when possible)

- Factory vs curried function

### Abstract Factory

- same as above

### Builder

- who asks / know how to build is NOT the caller

### Singleton

- let's code statically

- what about concurrence?

### Object Pool

- reuse what is scarce

- what about the queue size?

### Prototype

- reuse what is expensive to load

- what about concurrence?

### Dependency injection

- what about fill what is really needed and keep optional what is nice to have?
