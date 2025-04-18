"use client";

import { useState } from "react";


export default function Counter() {
    const [count, setCoount] = useState(0);

    const handleIncrement = ()=>setCoount(prev=>prev+1);
    const handleReset = () => setCoount(0);
  return (
    <div>
        <h1>React counter app</h1>
        <div>
            <p>{count}</p>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    </div>
  )
}