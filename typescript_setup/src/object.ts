// object in typescript is collection of propertise and methods. it is used to store data and function in a single variable.
// object can be created using object literal or using class.

let team : {
    name:string,
    member: number,
    qualified: boolean
}  

team = {
    name: "mumbai indians",
    member: 11,
    qualified: false
}

type teamtype = {
    name:string,
    game:string,
    totalWins:number
    captains:string[]
    // array of string 
}

const fifa: teamtype = {
    name: "Juventus",
    game: "football",
    totalWins: 36,
    captains: ["Paul Dyabala", "Ronaldo","Buffon"]

}