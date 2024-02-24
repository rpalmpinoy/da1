/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"res.cloudinary.com",
			"lh3.googleusercontent.com,tasteful-flowers-f567ebd213.media.strapiapp.com",
		],
		unoptimized: true,
	},
};

export default nextConfig;
