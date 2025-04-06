import { use } from "react"

export default function Users({users}) {
    const user=use(users)
    console.log(user)
    return (
        <>
            <div className="card">
                <h2>Total Users: {user.length}</h2>
            </div>
        </>
    )
}