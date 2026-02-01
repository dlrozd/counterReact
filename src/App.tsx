import './App.css'
import {Buttons} from "./Buttons.tsx";
import {Counter} from "./Counter.tsx";
import {useState} from "react";
import {SetValues} from "./SetValues.tsx";

function App() {

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const reset = () => setCount(0)

    return (
        <div>
            <SetValues/>
            <Counter count={count}/>
            <Buttons count={count} increment={increment} reset={reset}/>
        </div>
    )
}

export default App
