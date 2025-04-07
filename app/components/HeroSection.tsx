import { Headphones, Shield, Truck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="w-full flex flex-col items-center px-4 sm:px-6">
			{/* Hero Banner - contained width to match content */}
			<div className="w-full max-w-screen-xl bg-[#111b35] text-white relative rounded-xl overflow-hidden my-4 sm:my-6">
				<div className="p-6 sm:p-8 md:p-12 pb-16 sm:pb-12">
					<div className="max-w-[60%] sm:max-w-lg z-10 relative">
						<p className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
							Best Deal Online on smart watches
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
							SMART WEARABLE.
						</h1>
						<p className="text-xl sm:text-2xl md:text-3xl font-medium">
							UP to 80% OFF
						</p>

						{/* Carousel Indicators */}
						<div className="flex items-center gap-1 sm:gap-2 mt-8 sm:mt-12">
							<div className="w-5 sm:w-6 h-1 bg-white rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
							<div className="w-1 h-1 bg-white/60 rounded-full"></div>
						</div>
					</div>

					{/* Smart Watch Image - responsive positioning */}
					<div className="absolute right-[-20px]  sm:right-24 bottom-0 sm:bottom-auto sm:top-1/2 sm:transform sm:-translate-y-1/2">
						<Image
							src="https://images.unsplash.com/photo-1637160151664-0afc8ecd112f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Smart Watch"
							width={180}
							height={180}
							className="object-contain w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px]"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Service Features */}
			<div className="w-full max-w-screen-xl py-8 sm:py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Free Delivery */}
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
							<div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#111b35] rounded-full flex items-center justify-center">
								<Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
						</div>
						<h3 className="text-base sm:text-lg font-bold uppercase mb-1 sm:mb-2">
							FREE AND FAST DELIVERY
						</h3>
						<p className="text-sm sm:text-base text-gray-600">
							Free delivery for all orders over $140
						</p>
					</div>

					{/* Customer Service */}
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
							<div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#111b35] rounded-full flex items-center justify-center">
								<Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
						</div>
						<h3 className="text-base sm:text-lg font-bold uppercase mb-1 sm:mb-2">
							24/7 CUSTOMER SERVICE
						</h3>
						<p className="text-sm sm:text-base text-gray-600">
							Friendly 24/7 customer support
						</p>
					</div>

					{/* Money Back Guarantee */}
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
							<div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#111b35] rounded-full flex items-center justify-center">
								<Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
						</div>
						<h3 className="text-base sm:text-lg font-bold uppercase mb-1 sm:mb-2">
							MONEY BACK GUARANTEE
						</h3>
						<p className="text-sm sm:text-base text-gray-600">
							We reurn money within 30 days
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
