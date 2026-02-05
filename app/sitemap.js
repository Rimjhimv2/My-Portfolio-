export default function sitemap() {
  const baseUrl = "https://your-domain.com"; // apna domain

  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: baseUrl,
      lastModified: today,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: today,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
    },
  ];
}
