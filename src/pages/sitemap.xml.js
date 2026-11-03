// 플러그인 없이 직접 생성하는 사이트맵. 페이지를 추가하면 여기에도 추가하세요.
const pages = ['/', '/about/', '/services/', '/projects/', '/contact/'];

export function GET({ site }) {
  const urls = pages.map(p => `<url><loc>${new URL(p, site).href}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
