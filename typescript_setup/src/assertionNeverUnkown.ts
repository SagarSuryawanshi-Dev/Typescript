// production code try catch 

// assertion is when we want to make sure that certain value is of certain type.
// assertion is used when we are sure about the data type but typescript not able to infer it.
// assertion is used to tell typescript that we are sure about the type of a variable and it should npt throw an error.

let response: unknown = "42";
let numericResponse: number  = (response as string).length; // assertion


// UNKOWN AND ANY

let value : any
value = 42;
value = "Hello";
value = [1,2,3];
value.toUpperCase()

let newValue : unknown
newValue = 42;
newValue = "Hello";
newValue = [1,2,3];

 if(typeof newValue === "string") {
    newValue.toUpperCase()
 }



//  try catch block
try{

}catch(error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log("Error, error")
}


// Never 
// never is a type that represent value that never occur.It is used to represent the return type of a function that never return anything or a function that always throw an error.