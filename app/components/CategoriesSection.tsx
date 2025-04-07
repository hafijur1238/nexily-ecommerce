import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSection() {
	return (
		<section className="w-full flex flex-col items-center px-4 sm:px-6 py-8">
			<div className="w-full max-w-screen-xl">
				{/* Smartphones Section */}
				<div className="mb-12">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-medium">
							Grab the best deal on{" "}
							<span className="text-blue-500">Smartphones</span>
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

					<div className="border-b-2 border-blue-500 w-[340px] mb-6"></div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{/* Product 1 */}
						<div className="border rounded p-4 flex flex-col">
							<div className="relative mb-4">
								<Image
									src="/placeholder.svg?height=200&width=150"
									alt="Red Smartphone"
									width={150}
									height={200}
									className="mx-auto"
								/>
								<button className="absolute top-0 right-0 p-1">
									<Heart className="w-5 h-5 text-gray-400" />
								</button>
							</div>
							<div>
								<div className="flex items-center mb-1">
									<span className="font-bold text-lg">$99.50</span>
									<span className="text-gray-400 line-through text-sm ml-2">
										$128.00
									</span>
								</div>
								<div className="flex items-center mb-2">
									<div className="flex">
										{[1, 2, 3, 4].map((star) => (
											<svg
												key={star}
												className="w-4 h-4 text-yellow-400 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
											</svg>
										))}
										<svg
											className="w-4 h-4 text-yellow-400 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											style={{ clipPath: "inset(0 50% 0 0)" }}
										>
											<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
										</svg>
									</div>
									<span className="text-sm text-gray-500 ml-1">7.5</span>
								</div>
								<p className="text-sm">GoPro HERO6 4K Action Camera - Black</p>
							</div>
						</div>

						{/* Product 2 */}
						<div className="border rounded p-4 flex flex-col">
							<div className="relative mb-4">
								<Image
									src="/placeholder.svg?height=200&width=150"
									alt="Blue Smartphone"
									width={150}
									height={200}
									className="mx-auto"
								/>
								<button className="absolute top-0 right-0 p-1">
									<Heart className="w-5 h-5 text-gray-400" />
								</button>
							</div>
							<div>
								<div className="flex items-center mb-1">
									<span className="font-bold text-lg">$99.50</span>
									<span className="text-gray-400 line-through text-sm ml-2">
										$128.00
									</span>
								</div>
								<div className="flex items-center mb-2">
									<div className="flex">
										{[1, 2, 3, 4, 5].map((star) => (
											<svg
												key={star}
												className="w-4 h-4 text-yellow-400 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
											</svg>
										))}
									</div>
									<span className="text-sm text-gray-500 ml-1">5.9</span>
								</div>
								<p className="text-sm">GoPro HERO6 4K Action Camera - Black</p>
							</div>
						</div>

						{/* Product 3 */}
						<div className="border rounded p-4 flex flex-col">
							<div className="relative mb-4">
								<Image
									src="https://img.freepik.com/free-vector/smartphone-with-blue-background_23-2147695149.jpg?t=st=1744015079~exp=1744018679~hmac=bea9df2d38bf517d46b4ff8bcb8c8201e452f2d2b07cf1b23f363e90d43b0cff&w=740"
									alt="Black Smartphone"
									width={150}
									height={200}
									className="mx-auto"
								/>
								<button className="absolute top-0 right-0 p-1">
									<Heart className="w-5 h-5 text-gray-400" />
								</button>
							</div>
							<div>
								<div className="flex items-center mb-1">
									<span className="font-bold text-lg">$99.50</span>
								</div>
								<div className="flex items-center mb-2">
									<div className="flex">
										{[1, 2, 3, 4].map((star) => (
											<svg
												key={star}
												className="w-4 h-4 text-yellow-400 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
											</svg>
										))}
										<svg
											className="w-4 h-4 text-yellow-400 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											style={{ clipPath: "inset(0 50% 0 0)" }}
										>
											<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
										</svg>
									</div>
									<span className="text-sm text-gray-500 ml-1">7.5</span>
								</div>
								<p className="text-sm">GoPro HERO6 4K Action Camera - Black</p>
							</div>
						</div>

						{/* Product 4 */}
						<div className="border rounded p-4 flex flex-col">
							<div className="relative mb-4">
								<Image
									src="/placeholder.svg?height=200&width=150"
									alt="Black Smartphone with Colorful Screen"
									width={150}
									height={200}
									className="mx-auto"
								/>
								<button className="absolute top-0 right-0 p-1">
									<Heart className="w-5 h-5 text-gray-400" />
								</button>
							</div>
							<div>
								<div className="flex items-center mb-1">
									<span className="font-bold text-lg">$99.50</span>
									<span className="text-gray-400 line-through text-sm ml-2">
										$128.00
									</span>
								</div>
								<div className="flex items-center mb-2">
									<div className="flex">
										{[1, 2, 3, 4].map((star) => (
											<svg
												key={star}
												className="w-4 h-4 text-yellow-400 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
											</svg>
										))}
										<svg
											className="w-4 h-4 text-yellow-400 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											style={{ clipPath: "inset(0 50% 0 0)" }}
										>
											<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
										</svg>
									</div>
									<span className="text-sm text-gray-500 ml-1">7.5</span>
								</div>
								<p className="text-sm">GoPro HERO6 4K Action Camera - Black</p>
							</div>
						</div>
					</div>
				</div>

				{/* Top Categories Section */}
				<div>
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-medium">
							Shop From <span className="text-blue-500">Top Categories</span>
						</h2>
					</div>

					<div className="border-b-2 border-blue-500 w-[260px] mb-6"></div>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
						{/* Category 1 - Mobile */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Mobile"
									width={30}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Mobile</span>
						</Link>

						{/* Category 2 - Cosmetics */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=30"
									alt="Cosmetics"
									width={30}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Cosmetics</span>
						</Link>

						{/* Category 3 - Electronics */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=40"
									alt="Electronics"
									width={40}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Electronics</span>
						</Link>

						{/* Category 4 - Furniture */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=40"
									alt="Furniture"
									width={40}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Furniture</span>
						</Link>

						{/* Category 5 - Watches */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=40"
									alt="Watches"
									width={40}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Watches</span>
						</Link>

						{/* Category 6 - Decor */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=40"
									alt="Decor"
									width={40}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Decor</span>
						</Link>

						{/* Category 7 - Accessories */}
						<Link href="#" className="flex flex-col items-center">
							<div className="w-20 h-20 rounded-full border flex items-center justify-center mb-2">
								<Image
									src="/placeholder.svg?height=50&width=40"
									alt="Accessories"
									width={40}
									height={50}
									className="object-contain"
								/>
							</div>
							<span className="text-sm">Accessories</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
