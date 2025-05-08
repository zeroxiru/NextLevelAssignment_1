# TypeScript Blogging

 

1. What are some differences between interfaces and types in TypeScript?

## **TYPES**

### Type Annotations on Variables

When you declare a variable using `const`, `var`, or `let`, you can optionally add a type annotation to explicitly specify the type of the variable:

Example:

          let myName: string = "Alice";

### Types in **Functions**

### What Are Parameter Type Annotations?

When defining a function, you can indicate the expected type for each parameter by placing a colon (`:`) followed by the type after the parameter name. This helps TypeScript ensure that the correct types are used when the function is called.

// Parameter type annotation
function greet(name: string) {
console.log("Hello, " + name.toUpperCase() + "!!");
}

### What About Return Type Annotations?

You can also specify the type of value a function returns by adding a colon and the type after the parameter list.

**Example:**

function getFavoriteNumber(): number {
return 26;
}

## Object Types

Apart from primitives, the most common sort of type you’ll encounter is an *object type*. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

Here, we annotated the parameter with a type with two properties - `x` and `y` - which are both of type `number`. You can use `,` or `;` to separate the properties

## Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start *combining* them in interesting ways.

### Defining a Union Type

The first way to combine types you might see is a *union* type. A union type is a type formed from two or more other types, representing values that may be *any one* of those types

function printId(id: number | string) {
console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

## Type Aliases

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

type Point = {
x: number;
y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

# **Interfaces**

An *interface declaration* is another way to name an object type:

```
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 })
For example, here’s a function that takes a point-like object:

```

Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the *structure* of the value we passed to `printCoord` - it only cares that it has the expected properties.

### Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

![image.png](attachment:f378bd63-9b45-40ad-9293-d5e2bb460221:image.png)

1. 

![image.png](attachment:6c29b050-71a4-4fe0-9894-b65f9ec3b2b5:image.png)

1. 
2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

# **Keyof Type Operator**

## The `keyof` type operator

The `keyof` operator takes an object type and produces a string or numeric literal union of its keys. The following type `P` is the same type as `type P = "x" | "y"`:

type Point = { x: number; y: number };
type P = keyof Point;

The `keyof` keyword in TypeScript is used to extract the **keys** of an object type as a **union of string literal types**.

### ✅ Use Case:

`keyof` is helpful when you want to create types that are constrained to the keys of another object or interface.

interface Person {
name: string;
age: number;
isStudent: boolean;
}

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "isStudent"

1. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.