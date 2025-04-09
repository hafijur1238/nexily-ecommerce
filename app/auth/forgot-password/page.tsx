"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Sending reset link to:", email);
		router.push("/auth/reset-password");
	};

	return (
		<div className=" flex justify-center items-center bg-white px-4 mt-8 mb-16">
			<div className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-10">
				<h2 className="text-xl sm:text-2xl font-semibold text-center mb-2">
					Forget Password
				</h2>
				<p className="text-sm text-gray-500 text-center mb-6">
					Enter the email address or mobile phone number associated with your
					Clicon account.
				</p>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm mb-1">Email Address</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full border rounded px-4 py-3 focus:outline-none focus:ring focus:border-blue-300"
							placeholder="you@example.com"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 text-sm"
					>
						SEND CODE →
					</button>
				</form>

				<div className="mt-6 text-sm text-center space-y-2">
					<p>
						Already have account?{" "}
						<Link href="/auth" className="text-blue-500 font-medium">
							Sign In
						</Link>
					</p>
					<p>
						Don’t have account?{" "}
						<Link href="/auth" className="text-blue-500 font-medium">
							Sign Up
						</Link>
					</p>
				</div>

				<hr className="my-6" />

				<p className="text-xs text-gray-500 text-center">
					You may contact{" "}
					<Link href="/support" className="text-blue-500 font-medium">
						Customer Service
					</Link>{" "}
					for help restoring access to your account.
				</p>
			</div>
		</div>
	);
}
