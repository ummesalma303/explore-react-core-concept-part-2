import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(0);
    function handleAdd() {
        setTeam(team+1)
    }
    function handleRemove() {
        setTeam(team-1)
    }
    return (
        <div>
            <h2>Player:{ team}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}