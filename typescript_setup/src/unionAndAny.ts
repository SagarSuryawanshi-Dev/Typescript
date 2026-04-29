
// Union and Any

// Union 
// A union type means a variable can hold more than one type

let value: string | number;
value = "Hello";
value = 42;
// here value can be either a string or number;

let airlineseat: "window" | "aisle" | "middle";

airlineseat = "window";  //valid
// airlineseat = "last";  // invalid


// any
