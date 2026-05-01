// function
function winnerOfTheMatch(year: number, team: string) {
  console.log(`The Winner Of the Match in ${year} is ${team}`);
}

winnerOfTheMatch(2025, "India");

function winningPrice(): number {
  return 50000000;
}

function maywinn(type?: string) {
  //it can be string or undefined
  if (type === "car") {
    console.log("winner can get car");
  } else if (type === "house") {
    console.log("winner can get house");
  }
}

//   function with more parameters
function playerDetails(details: {
  name: string;
  age: number;
  team: string;
  type: string;
}): void {
  console.log(
    `The Player Name is ${details.name} and his age is ${details.age} and he is playing for ${details.team} and his type is ${details.type}`,
  );
}
