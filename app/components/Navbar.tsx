"use client";

import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
	FaBlog,
	FaHeadphones,
	FaInfoCircle,
	FaMapMarkerAlt,
	FaPhone,
	FaShoppingCart,
	FaSyncAlt,
	FaUser,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineTrackChanges } from "react-icons/md";

const NavbarTopbarComponent = () => {
	// State to track if the user has scrolled past the Top Navbar
	const [isScrolled, setIsScrolled] = useState(false);

	// Effect to listen to the scroll event and toggle fixed positioning for the Main Navbar
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="w-full">
			{/* Topbar - No longer fixed */}
			<div className="bg-gray-100 text-sm px-4 py-2 text-gray-600">
				<div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
					<span className="text-center sm:text-left">
						Welcome to worldwide Nexily!
					</span>
					<div className="flex items-center gap-4 text-sm">
						<div className="flex items-center gap-1">
							<FaMapMarkerAlt className="text-blue-500" />
							<span>
								Deliver to{" "}
								<span className="font-medium text-gray-800">423651</span>
							</span>
						</div>
						<div className="flex items-center gap-1">
							<svg
								className="w-4 h-4 text-blue-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 4v16m8-8H4" />
							</svg>
							<span>All Offers</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navbar - Fixed at Top */}
			<div
				className={`w-full ${
					isScrolled
						? "fixed top-0 left-0 z-50 bg-white border-b shadow-sm "
						: ""
				}`}
			>
				<div className="px-4 py-3 bg-white">
					<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
						{/* Left: Logo and Menu */}
						<div className="flex items-center gap-3 w-full md:w-auto">
							<button className="p-2 rounded-md border hover:bg-gray-100 transition">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
							<Link
								href="/"
								className="text-2xl font-bold hover:text-blue-600 transition"
							>
								Nexily
							</Link>
						</div>

						{/* Center: Search Bar */}
						<div className="w-full md:w-1/3">
							<Input
								placeholder="Search essentials, groceries and more..."
								className="rounded-md px-4 py-2 border w-full"
							/>
						</div>

						{/* Right: User and Cart */}
						<div className="flex items-center gap-6 w-full md:w-auto justify-end">
							<Link
								href="/auth"
								className="flex items-center gap-2 cursor-pointer"
							>
								<FaUser className="text-blue-500" />
								<span>Sign Up/Sign In</span>
							</Link>

							<Link
								href="/cart"
								className="flex items-center gap-2 cursor-pointer"
							>
								<FaShoppingCart className="text-blue-500" />
								<span>Cart</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Navbar - Fixed just below the Main Navbar */}
			<div
				className={`w-full ${
					isScrolled
						? "fixed top-[60px] left-0 z-40 bg-white border-t shadow-sm mt-1"
						: ""
				}`}
			>
				{/* Horizontal line added under the Bottom Navbar */}
				<div className="border-t px-4 py-2 bg-white">
					<div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700">
						<button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
							All Category <IoIosArrowDown />
						</button>

						<div className="flex flex-wrap gap-4 items-center">
							<Link
								href="/track-order"
								className="flex items-center gap-1 cursor-pointer"
							>
								<MdOutlineTrackChanges /> Track Order
							</Link>

							<Link
								href="/products"
								className="flex items-center gap-1 cursor-pointer"
							>
								<FaSyncAlt /> Compare
							</Link>

							<Link
								href="/customer-support"
								className="flex items-center gap-1 cursor-pointer"
							>
								<FaHeadphones /> Customer Support
							</Link>

							<Link
								href="/need-help"
								className="flex items-center gap-1 cursor-pointer"
							>
								<FaInfoCircle /> Need Help
							</Link>

							<Link
								href="/blogs"
								className="flex items-center gap-1 cursor-pointer"
							>
								<FaBlog /> Blogs
							</Link>
						</div>

						<div className="flex items-center gap-2 text-black font-medium ml-auto">
							<FaPhone /> +1-202-555-0104
						</div>
					</div>
				</div>
				{/* Horizontal Line Under the Bottom Navbar */}
				<div className="border-t"></div>
			</div>

			{/* Content Padding to Account for Fixed Nav */}
			<div className="pb-24">{/* Main content goes here */}</div>
		</div>
	);
};

export default NavbarTopbarComponent;
