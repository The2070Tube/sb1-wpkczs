/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Suppress the warning about extra attributes
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-new-gr-c-s-check-loaded$', '^data-gr-ext-installed$'] } : false,
  },
}

module.exports = nextConfig