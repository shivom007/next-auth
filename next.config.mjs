/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir : 'out',
    images:{
        unoptimized: true
    },
    basePath: "/next-auth"
};

export default nextConfig;
