import React, { useEffect, useState } from "react";

const FetchUser = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [userId]);

    if (!user) return <p>Loading...</p>;
    return <h2>{user.username}</h2>;
}

export default FetchUser;