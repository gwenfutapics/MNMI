/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable strict mode for React
    env: {
      DOMAIN: 'mnmintech.com', // Define the domain as an environment variable
    },
    // Optionally add more configurations, e.g., performance optimizations
    poweredByHeader: false, // Hide the "X-Powered-By: Next.js" header for security reasons
    images: {
      domains: ['mnmintech.com'], // Add your domain to allow loading images from it
    },
  };
  
  export default nextConfig;
  