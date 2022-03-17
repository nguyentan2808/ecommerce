/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["pickbazar-react-rest.vercel.app", "res.cloudinary.com"],
  },
};
