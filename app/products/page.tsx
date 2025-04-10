"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import PaginationControls from "../components/PaginationControls";
import ProductCard from "../components/ProductCard";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
// import { products } from "../data/products";
import { products } from "data/products";

const Products = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Header with search and sort */}
			<div className="flex flex-col lg:flex-row justify-between items-center mb-6">
				<div className="relative w-full lg:w-1/3 mb-4 lg:mb-0">
					<input
						type="text"
						placeholder="Search for anything..."
						className="w-full pl-4 pr-10 py-2 border rounded-md"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button className="absolute right-3 top-1/2 transform -translate-y-1/2">
						<Search className="h-5 w-5 text-gray-400" />
					</button>
				</div>

				<div className="flex items-center space-x-2">
					<span className="text-sm">Sort by:</span>
					<Select defaultValue="popular">
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Most Popular" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="popular">Most Popular</SelectItem>
							<SelectItem value="price-low">Price: Low to High</SelectItem>
							<SelectItem value="price-high">Price: High to Low</SelectItem>
							<SelectItem value="newest">Newest</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Product count */}
			<div className="text-sm text-gray-500 my-4">
				<span className="font-bold">65,867</span> Results Found
			</div>

			{/* Filter tabs */}
			<div className="flex flex-wrap gap-2 my-4">
				<Link
					to="#"
					className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
				>
					Active Filters
				</Link>
				<Link
					to="#"
					className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
				>
					Electronics Devices
				</Link>
				<Link
					to="#"
					className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition flex items-center gap-1"
				>
					5 Star Rating{" "}
					<Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
				</Link>
			</div>

			<div className="flex flex-col lg:flex-row gap-6">
				{/* Sidebar filters */}
				<CategorySidebar />

				{/* Product grid */}
				<div className="flex-1">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					{/* Pagination */}
					<div className="mt-8">
						<PaginationControls
							currentPage={currentPage}
							totalPages={10}
							onPageChange={setCurrentPage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
