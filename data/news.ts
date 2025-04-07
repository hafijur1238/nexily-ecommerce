export interface NewsItem {
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

export const newsItems: NewsItem[] = [
	{
		id: 1,
		image: "/images/news/smartwatch.jpg",
		author: "Kristin",
		date: "19Dec, 2013",
		views: 453,
		title:
			"Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
		excerpt:
			"Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
		slug: "cras-nisl-dolor",
	},
	{
		id: 2,
		image: "/images/news/circuit-board.jpg",
		author: "Robert",
		date: "28 Nov, 2015",
		views: 738,
		title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
		excerpt:
			"Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
		slug: "curabitur-pulvinar",
	},
	{
		id: 3,
		image: "/images/news/smartphone.jpg",
		author: "Arlene",
		date: "9 May, 2014",
		views: 826,
		title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
		excerpt:
			"Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
		slug: "curabitur-massa",
	},
];
