import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: '2mb',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/a/**',
			},
			{
				protocol: 'https',
				hostname: 'staekcbwplnzsgcpuggb.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/**',
			},
		],
		unoptimized: true,
	},
}

export default nextConfig
