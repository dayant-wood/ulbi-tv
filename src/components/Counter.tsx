import {useState} from "react";
import css from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const onClick = () => {
        setCount(prevState => prevState + 1)
    }

    return <div className={css.container}>

        <p>{count}</p>
        <button className={css.button} onClick={onClick}>Click me</button>
    </div>
}