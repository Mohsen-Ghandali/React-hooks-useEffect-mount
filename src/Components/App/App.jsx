import { useEffect, useState } from "react";

const App = () => {
const [counter,setCounter]=useState(0)
const [person,setPerson]=useState("")
 useEffect(()=>{
  console.log("trigger counter");
 },[counter,person])
  return (
    <>
      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">

        <button onClick={()=>setCounter(counter+1)} className="mx-2">+</button>

        <h5 className="mt-3">Counter: {counter}</h5>
        
        <input type="text" className="form-control" placeholder="write here" onChange={(e) => setPerson(e.target.value)} />

   
      </div>
    </>
  );
};

export default App;

