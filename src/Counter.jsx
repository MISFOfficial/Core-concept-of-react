import { useState } from "react"

export default function Counter() {
    // console.log("Jahin")
    const [count, setTime] = useState(0)

    const handleAdd = () => {
        setTime(count + 1)
    }
    const counterStyle = {
        border: '2px solid yellow',
        padding: '20px',
}
return (
    <>
        <div style={counterStyle}>
            <h2>Total Run : {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    </>
)
}