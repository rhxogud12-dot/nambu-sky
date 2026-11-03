# 남부스카이차 홈페이지 (Astro)

## 실행 (Windows PowerShell)
1. Node.js 설치 후 `node -v` 확인 (Astro 7: Node.js 22.23.4 이상 권장)
2. 프로젝트 폴더에서 `npm install`
3. `npm run dev` 후 http://localhost:4321 방문
4. 배포 전 `npm run build`

## 우선 수정할 파일
- `src/data/site.js`: 업체명, 전화번호, 차량 정보, 서비스 목록
- `public/images/`: 실제 촬영 사진 넣기
- `src/pages/`: 소개/안내/문의 문구 수정
- `src/data/site.js`의 `projects`: 실제 작업 사례 등록 (가상의 실적을 공개하지 마세요)

## 배포 (Cloudflare Workers)
- 주소: https://nambu-sky.rhxogud12.workers.dev
- `main` 브랜치에 push하면 자동 배포됩니다.
- Build command: `npm run build` / Deploy command: `npx wrangler deploy`
- `wrangler.jsonc`가 `dist` 폴더만 정적 파일로 올립니다. 서버 코드는 없습니다.
- 도메인 변경 시 `astro.config.mjs`의 `site`와 `src/data/site.js`의 `url`을 함께 수정하세요.

## 공개 전 점검
- 전화번호 입력 후 실제 휴대전화에서 전화/문자 링크 테스트
- 실제 제공 가능한 작업 분야 확인
- 실사 사진 업로드 전 개인정보/차량번호/타 업체 상표 노출 검토
- 업체명, 사업자 정보, 영업 범위 확인
- 실제 도메인 결정 후 canonical, sitemap, 검색엔진 등록 적용
