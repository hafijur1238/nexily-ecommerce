import Image from "next/image";
import Link from "next/link";

export default function ElectronicsBrands() {
	return (
		<section className="w-full flex flex-col items-center px-4 sm:px-6 py-8">
			<div className="w-full max-w-screen-xl">
				{/* Top Electronics Brands */}
				<div className="mb-12">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl sm:text-2xl font-medium">
							<span className="text-blue-500">Top Electronics Brands</span>
						</h2>
						<Link href="#" className="text-sm flex items-center">
							View All
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="ml-1"
							>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</Link>
					</div>

					<div className="border-b-2 border-blue-500 w-[220px] mb-6"></div>

					{/* Grid for brand cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{/* iPhone Card */}
						<div className="rounded-lg overflow-hidden bg-gray-900 p-4 flex items-center relative">
							<div className="flex flex-col">
								<div className="bg-gray-800 text-white text-xs px-2 py-1 rounded inline-block mb-3 w-fit">
									IPHONE
								</div>
								<div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-3">
									<svg viewBox="0 0 24 24" width="24" height="24" fill="black">
										<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
									</svg>
								</div>
								<div className="text-white font-bold">UP to 80% OFF</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<Image
									src="/placeholder.svg?height=150&width=120"
									alt="iPhone"
									width={120}
									height={150}
									className="object-contain"
								/>
							</div>
						</div>

						{/* Realme Card */}
						<div className="rounded-lg overflow-hidden bg-yellow-100 p-4 flex items-center relative">
							<div className="flex flex-col">
								<div className="bg-yellow-600 text-white text-xs px-2 py-1 rounded inline-block mb-3 w-fit">
									REALME
								</div>
								<div className="bg-yellow-400 w-fit px-4 py-1 rounded-sm mb-3">
									<span className="font-bold text-black">realme</span>
								</div>
								<div className="text-black font-bold">UP to 80% OFF</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<Image
									src="/placeholder.svg?height=150&width=120"
									alt="Realme"
									width={120}
									height={150}
									className="object-contain"
								/>
							</div>
						</div>

						{/* Xiaomi Card */}
						<div className="rounded-lg overflow-hidden bg-orange-100 p-4 flex items-center relative">
							<div className="flex flex-col">
								<div className="bg-orange-200 text-black text-xs px-2 py-1 rounded inline-block mb-3 w-fit">
									XIAOMI
								</div>
								<div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
									<span className="text-white font-bold text-xl">MI</span>
								</div>
								<div className="text-black font-bold">UP to 80% OFF</div>
							</div>
							<div className="absolute right-0 bottom-0">
								<Image
									src="/placeholder.svg?height=150&width=120"
									alt="Xiaomi"
									width={120}
									height={150}
									className="object-contain"
								/>
							</div>
						</div>
					</div>

					{/* Pagination Dots */}
					<div className="flex justify-center mt-6 gap-1">
						<div className="w-6 h-2 bg-blue-500 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
					</div>
				</div>

				{/* Xbox and Promotional Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Xbox Console Section */}
					<div className="md:col-span-2 bg-gray-100 rounded-lg p-6 relative overflow-hidden sm:pr-8">
						{/* Content */}
						<div className="flex flex-col max-w-[50%]">
							<span className="text-blue-500 text-sm mb-2">
								THE BEST PLACE TO PLAY
							</span>
							<h2 className="text-3xl font-bold mb-4">Xbox Consoles</h2>
							<p className="text-sm mb-1">
								Save up to 50% on select Xbox games.
							</p>
							<p className="text-sm mb-6">
								Get 3 months of PC Game Pass for $2 USD.
							</p>
							<button className="bg-blue-500 text-white px-4 py-2 rounded w-fit flex items-center">
								SHOP NOW
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="ml-2"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</button>
						</div>

						{/* Image */}
						<div className="absolute right-4 bottom-0">
							<Image
								src="https://images.unsplash.com/photo-1621259181233-aa03cf592ea7?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Xbox Console"
								width={250}
								height={200}
								className="object-contain"
							/>
						</div>

						{/* Price */}
						<div className="absolute right-24 top-12 bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl">
							$299
						</div>

						{/* Pagination Dots */}
						<div className="absolute bottom-4 left-6 flex gap-1">
							<div className="w-2 h-2 bg-black rounded-full"></div>
							<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
							<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
						</div>
					</div>

					{/* Promotional Cards */}
					<div className="flex flex-col gap-4">
						{/* Google Pixel Card */}
						<div className="bg-black rounded-lg p-4 relative overflow-hidden">
							<div className="absolute top-2 right-2 bg-yellow-300 text-black px-2 py-1 text-xs font-bold rounded-sm">
								29% OFF
							</div>
							<div className="text-yellow-500 text-xs mb-1">SUMMER SALES</div>
							<h3 className="text-white text-lg font-bold mb-4">
								New Google
								<br />
								Pixel 6 Pro
							</h3>
							<button className="bg-blue-500 text-white px-4 py-2 rounded text-sm flex items-center">
								SHOP NOW
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="ml-2"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</button>
							<div className="absolute right-0 bottom-0">
								<Image
									src="/placeholder.svg?height=120&width=100"
									alt="Google Pixel"
									width={100}
									height={120}
									className="object-contain"
								/>
							</div>
						</div>

						{/* Xiaomi FlipBuds Card */}
						<div className="bg-gray-100 rounded-lg p-4 relative overflow-hidden">
							<div className="flex">
								<div className="flex flex-col">
									<h3 className="text-black text-lg font-bold">
										Xiaomi
										<br />
										FlipBuds Pro
									</h3>
									<div className="text-blue-500 font-bold mt-2">$299 USD</div>
									<button className="bg-blue-500 text-white px-4 py-2 rounded text-sm flex items-center mt-2 w-fit">
										SHOP NOW
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="ml-2"
										>
											<path d="M5 12h14" />
											<path d="m12 5 7 7-7 7" />
										</svg>
									</button>
								</div>
								<div className="ml-auto">
									<Image
										src="/placeholder.svg?height=100&width=100"
										alt="Xiaomi FlipBuds"
										width={100}
										height={100}
										className="object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
