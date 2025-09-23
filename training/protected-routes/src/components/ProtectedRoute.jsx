import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:3000/profile')
		.then(() => setAuth(true))
		.catch(() => setAuth(false));
	}, []);

	if (auth === null) return <div>Loading...</div>
	return auth ? children : navigate("/login");
}

export default ProtectedRoute;