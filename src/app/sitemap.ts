// src/app/sitemap.ts

export async function generateSitemap() {
  // 기본 도메인
  const baseUrl = 'https://auto-docs2.vercel.app';

  // 사이트맵에 포함할 경로 배열
  const routes = [
    '', // 홈
    // '/about', '/contact' 등 추가 경로
  ];

  // 각 경로에 대한 사이트맵 객체 반환
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}