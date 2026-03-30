/** @type {import('next').NextConfig} */
const nextConfig = {
  // If CSS looks "unstyled" only on a deployed URL (not localhost), the app may be served
  // from a subpath. Set basePath + assetPrefix to that path so /_next/static/... loads.
  // Example for GitHub Pages at github.io/<repo>/: basePath: '/<repo>', assetPrefix: '/<repo>/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
