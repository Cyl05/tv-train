import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [username, setUsername] = useState();

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await fetch("http://localhost:3000/username", {
                    credentials: 'include',
                });
                const responseJSON = await response.json();
                setUsername(responseJSON.username);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUsername();
    }, []);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:3000/logout', {
                credentials: 'include',
            });
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center w-80">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7nmvPuHivliG0y_2glZDqMW3aZ4pbd8pzw&s"
                    alt="Profile"
                    className="w-24 h-24-full mx-auto mb-4 rounded-xl"
                />

                <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
                <div className="flex justify-between">
                    <a
                        href="/"
                        className="mt-4 inline-block text-indigo-600 hover:underline"
                    >
                        Go to Home
                    </a>
                    <a
                        href='#'
                        className="mt-4 inline-block text-red-600 hover:underline"
                        onClick={handleLogout}
                    >
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
