import "./App.css";
import { Chaicard } from "./Components/Chaicard.tsx";
import { Counter } from "./Components/Counter.tsx";

import type { Chai } from "./types.ts";
import { ChaiList } from "./Components/ChaiList.tsx";

const chaiItems: Chai[] = [
  { id: 1, name: "MAsala Chai", price: 10 },
  { id: 2, name: "Ginger Chai", price: 20 },
  { id: 3, name: "Green Chai", price: 30 },
];

function App() {
  return (
    <div>
      <h1>React + Typescript</h1>
      <Chaicard name={"Headphone"} price={5000} />

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items= {chaiItems} />
      </div>
    </div>

  );
}

export default App;
