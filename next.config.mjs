/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"res.cloudinary.com",
			"thdoct.onrender.com",
			"da1.vercel.app",
		],
		unoptimized: true,
	},
};

export default nextConfig;
