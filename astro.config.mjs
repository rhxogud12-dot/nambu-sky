import { defineConfig } from 'astro/config';
// 도메인 구매 시 src/data/site.js의 url과 함께 변경
export default defineConfig({ output: 'static', site: 'https://nambu-sky.rhxogud12.workers.dev', trailingSlash: 'always' });
