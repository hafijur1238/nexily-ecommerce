"use client";

import Image from "next/image";
import { useState } from "react";

export default function TopSellSection() {
	const [activeTab, setActiveTab] = useState("FLASH SALE TODAY");

	const tabs = ["FLASH SALE TODAY", "BEST SELLERS", "TOP RATED", "NEW ARRIVAL"];

	return (
		<section className="w-full flex flex-col items-center px-4 sm:px-6 py-8">
			<div className="w-full max-w-screen-xl">
				{/* Tabs */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
					{tabs.map((tab) => (
						<button
							key={tab}
							className={`py-3 text-center font-medium text-sm ${
								activeTab === tab
									? "border-b-2 border-blue-500 text-blue-500"
									: "text-gray-700"
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{/* FLASH SALE TODAY */}
					<div
						className={
							activeTab === "FLASH SALE TODAY" ? "block" : "hidden md:block"
						}
					>
						<div className="space-y-4">
							{/* Product 1 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Bose Sport Earbuds"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 2 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Simple Mobile 4G LTE"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Simple Mobile 4G LTE Prepaid Smartphone
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 3 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="4K UHD LED Smart TV"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									4K UHD LED Smart TV with Chromecast Built-in
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>
						</div>
					</div>

					{/* BEST SELLERS */}
					<div
						className={
							activeTab === "BEST SELLERS" ? "block" : "hidden md:block"
						}
					>
						<div className="space-y-4">
							{/* Product 1 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Samsung Electronics"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Samsung Electronics Samsung Galaxy S21 5G
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 2 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Simple Mobile 5G LTE"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Simple Mobile 5G LTE Galaxy I2 Mini 512GB Gaming Phone
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 3 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Sony DSCHX8"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Sony DSCHX8 High Zoom Point & Shoot Camera
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>
						</div>
					</div>

					{/* TOP RATED */}
					<div
						className={activeTab === "TOP RATED" ? "block" : "hidden md:block"}
					>
						<div className="space-y-4">
							{/* Product 1 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Portable Wshing Machine"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Portable Wshing Machine, 11lbs capacity Model 18NMF...
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 2 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Sony DSCHX8"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Sony DSCHX8 High Zoom Point & Shoot Camera
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 3 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Dell Optiplex"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Dell Optiplex 7000x7480 All-in-One Computer Monitor
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>
						</div>
					</div>

					{/* NEW ARRIVAL */}
					<div
						className={
							activeTab === "NEW ARRIVAL" ? "block" : "hidden md:block"
						}
					>
						<div className="space-y-4">
							{/* Product 1 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="TOZO T6"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									TOZO T6 True Wireless Earbuds Bluetooth Headpho...
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 2 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="JBL FLIP 4"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>

							{/* Product 3 */}
							<div className="border p-4">
								<div className="flex items-center mb-3">
									<Image
										src="/placeholder.svg?height=80&width=80"
										alt="Wyze Cam"
										width={80}
										height={80}
										className="object-contain"
									/>
								</div>
								<h3 className="text-sm mb-1 overflow-hidden text-ellipsis line-clamp-2">
									Wyze Cam Pan v2 1080p Pan/ Tilt/Zoom Wi-Fi Indoor Smar...
								</h3>
								<p className="text-blue-500 font-medium">$1,500</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
