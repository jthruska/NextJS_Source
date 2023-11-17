import { useState, useEffect } from "react"
import "./CountButton.css"

export default function CountButton(props) {
    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + props.increment)
    }

    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }

    const buttonStyle = {
        backgroundColor : props.bgc,
        color : "white",
        padding: "1em"
    }

    useEffect(rollOverCount, [count])
    return (
        <div>
            <button onClick={handleClick} style={buttonStyle}>+{props.increment}</button>
            <div>{count}</div>
        </div>
    )
}