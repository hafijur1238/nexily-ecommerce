import { ArrowRight, Calendar, Eye, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
	id: number;
	image: string;
	author: string;
	date: string;
	views: number;
	title: string;
	excerpt: string;
	content: string;
	slug: string;
}

const newsItems: NewsItem[] = [
	{
		id: 1,
		image: "/placeholder.svg?height=300&width=400",
		author: "Kristin",
		date: "19Dec, 2013",
		views: 453,
		title:
			"Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
		excerpt:
			"Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
		content: "",
		slug: "cras-nisl-dolor",
	},
	{
		id: 2,
		image:
			"https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		author: "Robert",
		date: "28 Nov, 2015",
		views: 738,
		title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
		excerpt:
			"Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
		content: "",
		slug: "curabitur-pulvinar",
	},
	{
		id: 3,
		image: "/placeholder.svg?height=300&width=400",
		author: "Arlene",
		date: "9 May, 2014",
		views: 826,
		title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
		excerpt:
			"Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
		content: "",
		slug: "curabitur-massa",
	},
];

export default function LatestNewsSection() {
	return (
		<section className="w-full py-12 px-4">
			<div className="max-w-screen-xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10">Latest News</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{newsItems.map((item) => (
						<div
							key={item.id}
							className="border border-gray-200 rounded-sm overflow-hidden"
						>
							<div className="relative h-48 w-full">
								<Image
									src={item.image || "/placeholder.svg"}
									alt={item.title}
									fill
									className="object-cover"
								/>
							</div>

							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-4">
									<div className="flex items-center mr-4">
										<User className="w-4 h-4 text-blue-500 mr-1" />
										<span>{item.author}</span>
									</div>
									<div className="flex items-center mr-4">
										<Calendar className="w-4 h-4 text-blue-500 mr-1" />
										<span>{item.date}</span>
									</div>
									<div className="flex items-center">
										<Eye className="w-4 h-4 text-blue-500 mr-1" />
										<span>{item.views}</span>
									</div>
								</div>

								<h3 className="font-bold text-lg mb-2">{item.title}</h3>
								<p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>

								<Link
									href={`/news/${item.slug}`}
									className="inline-flex items-center text-blue-500 text-sm font-medium"
								>
									<span className="border border-blue-500 rounded px-4 py-2 flex items-center">
										READ MORE
										<ArrowRight className="w-4 h-4 ml-2" />
									</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
