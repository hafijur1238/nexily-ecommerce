"use client";
import Image from "next/image";
import React, { useState } from "react";

const SubscribeSection: React.FC = () => {
	const [email, setEmail] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle email submission logic here
		console.log(email);
	};

	return (
		<div className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8">
			<div className="text-center text-white">
				<h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
				<p className="mb-6 text-lg max-w-lg mx-auto">
					Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
					libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
				</p>

				{/* Email Subscription Form */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4"
				>
					<input
						type="email"
						className="p-3 rounded-l-md text-black w-full sm:w-80"
						placeholder="Email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="bg-white text-blue-500 p-3 rounded-r-md font-semibold w-full sm:w-auto mt-4 sm:mt-0"
					>
						Subscribe →
					</button>
				</form>

				{/* Logos Section */}
				<div className="mt-12 flex justify-center space-x-8 flex-wrap">
					<Image src="/google-logo.svg" alt="Google" width={32} height={32} />
					<Image src="/amazon-logo.svg" alt="Amazon" width={32} height={32} />
					<Image src="/toshiba-logo.svg" alt="Toshiba" width={32} height={32} />
					<Image src="/toshiba-logo.svg" alt="Toshiba" width={32} height={32} />
					<Image src="/samsung-logo.svg" alt="Samsung" width={32} height={32} />
				</div>
			</div>
		</div>
	);
};

export default SubscribeSection;
