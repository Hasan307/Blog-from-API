/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY', // Prevent content from being displayed in a frame
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
