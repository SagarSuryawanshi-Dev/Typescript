// Type Narrowing and Type Guard

// Type Narrowing
// when a variable can be multiple types .Typescript doesn’t know which one is at runtime.

function print(value: string | number) {
//   console.log(value.length); // ❌ Error
}

// length exists on string,but not on [Number.So](http://Number.So) Typescript block it.

// narrow the type using checks:

// 1. **typeof**

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ string
  } else {
    console.log(value.toFixed(2)); // ✅ number
  }
}

class Typescript {
    learn () {
        console.log("Learning Typescript")
    }
}

class Javascript {
    learn () {
        console.log("Learning Javascript")
    }
}

function learnLanguage(Language: Typescript | Javascript) {
    if( Language instanceof Typescript) {
        Language.learn()
    }

}

type employee = {
    name:string,
    age:number,
    type: 'string'
}

function isemployee(obj: any):obj is employee {
    return (
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" && 
        typeof obj.type === "string"
    )
}

function addEmployee(empolyee:employee | string) {
    if(isemployee(empolyee)) {
        console.log(`Empolyee Name : ${empolyee.name}, Age: ${empolyee.age}, Type: ${empolyee.type} is added to the database`)
    }
    return console.log("invalid info of employee")
}
// Type Guard
