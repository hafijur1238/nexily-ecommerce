"use client";

import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const SupportForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			toast.success("Message sent successfully!");
			setEmail("");
			setSubject("");
			setMessage("");
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<div className="bg-blue-50 p-6 rounded-md">
			<h2 className="text-lg font-medium mb-2">
				Dont find your answer, Ask for support.
			</h2>
			<p className="text-sm text-gray-600 mb-6">
				Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
				molestie accumsan dui, non iaculis primis in faucibus resent eget sem
				purus.
			</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<input
						type="email"
						placeholder="Email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<input
						type="text"
						placeholder="Subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<textarea
						placeholder="Message (Optional)"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={4}
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center transition-colors w-full"
				>
					{isSubmitting ? (
						"SENDING..."
					) : (
						<>
							SEND MESSAGE
							<ArrowRight className="ml-2 h-4 w-4" />
						</>
					)}
				</button>
			</form>
		</div>
	);
};

export default SupportForm;
