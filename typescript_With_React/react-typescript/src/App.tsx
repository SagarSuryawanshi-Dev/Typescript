import "./App.css";
import { Chaicard } from "./Components/Chaicard.tsx";
import { Counter } from "./Components/Counter.tsx";

import type { Chai } from "./types.ts";
import { ChaiList } from "./Components/ChaiList.tsx";
import { OrderForm } from "./Components/OrderForm.tsx";

const chaiItems: Chai[] = [
  { id: 1, name: "MAsala Chai", price: 10 },
  { id: 2, name: "Ginger Chai", price: 20 },
  { id: 3, name: "Green Chai", price: 30 },
];

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px"}}>

        <div style={{ border:"1px solid black", width:"fit-content",margin:"auto", marginTop:"10px",padding:"5px"}}>
          <h1>React + Typescript</h1>
          <Chaicard name={"Headphone"} price={5000} />
        </div>
        
        <div style={{ border:"1px solid black", width:"fit-content",margin:"auto",marginTop:"10px",padding:"5px"}}>
          <Counter />
        </div>

        <div style={{ border:"1px solid black", width:"fit-content",margin:"auto",marginTop:"10px",padding:"5px"}}>
          <ChaiList items= {chaiItems} />
        </div>

        {/* order form */}
        <div style={{ border:"1px solid black", width:"fit-content",margin:"auto", marginTop:"10px",padding:"5px"}}>
          <OrderForm
           onSubmit={(order)=> {
            console.log("Your Order:", order.name, order.cups)
          }} /> 
        </div>

    </div>

  )
}

export default App;
