import "./App.css";
import { Counter } from "./components/counter.tsx";
import { Card } from "./components/typescriptComponent.tsx";

function App() {
  return (
    <>
      <div>
        <h1>React With Typescript</h1>
        <Card name="headphones" price={5000} />
      </div>
      
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
