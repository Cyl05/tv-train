import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:3000/profile', {
			credentials: 'include',
		})
			.then((res) => {
				if (res.ok) {
					setAuth(true);
				} else {
					setAuth(false);
				}
			})
			.catch((err) => {
				setAuth(false);
			});
	}, []);

	if (auth === null) return <div>Loading...</div>
	return auth ? children : <Navigate to={"/login"} />;
}

export default ProtectedRoute;