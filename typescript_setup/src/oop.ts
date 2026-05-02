// oop in typescript is programming 
class Car {
    brand: string
    model:string
    price:number

    constructor(brand:string, model:string, price:number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const car1 = new Car("audi", "Q7", 20000000);

console.log(car1)

/// access modifier in typescript

 class car2 {
    public engine: string = "v8";
    private quality = "good";

    // protected 

    revealQuality() {
        return this.quality;
    }
 }
 const car2info = new car2()
 car2info.revealQuality()