import { use } from "react"

export default function Friends({ callFriends }) {
    const friends = use(callFriends)
    return (
        <>
            <div className="card">
                <h2>Total Friends: {friends.length}</h2>
                <div >
                    {friends.map((friend) => (
                        <p className="friend card"><span className="span">Name: </span>
                            {friend.name}  <span className="span">Email: </span> {friend.email}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
