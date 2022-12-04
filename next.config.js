/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  
}

module.exports = nextConfig/*withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
}});*/
