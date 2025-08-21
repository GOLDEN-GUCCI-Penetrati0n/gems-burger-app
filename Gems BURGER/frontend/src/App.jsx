
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
export default function App() {
  const [coins,setCoins]=useState(0);
  const [energy,setEnergy]=useState(1000);
  useEffect(()=>{const interval=setInterval(()=>{setEnergy(prev=>(prev<1000?prev+1:1000))},2000);return()=>clearInterval(interval)},[]);
  return <div className="min-h-screen bg-yellow-100 flex flex-col items-center font-sans p-6">
    <h1 className="text-4xl font-bold text-orange-600 mb-6">🍔 Gems BURGER</h1>
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md text-center">
      <p>Монеты: {coins}</p>
      <p>Энергия: {energy}/1000</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2 mb-4">
        <div className="bg-green-500 h-4 rounded-full" style={{width:`${(energy/1000)*100}%`}}></div>
      </div>
      <button onClick={()=>setCoins(c=>c+1)} className="bg-orange-500 px-4 py-2 rounded-xl text-white shadow hover:bg-orange-600">🍔 Tap!</button>
    </div>
  </div>;
}
const root=createRoot(document.getElementById("root"));
root.render(<App />);
