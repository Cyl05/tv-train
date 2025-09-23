import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

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
				<Route path="/profile" element={
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				} />
			</Routes>
		</>
	);
}

export default App;
