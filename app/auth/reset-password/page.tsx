"use client";

import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function ResetPasswordPage() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match.");
			return;
		}
		console.log("Resetting password...");
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
			<div className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-10">
				<h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
					Reset Password
				</h2>
				<p className="text-sm text-gray-500 text-center mb-6">
					Please enter your new password.
				</p>

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-sm mb-1">New Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="w-full border rounded px-4 py-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
								placeholder="Enter new password"
							/>
							<span
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
							>
								{showPassword ? <IoEyeOff /> : <IoEye />}
							</span>
						</div>
					</div>

					<div>
						<label className="block text-sm mb-1">Confirm Password</label>
						<div className="relative">
							<input
								type={showConfirmPassword ? "text" : "password"}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								className="w-full border rounded px-4 py-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
								placeholder="Confirm your password"
							/>
							<span
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
							>
								{showConfirmPassword ? <IoEyeOff /> : <IoEye />}
							</span>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 text-sm"
					>
						Reset Password →
					</button>
				</form>
			</div>
		</div>
	);
}
