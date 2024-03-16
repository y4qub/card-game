/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'docs',
    output: 'export',
    basePath: 'card-game',
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
