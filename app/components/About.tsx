"use client";

import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="bg-[#d3e0ea] py-16 px-6">
			<div className="container mx-auto flex flex-col lg:flex-row items-center">
				{/* Left Side - Image */}
				<div className="w-full lg:w-1/2 bg-[#d3e0ea] rounded-xl overflow-hidden mb-8 lg:mb-0">
					<Image
						src="https://images.unsplash.com/photo-1502395809857-fd80069897d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path
						alt="About Us Image"
						width={600}
						height={400}
						className="object-cover w-full h-auto rounded-xl"
					/>
				</div>

				{/* Right Side - Text Content */}
				<div className="w-full lg:w-1/2 lg:ml-8 mt-6 lg:mt-0">
					<h2 className="text-3xl font-bold text-[#333]">About Us</h2>
					<p className="text-gray-700 mt-4">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using Content here, content
						here making it look like readable English. Many desktop publishing
						packages and web page editors now use Lorem Ipsum as their default
						model text, and a search for lorem ipsum will uncover many web sites
						still in their infancy.
					</p>
				</div>
			</div>
		</section>
	);
}
