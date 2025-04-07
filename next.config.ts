// next.config.js
module.exports = {
	images: {
		// domains: ["images.unsplash.com", "v0.blob.com"], // Add all domains you use
		// formats: ["image/avif", "image/webp"],
		remotePatterns: [
			// {
			// 	protocol: "https",
			// 	hostname: "**",
			// 	pathname: "**",
			// },
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
			},
		],
	},
};
