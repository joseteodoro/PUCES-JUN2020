## Concurrency and paralellism

- concurrency vs paralellism

- Many CPUs due physic limitations

- concurrency and paralellism due many CPUs

- deadlocks and race conditions

- immutable > mutable

- stateless > stateful

- we dont know when concurrency tasks will run, but we
can ensure the order

- paralellism limited for restrictions on your business logic

- shared state (readonly) is great

- shared state (with writing) is complex

- hard to find bugs and reproduce errors

- different approachs to craft an imperative or
concurrency code

- hadoop sending code to servers instead of sending the 
data files (google + apache software foundation)

- map / reduce:
    - map to divide the work and run the software on each server
    on the cluster
    - reduce to join and merge the results from the servers