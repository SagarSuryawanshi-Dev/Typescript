type info = {
    name: string,
    age:number,
    city:string
}



function person(detail:info) {
    console.log(detail)
}

function personTwo(detail:info){
    console.log(detail)
}



type LearnLanguage = {
    language:string,
    duration:number
}

class Javascript implements LearnLanguage {
    language: "nodejs" = "nodejs"
    duration:  3 = 3;
}


interface job {
    title:string,
    salary:number
}

class softwareEngineer implements job {
    title: "Software Engineer" = "Software Engineer";
    salary: 50000 = 50000;
}

// most of the user  interface are used to define the shape of an object and class are used to define blueprint of an object and to create multiple objects with the same properties and methods.