import React from 'react'

const UserCard = ({name, age}) => {
    return (
        <div>
            <b>User Details:</b>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserCard;