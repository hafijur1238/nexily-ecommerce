"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
	id: number;
	question: string;
	answer: string | React.ReactNode;
	isOpen: boolean;
}

const FAQ = () => {
	const [faqItems, setFaqItems] = useState<FAQItem[]>([
		{
			id: 1,
			question: "Suspendisse ultrices pharetra libero sed interdum.",
			answer: "",
			isOpen: false,
		},
		{
			id: 2,
			question: "Fusce molestie condimentum facilisis.",
			answer: (
				<div className="text-gray-600">
					<p className="mb-4">
						Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi
						aliquet pulvinar orci non volutpate. Donec aliquet ultricorper
						gravida. Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Sed molestie accumsan dui, non iaculis magna mattis
						mattis. Ut consectetur massa et viverra scelerisq. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem
						purus.
					</p>
					<ul className="list-disc pl-5 space-y-2">
						<li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
						<li>
							Integer et lacus vitae justo fermentum rutrum. In nec ultrices
							massa.
						</li>
						<li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
						<li>Quisque ut dolor erat.</li>
					</ul>
				</div>
			),
			isOpen: true,
		},
		{
			id: 3,
			question: "Quisque quis nunc quis urna tempor lobortis vel non orci.",
			answer: "",
			isOpen: false,
		},
		{
			id: 4,
			question:
				"Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
			answer: "",
			isOpen: false,
		},
		{
			id: 5,
			question: "Nulla sed sapien maximus, faucibus massa vitae.",
			answer: "",
			isOpen: false,
		},
	]);

	const toggleFAQ = (id: number) => {
		setFaqItems(
			faqItems.map((item) =>
				item.id === id ? { ...item, isOpen: !item.isOpen } : item
			)
		);
	};

	return (
		<div className="space-y-4">
			{faqItems.map((item) => (
				<div
					key={item.id}
					className="border border-gray-200 rounded-md overflow-hidden"
				>
					<button
						onClick={() => toggleFAQ(item.id)}
						className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors"
					>
						<span className="font-medium">{item.question}</span>
						{item.isOpen ? (
							<Minus className="h-5 w-5 text-blue-500" />
						) : (
							<Plus className="h-5 w-5 text-gray-400" />
						)}
					</button>

					{item.isOpen && <div className="px-4 pb-4">{item.answer}</div>}
				</div>
			))}
		</div>
	);
};

export default FAQ;
