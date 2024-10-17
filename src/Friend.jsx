import { useEffect, useState } from "react"
import DisplayFriend from "./DiplayFriend";
import './Friend.css'
export default function Friend() {
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div className="box">
            <h2>Friends:{friend.length}</h2>
            
            {
                friend.map((friends)=><DisplayFriend friends={friends}></DisplayFriend>)
            }
        </div>
    )
}