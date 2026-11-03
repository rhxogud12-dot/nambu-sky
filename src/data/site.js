import p01 from '../assets/projects/01.jpg';
import p02 from '../assets/projects/02.jpg';
import p03 from '../assets/projects/03.jpg';
import p04 from '../assets/projects/04.jpg';
import p05 from '../assets/projects/05.jpg';
import p06 from '../assets/projects/06.jpg';
import p07 from '../assets/projects/07.jpg';
import p08 from '../assets/projects/08.jpg';
import p09 from '../assets/projects/09.jpg';
import p10 from '../assets/projects/10.jpg';
import p11 from '../assets/projects/11.jpg';
import p12 from '../assets/projects/12.jpg';
import p13 from '../assets/projects/13.jpg';
import p14 from '../assets/projects/14.jpg';
import heroImg from '../assets/hero.jpg';

export const site = {
  name: '남부스카이차',
  shortName: '남부',
  url: 'https://nambu-sky.pages.dev', // 도메인 구매 시 이 값과 astro.config.mjs의 site를 함께 변경
  phone: '010-5322-3678',
  hours: '06:00 ~ 23:00',
  bizNo: '121-52-60319',
  vehicle: '3.5톤 스카이차',
  maxHeight: '약 30m',
  basketLoad: '400kg',
  areas: ['파주', '고양', '일산'],
  region: '파주 · 고양 · 일산 중심 / 그 외 전 지역 협의',
  description: '파주·고양·일산 스카이차 남부스카이차. 3.5톤 스카이차, 최대 작업 높이 약 30m, 바스켓 하중 400kg. 간판·외벽·창호·현수막 등 고소작업 전화 상담. 그 외 전 지역 협의.',
};

export const hero = heroImg;

export const services = [
  {title:'간판 설치·철거',desc:'간판 설치와 철거 등 고소작업 상담'},
  {title:'건물 외벽 작업',desc:'외벽 유지보수 관련 고소작업 상담'},
  {title:'창호·유리 작업',desc:'현장 여건에 맞춘 고소작업 상담'},
  {title:'기타 고소작업',desc:'작업 높이와 진입 여건 확인 후 협의'},
];

// 실제 작업 사진. 지역·날짜를 확인하면 region 항목을 추가하세요.
export const projects = [
  {img:p13, title:'대형 창고 외벽 고소작업', desc:'붐을 최대로 뻗어 높은 외벽 상단까지 접근한 작업'},
  {img:p12, title:'대형 창고 외벽 고소작업', desc:'협소한 주차장 안에서 아웃트리거를 펼쳐 작업'},
  {img:p10, title:'신축 건물 외벽 마감 작업', desc:'신축 현장 외벽 상층부 작업 지원'},
  {img:p09, title:'아파트 외벽 작업', desc:'도로변에서 안전 통제 후 진행한 외벽 작업'},
  {img:p08, title:'다세대 주택 외벽 작업', desc:'주택가 골목에서 4층 높이 외벽 작업'},
  {img:p07, title:'도심 빌딩 조경 구역 작업', desc:'보도 구간에서 안전 통제 후 진행한 고소작업'},
  {img:p04, title:'물류창고 외벽 작업', desc:'창고 외벽 상부 설비 작업'},
  {img:p05, title:'물류창고 외벽 작업', desc:'물류창고 상층부 작업'},
  {img:p06, title:'물류창고 외벽 작업', desc:'경사지 창고 외벽 작업'},
  {img:p11, title:'건물 옥상부 작업', desc:'옥상 구조물 높이까지 접근한 작업'},
  {img:p14, title:'좁은 진입로 현장 작업', desc:'건물 사이 좁은 진입로에 차량을 대고 아웃트리거를 설치'},
  {img:p03, title:'상가 건물 외벽·지붕 마감 작업', desc:'바스켓에 2인이 탑승해 진행한 외장 마감 작업'},
  {img:p02, title:'건설 현장 장비 고소작업', desc:'건설 현장 대형 장비 상부 작업 지원'},
  {img:p01, title:'실내 전시장 현수막 작업', desc:'전시장 내부 천장 대형 현수막 설치'},
];
