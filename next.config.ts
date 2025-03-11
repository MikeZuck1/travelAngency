/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Permet d'exporter un site statique
  distDir: "dist",  // Définit le dossier de build
  images: {
    unoptimized: true // Désactive l'optimisation des images pour GitHub Pages
  },
  basePath: "/travelAngency",  // Remplace par le nom de ton repo GitHub
  assetPrefix: "/travelAngency/"
};

module.exports = nextConfig;