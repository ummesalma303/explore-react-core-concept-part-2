import { useEffect,useState } from "react"
import Friend from "./User";

export default function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data=>setUser(data))
    }, [])
    return (
        <>
            <h2>User:{user.length}</h2>
        </>
    )
}

/**
 * 1. declare a state to hold the data 
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
*/