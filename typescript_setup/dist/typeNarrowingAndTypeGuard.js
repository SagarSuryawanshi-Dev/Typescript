"use strict";
// Type Narrowing and Type Guard
Object.defineProperty(exports, "__esModule", { value: true });
// Type Narrowing
// when a variable can be multiple types .Typescript doesn’t know which one is at runtime.
function print(value) {
    //   console.log(value.length); // ❌ Error
}
// length exists on string,but not on [Number.So](http://Number.So) Typescript block it.
// narrow the type using checks:
// 1. **typeof**
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.length); // ✅ string
    }
    else {
        console.log(value.toFixed(2)); // ✅ number
    }
}
class Typescript {
    learn() {
        console.log("Learning Typescript");
    }
}
class Javascript {
    learn() {
        console.log("Learning Javascript");
    }
}
function learnLanguage(Language) {
    if (Language instanceof Typescript) {
        Language.learn();
    }
}
function isemployee(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.type === "string");
}
function addEmployee(empolyee) {
    if (isemployee(empolyee)) {
        console.log(`Empolyee Name : ${empolyee.name}, Age: ${empolyee.age}, Type: ${empolyee.type} is added to the database`);
    }
    return console.log("invalid info of employee");
}
// Type Guard
//# sourceMappingURL=typeNarrowingAndTypeGuard.js.map