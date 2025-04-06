import { useState } from "react"

export default function Counter() {
    // console.log("Jahin")
    const [count, setTime] = useState(0)

    const handleAdd = () => {
        setTime(count + 1)
    }
return (
    <>
        <div className="card">
            <h2>Total Run : {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    </>
)
}