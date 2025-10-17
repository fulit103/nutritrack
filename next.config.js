/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Your Company",
        siteDescription: "Your company description.",
        siteKeywords: "your company keywords",
        siteUrl: "You site url",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle"
    },
    async redirects() {
        return [
            {
                source: "/maquina-para-fabricar-empanadas-ultra",
                destination: "/",
                permanent: true
            },
            {
                source: "/maquina-para-hacer-empanadas-super-youtube",
                destination: "/",
                permanent: true
            },
            {
                source: "/maquina-para-fabricar-empanadas-opti",
                destination: "/",
                permanent: true
            },
            {
                source: "/maquina-para-hacer-empanadas-gads-2",
                destination: "/",
                permanent: true
            },
            {
                source: "/maquina-para-fabricar-empanadas-super",
                destination: "/",
                permanent: true
            },
            {
                source: "/contacto",
                destination: "/",
                permanent: true
            }
        ];
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
