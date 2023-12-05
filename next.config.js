/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.igdb.com',
            port: '',
            pathname: '/igdb/**',
          },
          {
            protocol: 'https',
            hostname: 'www.themoviedb.org',
            port: '',
            pathname: '/t/**',
            
          }
        ],
      },
}

module.exports = nextConfig
