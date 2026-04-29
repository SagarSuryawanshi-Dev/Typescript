// Annotation and Inference in TypeScript

// 1. Type Annotation
// Annotation means explicitly specifying the type.

let username: string = "TypeScript";
let age: number = 10;

function add(a: number, b: number): number {
return a + b;
}

// 2. Type Inference
// Inference means TypeScript automatically determines the type based on the value.

let name = "TypeScript";   // inferred as string
let count = 10;            // inferred as number
