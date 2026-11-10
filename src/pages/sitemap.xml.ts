import type { APIRoute } from "astro";

const routes = ["/", "/services/", "/contact/"];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL must be configured to generate the sitemap.");
  }

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
