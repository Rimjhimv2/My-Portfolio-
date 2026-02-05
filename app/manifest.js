
export default function manifest() {
  return {
    name: "Rimjhim Verma | Full-Stack Web Developer",
    short_name: "Rimjhim Verma",
    description:
      "Portfolio of Rimjhim Verma – building fast, modern full-stack apps using Next.js, TypeScript, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#0f0f0f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
