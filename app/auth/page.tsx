"use client";

import Link from "next/link";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function AuthPage() {
	const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [agree, setAgree] = useState(false);

	return (
		<div className=" flex justify-center items-center bg-white px-4 sm:px-6 mb-20">
			<div className="w-full max-w-xl sm:max-w-2xl bg-white rounded-lg shadow-lg p-6 sm:p-10">
				{/* Tabs */}
				<div className="flex border-b mb-8">
					<button
						onClick={() => setActiveTab("signin")}
						className={`w-1/2 py-3 text-lg sm:text-xl font-semibold ${
							activeTab === "signin"
								? "text-black border-b-2 border-blue-500"
								: "text-gray-400"
						}`}
					>
						Sign In
					</button>
					<button
						onClick={() => setActiveTab("signup")}
						className={`w-1/2 py-3 text-lg sm:text-xl font-semibold ${
							activeTab === "signup"
								? "text-black border-b-2 border-blue-500"
								: "text-gray-400"
						}`}
					>
						Sign Up
					</button>
				</div>

				{/* SIGN IN */}
				{activeTab === "signin" && (
					<form className="space-y-5">
						<div>
							<label className="block text-sm mb-1">Email Address</label>
							<input
								type="email"
								className="w-full border rounded px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label className="text-sm mb-1 flex justify-between">
								<span>Password</span>
								<Link
									href="/auth/forgot-password"
									className="text-blue-500 text-xs"
								>
									Forgot Password?
								</Link>
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									className="w-full border rounded px-4 py-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
									placeholder="Enter your password"
								/>
								<span
									onClick={() => setShowPassword(!showPassword)}
									className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
								>
									{showPassword ? <IoEyeOff /> : <IoEye />}
								</span>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 text-sm"
						>
							SIGN IN →
						</button>

						<div className="flex items-center my-4">
							<hr className="flex-grow border-gray-300" />
							<span className="px-3 text-gray-400 text-sm">or</span>
							<hr className="flex-grow border-gray-300" />
						</div>

						<div className="space-y-3">
							<button className="w-full border flex items-center justify-center gap-3 py-3 rounded hover:bg-gray-50 text-sm">
								<FcGoogle size={20} />
								Login with Google
							</button>
							<button className="w-full border flex items-center justify-center gap-3 py-3 rounded hover:bg-gray-50 text-sm">
								<FaApple size={20} />
								Login with Apple
							</button>
						</div>
					</form>
				)}

				{/* SIGN UP */}
				{activeTab === "signup" && (
					<form className="space-y-5">
						<div>
							<label className="block text-sm mb-1">Name</label>
							<input
								type="text"
								className="w-full border rounded px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
								placeholder="Full Name"
							/>
						</div>

						<div>
							<label className="block text-sm mb-1">Email Address</label>
							<input
								type="email"
								className="w-full border rounded px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label className="block text-sm mb-1">Password</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									className="w-full border rounded px-4 py-3 pr-10 focus:outline-none focus:ring focus:border-blue-300"
									placeholder="8+ characters"
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

						<div className="flex items-start gap-2">
							<input
								type="checkbox"
								id="terms"
								checked={agree}
								onChange={(e) => setAgree(e.target.checked)}
								className="mt-1"
							/>
							<label htmlFor="terms" className="text-sm text-gray-600">
								Are you agree to Clicon{" "}
								<Link href="#" className="text-blue-500 underline">
									Terms of Condition
								</Link>{" "}
								and{" "}
								<Link href="#" className="text-blue-500 underline">
									Privacy Policy
								</Link>
								.
							</label>
						</div>

						<button
							type="submit"
							disabled={!agree}
							className={`w-full text-white font-semibold py-3 rounded flex items-center justify-center gap-2 text-sm ${
								agree
									? "bg-blue-500 hover:bg-blue-600"
									: "bg-blue-300 cursor-not-allowed"
							}`}
						>
							SIGN UP →
						</button>

						<div className="flex items-center my-4">
							<hr className="flex-grow border-gray-300" />
							<span className="px-3 text-gray-400 text-sm">or</span>
							<hr className="flex-grow border-gray-300" />
						</div>

						<div className="space-y-3">
							<button className="w-full border flex items-center justify-center gap-3 py-3 rounded hover:bg-gray-50 text-sm">
								<FcGoogle size={20} />
								Sign up with Google
							</button>
							<button className="w-full border flex items-center justify-center gap-3 py-3 rounded hover:bg-gray-50 text-sm">
								<FaApple size={20} />
								Sign up with Apple
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}
