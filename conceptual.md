### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
A standardized pattern for defining API routes, especially for CRUD operations.

- What is a resource?
In RESTful routing a resource is the thing in-question. RESTful routing brings CRUD organiation to the resource

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?. Example, a user, book, movie, lego set, etc.

- What does idempotent mean? Which HTTP verbs are idempotent?
Repeatable operation where you get the same result with no side-effects, even if/when repeated multiple times.
Get, put, patch, and delete are idempotent. Although, delete is a bit of a grey-area. eg, if I delete a movie from my db, I'd get the same result each time, the movie will be removed. However, once the movie is deleted, it's gone, so the action cannot be repeated. 

- What is the difference between PUT and PATCH?
PUT updates an entire resource.
PATCH updates a portion of a resource.

- What is one way encryption?
When a stored password cannot be reverse-engineered into the original pw.

- What is the purpose of a `salt` when hashing a password?
Salt adds random characters to a password before it is hashed. This makes every hashed pw unique, even multiple people have the same password, each hashed pw will be unique becuase each pw receives a random salt before hashing. Salt also makes reverse-engineering of a hashed password extraordinarily difficult if not impossible.

- What is the purpose of the Bcrypt module?
It is an implementation of the Blowfish cypher which takes a string of a variable length and returns a much longer unrecognizable/random string of a fixed length. One of the features of the Bcrypt module is that if only 1 small change is made to the original pw input, the module output will look completely different, so that no pattern emerges between the out put of any similar pw inputs.

- What is the difference between authorization and authentication?
Authentication answers the question, "are you who you say you are?" It verifies identity.
Authoriation is the process of deciding who has access to a given area. It's the process of giving permissions based on identity.