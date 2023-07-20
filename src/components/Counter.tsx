import { useState } from "react";
import './Counter.scss';




export function Counter() {
    const [counter, setCounter] = useState<number>(0);


    return(<div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>

    </div>)
}