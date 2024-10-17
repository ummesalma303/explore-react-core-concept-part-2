import './Friend.css'
export default function DisplayFriend({ friends }) {
    console.log(friends);
    const {name,email}=friends
    return (
        <div className='box'>
            <h2>Name:{name}</h2>
            <p>email: { email}</p>
        </div>
   )
}



    