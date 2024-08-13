import {useState} from "react";
import './Counter.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)

    const onClick = () => {
        setCount(prevState => prevState + 1)
    }

    return <div>

        <p>{count}</p>
        <button onClick={onClick}>Click me</button>
    </div>
}