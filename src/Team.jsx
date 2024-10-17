import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(0);
    function handleAdd() {
        setTeam(team+1)
    }
    function handleRemove() {
        setTeam(team-1)
    }

    const teamStyle = {
        border: '2px solid salmon',
        padding: '20px',
        margin:'15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Player:{ team<0? 'N/A':team}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}