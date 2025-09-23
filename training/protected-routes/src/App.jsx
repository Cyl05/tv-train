import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
	useEffect(() => {
		async function fetchFromAPI() {
			const res = await fetch("http://localhost:3000/");
			const resJSON = await res.json();
		}
		fetchFromAPI();
	}, []);

	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default App;
