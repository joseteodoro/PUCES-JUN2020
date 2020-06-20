# PUCES-JUN2020 A class about code desing, design patterns and good practices

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

[Quiz](https://forms.gle/swTYNkL3u67c2R6N7)

### Object oriented programming

- Abstraction, Polymorphism, Encapsulation and Inheritance

- Coupled classes, god classes, huge inheritance chains, tangled code, hyper fine grained O.O.P.

## Most known O.O.P design patterns

- creational, structural and behavioral

- and others more than that

- why use patterns?

- pros and cons

- anemic vs rich models

- stateful vs stateless

### creational

Hides complexity, 
expose specific boundaries, 
hides configuration to improve simplicity when using some code / function,
reuse expensive or scarce resources

### structural

Ways to glue your code pieces reusing already known approaches,
ways to organize you code to avoid some caveats

### behavioral

Well known solutions for recurrent problems (skeleton algorithm)

## Creational Patterns

### Factory method

- Keep going with contracts and types (when possible)

- enables extension (creating new types and reusing the same contract without
other changes)

- centralize object creation

#### Usage

- use the Factory Method when you don’t know beforehand the 
exact types and dependencies of the objects your code should
work with

- Use the Factory Method when you want to provide users of your
library or framework with a way to extend its internal components

- Factory vs curried function

#### Cons

- CONS: The code may become more complicated since you need to introduce
a lot of new subclasses to implement the pattern

### Abstract Factory

- same as above

#### Usage

- Use the Abstract Factory when your code needs to work with various
families of related products, but you don’t want it to depend on the
concrete classes of those products

- Consider implementing the Abstract Factory when you have a class with
a set of Factory Methods that blur its primary responsibility

#### Cons

- CONS: The code may become more complicated than it should be, since a lot of
new interfaces and classes are introduced along with the pattern

### Builder

- lets you construct complex objects step by step. The pattern allows
you to produce different types and representations of an object using
the same construction code

- who know how to build is NOT the caller

- there are optional items you can put on the object

#### Usage

- use the Builder pattern to get rid of a “telescopic constructor”

- use the Builder pattern when you want your code to be able to create
different representations of some product

#### Cons

- CONS: The overall complexity of the code increases since the pattern
requires creating multiple new classes

### Object Pool

- reuse what is scarce

- what about the queue size?

- what we do when there is no more resources?
Throw error or enqueue?

### Prototype

- reuse what is expensive to load

- what about concurrence?

- lets you copy existing objects without making your code dependent
on their classes (let's clone)

- you can clone objects without coupling to their concrete
classes

#### Usage

- use the Prototype pattern when your code shouldn’t depend on the
concrete classes of objects that you need to copy

#### Cons

- cloning complex objects that have circular references might be very tricky

- be careful about concurrence

#### Prototype Registry 

- provides an easy way to access frequently-used prototypes.
It stores a set of pre-built objects that are ready to be copied.
The simplest prototype registry is a name → prototype hash map.
However, if you need better search criteria than a simple name,
you can build a much more robust version of the registry

### Dependency injection

- the caller class should depends on the abstraction, 
and we can change the behavior changing the setup

- we can use builders to change those dependencies

- we can use factories or config files to setup those classes

#### Cons

- what about fill what is really needed and keep optional what is nice to have?

### Singleton

- let's code statically

- lets you ensure that a class has only one instance,
while providing a global access point to this instance

- abstract factories, builders, prototypes and pools can all be
implemented as singletons

- what about concurrence?

#### Usage

- use the Singleton pattern when a class in your program should have
just a single instance available to all clients; for example, a
single database object shared by different parts of the program

- use the Singleton pattern when you need stricter control over global
variables

#### Cons

- violates the Single Responsibility Principle. The pattern
solves two problems at the time

- the Singleton pattern can mask bad design, for instance, when
the components of the program know too much about each other

- it may be difficult to unit test the client code

## Structural Patterns





Resources:

[refactoring.guru](https://refactoring.guru/design-patterns)

[sourcemaking](https://sourcemaking.com/design_patterns/)

[solution architecture patterns](https://github.com/chanakaudaya/solutions-architecture-patterns)

[The Architecture of Open Source Applications](http://aosabook.org/en/index.html)

