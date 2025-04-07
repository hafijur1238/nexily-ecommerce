"use client";

import Image from "next/image";
import Link from "next/link";
import {
	FaCartPlus,
	FaClipboardList,
	FaCommentDots,
	FaLock,
	FaPhoneAlt,
	FaStoreAlt,
	FaTruck,
	FaUser,
	FaWallet,
} from "react-icons/fa";

export default function CustomerSupportPage() {
	return (
		<div className="max-w-screen-xl mx-auto px-4 py-10">
			{/* Hero Section (First Part) */}
			<div className="flex flex-col md:flex-row items-center justify-between mb-10">
				{/* Left: Help Center Title */}
				<div className="flex-1 text-center md:text-left mb-8 md:mb-0">
					<span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded uppercase">
						HELP CENTER
					</span>
					<h1 className="text-3xl sm:text-4xl font-bold my-4">
						How we can help you!
					</h1>
				</div>

				{/* Right: Support Agent Image */}
				<div className="flex-1 text-center md:text-right">
					<Image
						src="/images/customer-support-agent.jpg"
						alt="Customer Support Agent"
						width={400}
						height={400}
						className="rounded-full object-cover"
					/>
				</div>
			</div>

			{/* Support Options (First Part) */}
			<div className="text-center mb-10">
				<h2 className="text-xl font-semibold mb-6">
					What can we assist you with today?
				</h2>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
					{/* Track Order */}
					<Link
						href="/track-order"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-blue-50 transition"
					>
						<FaTruck className="text-blue-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Track Order</span>
					</Link>

					{/* Reset Password */}
					<Link
						href="/reset-password"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-orange-50 transition"
					>
						<FaLock className="text-orange-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Reset Password</span>
					</Link>

					{/* Payment Option */}
					<Link
						href="/payment-option"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-green-50 transition"
					>
						<FaWallet className="text-green-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Payment Option</span>
					</Link>

					{/* User & Account */}
					<Link
						href="/user-account"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-indigo-50 transition"
					>
						<FaUser className="text-indigo-500 text-4xl mb-2" />
						<span className="font-medium text-sm">User & Account</span>
					</Link>

					{/* Wishlist & Compare */}
					<Link
						href="/wishlist-compare"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-purple-50 transition"
					>
						<FaClipboardList className="text-purple-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Wishlist & Compare</span>
					</Link>

					{/* Shipping & Billing */}
					<Link
						href="/shipping-billing"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-teal-50 transition"
					>
						<FaCartPlus className="text-teal-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Shipping & Billing</span>
					</Link>

					{/* Sell on Site */}
					<Link
						href="/sell-on-site"
						className="flex flex-col items-center border rounded-lg p-6 hover:bg-yellow-50 transition"
					>
						<FaStoreAlt className="text-yellow-500 text-4xl mb-2" />
						<span className="font-medium text-sm">Sell on Clicon</span>
					</Link>
				</div>
			</div>

			{/* Popular Topics (Second Part) */}
			<div className="mb-10">
				<h3 className="text-xl font-semibold text-center mb-6">
					Popular Topics
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
					{/* Column 1 */}
					<div className="text-left">
						<ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
							<li>How do I return my item?</li>
							<li>What is Clicons Returns Policy?</li>
							<li>How long is the refund process?</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div className="text-left">
						<ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
							<li>What are the Delivery Timelines ?</li>
							<li>How to cancel Clicon Order.</li>
							<li>Ask the Digital and Device Community</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div className="text-left">
						<ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
							<li>What is Discover Your Daraz Campaign 2025 ?</li>
							<li>What is the Voucher & Gift Offer in this Campaign?</li>
							<li>How to change my shop name?</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Contact Us Section */}
			<div className="text-center mb-16">
				<h3 className="text-xl font-semibold mb-4">
					Dont find your answer? Contact with us
				</h3>

				<div className="flex justify-center gap-10">
					{/* Call Us */}
					<div className="bg-blue-100 p-6 rounded-lg w-72 shadow-lg">
						<FaPhoneAlt className="text-blue-500 text-4xl mb-3" />
						<p className="text-sm text-gray-600 mb-3">
							We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk
							with us now!
						</p>
						<a
							href="tel:+12025550126"
							className="text-blue-600 text-sm font-medium hover:underline"
						>
							+1-202-555-0126
						</a>
						<Link
							href="/contact-us"
							className="text-blue-600 text-sm font-medium hover:underline mt-3 inline-block"
						>
							CALL NOW
						</Link>
					</div>

					{/* Chat With Us */}
					<div className="bg-green-100 p-6 rounded-lg w-72 shadow-lg">
						<FaCommentDots className="text-green-500 text-4xl mb-3" />
						<p className="text-sm text-gray-600 mb-3">
							We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk
							with us now!
						</p>
						<a
							href="mailto:support@clicon.com"
							className="text-blue-600 text-sm font-medium hover:underline"
						>
							Support@clicon.com
						</a>
						<Link
							href="/chat-with-us"
							className="text-blue-600 text-sm font-medium hover:underline mt-3 inline-block"
						>
							CONTACT US
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
