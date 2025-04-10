"use client";

import { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";

const CategorySidebar = () => {
	const [priceRange, setPriceRange] = useState([0, 5000]);

	return (
		<div className="w-full lg:w-64 flex-shrink-0">
			{/* Categories */}
			<div className="border rounded-md p-4 mb-6">
				<h3 className="font-bold text-sm uppercase mb-4">CATEGORY</h3>

				<div className="space-y-3">
					<div className="flex items-center">
						<Checkbox id="electronics" checked className="mr-2" />
						<label
							htmlFor="electronics"
							className="text-sm font-medium flex items-center text-blue-600"
						>
							Electronic Devices
						</label>
					</div>

					<div className="ml-6 space-y-2">
						<div className="flex items-center">
							<Checkbox id="computers" className="mr-2" />
							<label htmlFor="computers" className="text-sm">
								Computer & Laptop
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="tablets" className="mr-2" />
							<label htmlFor="tablets" className="text-sm">
								Tablets
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="smartphone" className="mr-2" />
							<label htmlFor="smartphone" className="text-sm">
								Smartphone
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="mobile-acc" className="mr-2" />
							<label htmlFor="mobile-acc" className="text-sm">
								Mobile Accessories
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="gaming" className="mr-2" />
							<label htmlFor="gaming" className="text-sm">
								Gaming Console
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="camera" className="mr-2" />
							<label htmlFor="camera" className="text-sm">
								Camera & Photo
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="tv" className="mr-2" />
							<label htmlFor="tv" className="text-sm">
								TV & Home Appliances
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="watch" className="mr-2" />
							<label htmlFor="watch" className="text-sm">
								Watch & Accessories
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="gps" className="mr-2" />
							<label htmlFor="gps" className="text-sm">
								GPS & Navigation
							</label>
						</div>
						<div className="flex items-center">
							<Checkbox id="wearable" className="mr-2" />
							<label htmlFor="wearable" className="text-sm">
								Wearable Technology
							</label>
						</div>
					</div>
				</div>
			</div>

			{/* Price Range */}
			<div className="border rounded-md p-4 mb-6">
				<h3 className="font-bold text-sm uppercase mb-4">PRICE RANGE</h3>

				<div className="px-2">
					<Slider
						defaultValue={[0, 5000]}
						max={5000}
						step={50}
						onValueChange={setPriceRange}
						className="mb-6"
					/>
				</div>

				<div className="flex items-center justify-between text-sm">
					<span>Min price: ${priceRange[0]}</span>
					<span>Max price: ${priceRange[1]}</span>
				</div>

				<div className="space-y-2 mt-4">
					<div className="flex items-center">
						<Checkbox id="all-price" className="mr-2" />
						<label htmlFor="all-price" className="text-sm">
							All Price
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="under-50" className="mr-2" />
						<label htmlFor="under-50" className="text-sm">
							Under $50
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="50-100" className="mr-2" />
						<label htmlFor="50-100" className="text-sm">
							$50 to $100
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="100-500" className="mr-2" />
						<label htmlFor="100-500" className="text-sm">
							$100 to $500
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="500-1000" className="mr-2" checked />
						<label htmlFor="500-1000" className="text-sm">
							$500 to $1,000
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="1000-5000" className="mr-2" />
						<label htmlFor="1000-5000" className="text-sm">
							$1,000 to $5,000
						</label>
					</div>
				</div>
			</div>

			{/* Popular Brands */}
			<div className="border rounded-md p-4 mb-6">
				<h3 className="font-bold text-sm uppercase mb-4">POPULAR BRANDS</h3>

				<div className="grid grid-cols-2 gap-2">
					<div className="flex items-center">
						<Checkbox id="apple" className="mr-2" checked />
						<label htmlFor="apple" className="text-sm">
							Apple
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="google" className="mr-2" checked />
						<label htmlFor="google" className="text-sm">
							Google
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="xiaomi" className="mr-2" />
						<label htmlFor="xiaomi" className="text-sm">
							Xiaomi
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="samsung" className="mr-2" checked />
						<label htmlFor="samsung" className="text-sm">
							Samsung
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="dell" className="mr-2" />
						<label htmlFor="dell" className="text-sm">
							Dell
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="hp" className="mr-2" checked />
						<label htmlFor="hp" className="text-sm">
							HP
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="logitech" className="mr-2" />
						<label htmlFor="logitech" className="text-sm">
							Logitech
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="panasonic" className="mr-2" checked />
						<label htmlFor="panasonic" className="text-sm">
							Panasonic
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="sony" className="mr-2" />
						<label htmlFor="sony" className="text-sm">
							Sony
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="jbl" className="mr-2" />
						<label htmlFor="jbl" className="text-sm">
							JBL
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="lg" className="mr-2" />
						<label htmlFor="lg" className="text-sm">
							LG
						</label>
					</div>
					<div className="flex items-center">
						<Checkbox id="oneplus" className="mr-2" />
						<label htmlFor="oneplus" className="text-sm">
							One Plus
						</label>
					</div>
				</div>
			</div>

			{/* Popular Tag */}
			<div className="border rounded-md p-4">
				<h3 className="font-bold text-sm uppercase mb-4">POPULAR TAG</h3>

				<div className="flex flex-wrap gap-2">
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Game
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						iPhone
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						TV
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Asus Laptop
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Macbook
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						SSD
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Graphics Card
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Printer
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Smart TV
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Tablet
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Microwave
					</span>
					<span className="px-3 py-1.5 bg-gray-100 text-xs rounded-md hover:bg-gray-200 cursor-pointer">
						Samsung
					</span>
				</div>
			</div>
		</div>
	);
};

export default CategorySidebar;
