"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
	{
		id: 1,
		name: "Xbox Series S -512GB SSD Console with Wireless Controller -EU Version",
		image:
			"https://images.unsplash.com/photo-1706509511838-4b101f379ef3?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "$442.12",
		oldPrice: "$865.99",
		discount: "32% OFF",
		hot: true,
		showRating: true,
		description:
			"Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
	},
	{
		id: 2,
		name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
		image:
			"https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?t=st=1744014321~exp=1744017921~hmac=acc2d720055725081f92a466c7333e6790e8e71c69cba73ca9a11f27eb50586c&w=740",
		price: "$2,300",
		soldOut: true,
	},
	{
		id: 3,
		name: "Simple Mobile 4G LTE Prepaid Smartphone",
		image: "/images/phone.png",
		price: "$220",
	},
	{
		id: 4,
		name: "4K UHD LED Smart TV with Chromecast Built-in",
		image: "/images/controller.png",
		price: "$1,50",
		oldPrice: "$865",
		discount: "19% OFF",
	},
	{
		id: 5,
		name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
		image: "/images/headphone.png",
		price: "$1,200",
	},
	{
		id: 6,
		name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
		image: "/images/laptop.png",
		price: "$299",
	},
	{
		id: 7,
		name: "Portable Wshing Machine, 11lbs capacity Model 18NMF1AM",
		image: "/images/drone2.png",
		price: "$70",
		oldPrice: "$865.99",
	},
	{
		id: 8,
		name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
		image: "/images/desktop.png",
		price: "$160",
		hot: true,
	},
];

const BestDealsSection = () => {
	const [timer, setTimer] = useState(1453232);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formatTime = (seconds: number) => {
		const d = Math.floor(seconds / (3600 * 24));
		const h = Math.floor((seconds % (3600 * 24)) / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${d}d : ${h}h : ${m}m : ${s}s`;
	};

	return (
		<section className="max-w-screen-xl mx-auto px-4 py-10">
			<div className="flex justify-between items-center mb-8">
				<div className="text-xl font-bold">
					Best Deals{" "}
					<span className="text-sm font-normal text-gray-500 ml-2">
						Deals ends in
					</span>
					<span className="bg-yellow-300 text-black px-3 py-1 rounded text-xs font-semibold ml-2">
						{formatTime(timer)}
					</span>
				</div>
				<Link
					href="#"
					className="text-blue-600 text-sm font-medium hover:underline"
				>
					Browse All Product →
				</Link>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="relative border rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition group"
					>
						{/* Badges */}
						<div className="absolute top-2 left-2 z-10 space-y-1">
							{product.discount && (
								<span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
									{product.discount}
								</span>
							)}
							{product.hot && (
								<span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
									HOT
								</span>
							)}
							{product.soldOut && (
								<span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
									SOLD OUT
								</span>
							)}
						</div>

						<Image
							src={product.image}
							alt={product.name}
							width={300}
							height={180}
							className="w-full h-[180px] object-contain p-4 bg-gray-50"
						/>

						{/* Product Info */}
						<div className="p-4 flex flex-col min-h-[260px] justify-between">
							{/* Rating */}
							{product.showRating && (
								<div className="flex items-center text-yellow-500 text-xs mb-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<FaStar key={i} className="w-4 h-4" />
									))}
									<span className="ml-2 text-gray-600">(52,677)</span>
								</div>
							)}

							{/* Title */}
							<h3 className="text-sm font-medium mb-2 line-clamp-2 min-h-[48px] leading-5">
								{product.name}
							</h3>

							{/* Price */}
							<div className="text-sm mb-3">
								{product.oldPrice && (
									<span className="line-through text-gray-400 mr-2">
										{product.oldPrice}
									</span>
								)}
								<span className="text-blue-600 font-bold">{product.price}</span>
							</div>

							{/* Description */}
							{product.description && (
								<p className="text-xs text-gray-500 mb-4 line-clamp-2 min-h-[36px]">
									{product.description}
								</p>
							)}

							{/* Action Buttons */}
							<div className="flex items-center justify-between">
								<div className="flex gap-2">
									<button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
										<FaHeart className="text-sm" />
									</button>
									<button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
										<FaEye className="text-sm" />
									</button>
								</div>
								{product.id === 1 && (
									<button className="flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-blue-700">
										<FaShoppingCart className="text-sm" /> ADD TO CART
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BestDealsSection;
