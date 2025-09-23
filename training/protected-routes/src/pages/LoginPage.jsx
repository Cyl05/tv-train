import React, { useState } from "react";

const LoginPage = () => {
	const [formData, setFormData] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Login Data:", formData);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="w-full w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
				<h2 className="text-2xl font-bold text-center text-black">
					Login to Your Account
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Username
						</label>
						<input
							type="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Enter your username"
							className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
							required
						/>
					</div>

					<div>
						<a href="#" className="text-sm text-indigo-600 hover:underline">
							Forgot password?
						</a>
					</div>

					<button
						type="submit"
						className="w-full py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
					>
						Login
					</button>
				</form>

				<p className="text-sm text-center text-gray-600">
					Don't have an account?{" "}
					<a href="/register" className="text-indigo-600 hover:underline">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
