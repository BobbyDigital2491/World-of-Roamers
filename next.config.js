/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'www.google.com', // Example Google domain
      'https://www.dropbox.com/scl/fi/jrfotyfs0d8sqmysi4xdj/download.mp4?rlkey=86ibm0ft2as7z6jivvo68s2iw&dl=0', // Example Dropbox domain
      // Add other domains here as needed
    ]
  }
}
