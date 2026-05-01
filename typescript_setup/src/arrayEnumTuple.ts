// array,enum and tuple in typescript

// array in typescript is a collection of similar type of data. it is used to store multiple values in a single variable.array can be created using array literal or using array constructor.

let players: string[] = ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Shikhar Dhawan"];

let scores: number[] = [100, 150, 200, 250];;

// array of obejcts

type players = {
    name:string,
    goodAt: string,
    average:number
}

const teamplayers: players[] = [
    {
        name:"rohit sharma",
        goodAt: "batting",
        average: 45
    },
    {
        name:"MS Dhoni",
        goodAt: "wicket keeping",
        average:30
    }
]

// read only array
// you can defin that array but you ca not modified it after defining it.
const teams: readonly string [] = ["mumbai indians", "chennai super kings", "delhi capitals", "kolkata knight riders"];


// multidiemensional array
const multidiemensionalArray: number[][] = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]

// tuples
// tuples in typescript is a feature which is used to define an array with fixed number of elements and fiexed types of elements.
// it is used to store a collection of values of different types in a single variable.tuple can be defined using tuple keyword.


let player: [string, number ,boolean] = ["Rohit sharma",35, true]
let player2: [string, number, boolean] = ["Virat", true, 32]

// optional tuple elemment

let player3: [string,number, boolean?] = ["KL Rahul",30,true]
player3 = ["shikhar Dhwan",35,false]

// Read only tuples
const teamOwner: readonly [string, string] = ["nita ambani", "SRK"]


// enum in typescript is a feature which is used to define a set of named constants.it is used to define a set of named constants which can be used in the program.enum can be defined using enum keyword.

enum qualifiedTeams {
    MI,
    KKR,
    CSK,
    RCB
}

const winner = qualifiedTeams.MI