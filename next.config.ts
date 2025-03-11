/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Permet d'exporter un site statique
  distDir: "dist", // Définir le dossier de build
  images: {
    unoptimized: true, // Désactiver l'optimisation des images (sinon, erreurs sur GitHub Pages)
  },
  basePath: "/travelAngency", // Remplace par le nom de ton dépôt
  assetPrefix: "/travelAngency/",
};

module.exports = nextConfig;