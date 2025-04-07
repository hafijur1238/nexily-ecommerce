// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-black text-white py-8">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{/* Left Section */}
					<div>
						<h2 className="text-3xl font-bold mb-4">Nexily</h2>
						<div>
							<h3 className="text-lg font-semibold">Contact Us</h3>
							<ul>
								<li className="flex items-center mt-2">
									<span className="mr-2">📱</span>
									<a href="tel:+12029182132" className="hover:underline">
										Whats App +1 202-918-2132
									</a>
								</li>
								<li className="flex items-center mt-2">
									<span className="mr-2">📞</span>
									<a href="tel:+12029182132" className="hover:underline">
										Call Us +1 202-918-2132
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-6">
							<h3 className="text-lg font-semibold">Download App</h3>
							<ul>
								<li className="mt-2">
									<a href="#" className="hover:underline">
										Google Play
									</a>
								</li>
								<li className="mt-2">
									<a href="#" className="hover:underline">
										App Store
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Middle Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Most Popular Categories
						</h3>
						<ul>
							<li>Staples</li>
							<li>Beverages</li>
							<li>Personal Care</li>
							<li>Home Care</li>
							<li>Baby Care</li>
							<li>Vegetables & Fruits</li>
							<li>Snacks & Foods</li>
							<li>Dairy & Bakery</li>
						</ul>
					</div>

					{/* Right Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Customer Services</h3>
						<ul>
							<li>
								<a href="#" className="hover:underline">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									E-waste Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Cancellation & Return Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom copyright section */}
				<div className="mt-12 text-center text-sm text-gray-400">
					<p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
