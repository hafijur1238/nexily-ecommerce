import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
	product: {
		id: string;
		title: string;
		price: number;
		originalPrice?: number;
		rating: number;
		reviewCount: number;
		image: string;
		discount?: number;
		badge?: string;
	};
}

const ProductCard = ({ product }: ProductCardProps) => {
	const {
		title,
		price,
		originalPrice,
		rating,
		reviewCount,
		image,
		discount,
		badge,
	} = product;

	return (
		<div className="border rounded-md overflow-hidden hover:shadow-md transition bg-white relative">
			{badge && (
				<div
					className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded-sm ${
						badge === "NEW"
							? "bg-green-500"
							: badge === "SALE"
							? "bg-red-500"
							: "bg-blue-500"
					}`}
				>
					{badge}
				</div>
			)}

			{/* Discount */}
			{discount && (
				<div className="absolute top-2 right-2 bg-yellow-500 text-xs text-white px-2 py-1 rounded-sm">
					{discount}% OFF
				</div>
			)}

			{/* Product Image */}
			<div className="relative w-full h-48">
				<Image src={image} alt={title} layout="fill" objectFit="contain" />
			</div>

			<div className="p-4">
				{/* Rating */}
				<div className="flex items-center space-x-1 mb-2">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < Math.floor(rating)
									? "fill-yellow-400 text-yellow-400"
									: "text-gray-300"
							}`}
						/>
					))}
					<span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
				</div>

				{/* Title */}
				<h3 className="text-sm font-medium line-clamp-2 mb-2">{title}</h3>

				{/* Price */}
				<div className="flex items-center space-x-2">
					<span className="font-bold text-blue-600">${price.toFixed(2)}</span>
					{originalPrice && (
						<span className="text-sm text-gray-400 line-through">
							${originalPrice.toFixed(2)}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
