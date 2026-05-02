
interface Laptop {
    model: string,
    price: number
}

const dell: Laptop = {
    model:"Inspiron",
    price: 50000
}

interface Mobile {
    model: string
    readonly price: number
}

const samasung: Mobile = {
    model : "Galaxy S24",
    price: 80000
}
//  function handel inferface 


interface discountCalculator {
    (price:number): number
}

// to use this
const apply50: discountCalculator = (price) => price * 0.5;




// Generics are templates that allow you to create resuable 

function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray(5)
wrapInArray("hello")

function pair<A, B>(a:A, b:B): [A, B ]{
    return [a,b]
}

// usage
pair(1,"One")
pair("Hello", {name:"Alice"})

interface Box <T> {
    content: T
}
