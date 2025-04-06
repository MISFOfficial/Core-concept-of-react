import { use } from "react"

export default function Friends({ callFriends }) {
    const Friends = use(callFriends)
    return (
        <>
            <div>
                <h2>Total Friends: {Friends[0].name}</h2>
            </div>
        </>
    )
}