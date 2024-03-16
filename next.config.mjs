/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'docs',
    output: 'export',
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
