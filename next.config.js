/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@content-blocks/react', '@content-blocks/js']); // pass the modules you would like to see transpiled
module.exports = withTM({
  reactStrictMode: false,
  trailingSlash: true,
});
