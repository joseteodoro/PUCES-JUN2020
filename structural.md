## Structural Patterns

### Adapter

- allows objects with incompatible interfaces to collaborate

- the adapter implements the interface of one object and wraps the other one

#### Usage

- Use the Adapter class when you want to use some existing class, but its interface
  isn’t compatible with the rest of your code

- Migrations and design refactoring!

#### Cons

- The overall complexity of the code increases because you need to introduce a set of
  new interfaces and classes. Sometimes it’s simpler just to change the service class so
  that it matches the rest of your code.

### Bridge

- SPI e API

- lets you split a large class or a set of closely related classes into
  two separate hierarchies—abstraction and implementation
  which can be developed independently of each other

#### Usage

- Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some function- ality (for example, if the class can work with various database servers)

- Use the Bridge if you need to be able to switch implementa- tions at runtime.

#### Cons

- You might make the code more complicated by applying the pattern to a highly cohesive class.

- high coupled artifacts (SPI and API)

### Composite

- lets you compose objects into tree structures and then work with these
  structures as if they were individual objects

#### Usage

- Use the Composite pattern when you have to implement a tree-like object structure.

- Use the pattern when you want the client code to treat both simple and complex elements uniformly.

#### Cons

- It might be difficult to provide a common interface for class- es whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.

### Decorator

- lets you attach new behaviors to objects by placing these objects inside
  special wrapper objects that contain the behaviors

### Facade

- hides complexity and internal structure

- provides a simplified interface to a library, a framework, or any other complex set of classes

#### Usage

#### Cons

### Flyweight

- lets you fit more objects into the available amount of RAM by sharing common
  parts of state between multiple objects instead of keeping all of the data in
  each object

#### Usage

#### Cons

### Proxy

- lets you provide a substitute or placeholder for another object. A proxy controls
  access to the original object, allowing you to perform something either before or
  after the request gets through to the original object (lazy evaluation)

#### Usage

#### Cons
