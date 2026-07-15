/* ==========================================================================
   (사)미래교육이룸학술협회 — 공통 스크립트
   ==========================================================================
   ⚠️ 실제 오픈 전 교체가 필요한 값은 모두 아래 SITE / 데이터 상수에 모여 있습니다.
      HTML 파일은 수정할 필요 없이 이 파일의 상수만 교체하면 됩니다.
   ========================================================================== */

/* --------------------------------------------------------------------------
   [교체 필요] 협회 기본 정보 — 모두 예시값입니다.
   -------------------------------------------------------------------------- */
const SITE = {
  name: "(사)미래교육이룸학술협회",
  nameShort: "미래교육이룸학술협회",
  tagline: "기업 사회공헌으로 잇는 평생교육",
  affiliate: "미래인재교육원", // 계열 교육기관 (교육 운영 파트너)
  ceo: "홍길동", // (예시) 실제 대표자명으로 교체
  bizNo: "000-00-00000", // (예시) 사업자등록번호
  mailOrderNo: "제2026-서울강남-00000호", // (예시) 통신판매업 신고번호
  privacyOfficer: "김담당", // (예시) 개인정보보호책임자
  address: "서울특별시 강남구 테헤란로 000, 00층 (예시)",
  tel: "1600-0000", // (예시) 대표전화
  fax: "02-000-0000", // (예시)
  email: "help@miraeroom.example", // (예시)
  kakaoUrl: "#", // (예시) 카카오톡 채널 URL로 교체
  hours: {
    weekday: "평일 09:00 ~ 18:00",
    lunch: "점심 12:00 ~ 13:00",
    off: "토·일·공휴일 휴무",
  },
  certRegNo: "2026-000000", // (예시) 민간자격 등록번호
  copyrightYear: 2026,
  // 기업 사회공헌(CSR) 담당 창구 — 기부·협약 문의용
  csr: {
    tel: "02-000-0001", // (예시) 사회공헌 협력 전용 회선
    email: "csr@miraeroom.example", // (예시)
    manager: "이담당 팀장", // (예시)
    donationRegNo: "기부금대상민간단체 지정번호 제0000호", // (예시) 행정안전부 지정번호
    taxBenefit: "지정기부금 단체 (법인세법 시행령 제39조) — 기부금 손금산입 대상 (예시)",
  },
};

/* --------------------------------------------------------------------------
   [교체 필요] 하단 통계 — 예시 수치입니다.
   -------------------------------------------------------------------------- */
const STATS = [
  { value: "48,000", unit: "명", label: "누적 교육 수혜자 (예시)" },
  { value: "37", unit: "개사", label: "사회공헌 후원 기업 (예시)" },
  { value: "24", unit: "억원", label: "누적 교육 지원 규모 (예시)" },
  { value: "98", unit: "%", label: "교육 만족도 (예시)" },
];

/* --------------------------------------------------------------------------
   [교체 필요] 후원 기업 — 실제 사명·로고를 쓰려면 반드시 해당 기업의 사전 동의가 필요합니다.
   현재는 모두 가상의 예시 기업명입니다.
   -------------------------------------------------------------------------- */
const PARTNERS = [
  { name: "A그룹 사회공헌재단", since: "2021", area: "노인·돌봄 교육" },
  { name: "B전자 CSR본부", since: "2022", area: "AI·디지털 역량" },
  { name: "C금융지주 사회공헌부", since: "2022", area: "경력단절여성 재취업" },
  { name: "D물산 나눔재단", since: "2023", area: "청년 직업역량" },
  { name: "E제약 사회공헌팀", since: "2023", area: "건강·보건 교육" },
  { name: "F유통 상생협력실", since: "2024", area: "소상공인 창업" },
  { name: "G중공업 사회공헌재단", since: "2024", area: "산업안전 교육" },
  { name: "H통신 ESG추진단", since: "2025", area: "디지털 포용" },
];

/* --------------------------------------------------------------------------
   [교체 필요] 사회공헌 사업 사례 (임팩트) — 예시 데이터
   -------------------------------------------------------------------------- */
const IMPACT_CASES = [
  {
    partner: "B전자 CSR본부 (예시)",
    title: "중장년 AI 역량 강화 프로젝트",
    period: "2025.03 ~ 2025.12",
    people: 1200,
    desc: "디지털 전환에서 소외되기 쉬운 50~60대를 대상으로 생성형 AI 활용 교육을 무상 제공하고, 수료자 중 68명이 지역 강사로 활동을 시작했습니다. (예시)",
  },
  {
    partner: "C금융지주 사회공헌부 (예시)",
    title: "경력단절여성 재취업 지원 과정",
    period: "2024.09 ~ 2025.08",
    people: 860,
    desc: "육아로 경력이 단절된 여성에게 심리상담·방과후지도 과정을 전액 지원했으며, 수료자의 41%가 6개월 내 재취업에 성공했습니다. (예시)",
  },
  {
    partner: "A그룹 사회공헌재단 (예시)",
    title: "지역 돌봄 인력 양성 사업",
    period: "2024.01 ~ 진행 중",
    people: 2400,
    desc: "초고령 지역 5개 시·군의 주민을 병원동행매니저·노인생활지원사로 양성해 지역 돌봄 공백 해소에 기여하고 있습니다. (예시)",
  },
];

/* --------------------------------------------------------------------------
   자격증 카테고리
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { id: "ai", name: "AI/디지털", icon: "🤖", en: "AI+Digital" },
  { id: "psy", name: "심리/상담", icon: "🧠", en: "Psychology" },
  { id: "senior", name: "노인/요양", icon: "🧓", en: "Senior+Care" },
  { id: "child", name: "아동/보육", icon: "🧸", en: "Child+Care" },
  { id: "pet", name: "반려동물", icon: "🐾", en: "Pet+Care" },
  { id: "edu", name: "교육/지도", icon: "📚", en: "Education" },
  { id: "health", name: "의료/건강", icon: "🩺", en: "Health" },
  { id: "beauty", name: "미용/뷰티", icon: "💄", en: "Beauty" },
  { id: "coffee", name: "커피/제과", icon: "☕", en: "Coffee" },
  { id: "art", name: "예술/공예", icon: "🎨", en: "Art+Craft" },
  { id: "job", name: "직업/창업", icon: "💼", en: "Career" },
  { id: "env", name: "환경/안전", icon: "🌱", en: "Safety" },
];

/* --------------------------------------------------------------------------
   [교체 필요] 교육과정 데이터 — 모두 예시입니다.
   협회 교육은 기업 사회공헌 기부금으로 운영되므로, 수강생 부담금 기준이 다릅니다.

   price   : 교육비 상당액(1인당 단가) — 후원 규모 산정 및 지원 효과 표기에 사용
   fund    : "full"    기업 후원으로 교육비 전액 지원 (수강생 부담 0원)
             "partial" 일부 지원 (self 금액만 자부담)
             "self"    후원 미배정 — 자부담 과정
   self    : 자부담금 (fund가 partial일 때만 사용)
   sponsor : 후원 주체 (예시 기업명 — 실제 사명 사용 시 해당 기업 동의 필수)
   students: 누적 수혜 인원
   -------------------------------------------------------------------------- */
const LECTURES = [
  { id: 1, title: "AI활용지도사 2급", cat: "ai", lessons: 28, price: 250000, fund: "full", sponsor: "B전자 CSR본부", rating: 4.9, students: 3812, badge: "new", cert: "AI활용지도사 2급", date: "2026-06-01" },
  { id: 2, title: "생성형 AI 프롬프트 전문가", cat: "ai", lessons: 24, price: 250000, fund: "full", sponsor: "B전자 CSR본부", rating: 4.8, students: 2140, badge: "new", cert: "AI프롬프트전문가", date: "2026-05-20" },
  { id: 3, title: "아동심리상담사 2급", cat: "psy", lessons: 34, price: 280000, fund: "full", sponsor: "C금융지주 사회공헌부", rating: 4.9, students: 8420, badge: "best", cert: "아동심리상담사 2급", date: "2026-03-11" },
  { id: 4, title: "노인심리상담사", cat: "psy", lessons: 30, price: 280000, fund: "full", sponsor: "A그룹 사회공헌재단", rating: 4.8, students: 5310, badge: "hot", cert: "노인심리상담사 2급", date: "2026-02-18" },
  { id: 5, title: "미술심리상담사 2급", cat: "psy", lessons: 26, price: 260000, fund: "partial", self: 39000, sponsor: "C금융지주 사회공헌부", rating: 4.7, students: 3105, badge: "", cert: "미술심리상담사 2급", date: "2026-01-30" },
  { id: 6, title: "심리분석사 2급", cat: "psy", lessons: 32, price: 280000, fund: "partial", self: 49000, sponsor: "C금융지주 사회공헌부", rating: 4.7, students: 2760, badge: "", cert: "심리분석사 2급", date: "2025-12-05" },
  { id: 7, title: "병원동행매니저", cat: "senior", lessons: 22, price: 240000, fund: "full", sponsor: "A그룹 사회공헌재단", rating: 4.9, students: 6140, badge: "hot", cert: "병원동행매니저", date: "2026-05-02" },
  { id: 8, title: "노인생활지원사", cat: "senior", lessons: 25, price: 240000, fund: "full", sponsor: "A그룹 사회공헌재단", rating: 4.8, students: 4980, badge: "best", cert: "노인생활지원사", date: "2026-04-14" },
  { id: 9, title: "요양보호사 실무과정", cat: "senior", lessons: 34, price: 300000, fund: "partial", self: 49000, sponsor: "E제약 사회공헌팀", rating: 4.6, students: 3320, badge: "", cert: "요양보호사 실무", date: "2025-11-22" },
  { id: 10, title: "방과후지도사 2급", cat: "child", lessons: 30, price: 260000, fund: "full", sponsor: "C금융지주 사회공헌부", rating: 4.8, students: 5870, badge: "best", cert: "방과후지도사 2급", date: "2026-03-28" },
  { id: 11, title: "아동요리지도사", cat: "child", lessons: 20, price: 220000, fund: "partial", self: 39000, sponsor: "F유통 상생협력실", rating: 4.6, students: 1840, badge: "", cert: "아동요리지도사", date: "2025-10-09" },
  { id: 12, title: "반려동물관리사", cat: "pet", lessons: 27, price: 260000, fund: "partial", self: 49000, sponsor: "F유통 상생협력실", rating: 4.9, students: 4410, badge: "hot", cert: "반려동물관리사 2급", date: "2026-04-25" },
  { id: 13, title: "반려동물행동교정사", cat: "pet", lessons: 24, price: 260000, fund: "self", sponsor: null, rating: 4.7, students: 2230, badge: "", cert: "반려동물행동교정사", date: "2026-01-16" },
  { id: 14, title: "독서논술지도사", cat: "edu", lessons: 28, price: 250000, fund: "full", sponsor: "D물산 나눔재단", rating: 4.7, students: 3040, badge: "", cert: "독서논술지도사 2급", date: "2025-12-19" },
  { id: 15, title: "학습코칭지도사", cat: "edu", lessons: 26, price: 250000, fund: "partial", self: 39000, sponsor: "D물산 나눔재단", rating: 4.6, students: 1920, badge: "", cert: "학습코칭지도사 2급", date: "2025-09-30" },
  { id: 16, title: "건강관리사", cat: "health", lessons: 29, price: 260000, fund: "full", sponsor: "E제약 사회공헌팀", rating: 4.7, students: 2610, badge: "", cert: "건강관리사 2급", date: "2026-02-06" },
  { id: 17, title: "피부미용관리사", cat: "beauty", lessons: 23, price: 240000, fund: "self", sponsor: null, rating: 4.6, students: 1730, badge: "", cert: "피부미용관리사", date: "2025-11-11" },
  { id: 18, title: "바리스타 자격과정 2급", cat: "coffee", lessons: 21, price: 230000, fund: "partial", self: 39000, sponsor: "F유통 상생협력실", rating: 4.8, students: 4120, badge: "hot", cert: "바리스타 2급", date: "2026-03-05" },
  { id: 19, title: "홈베이킹 제과전문가", cat: "coffee", lessons: 22, price: 230000, fund: "self", sponsor: null, rating: 4.6, students: 1580, badge: "", cert: "제과전문가", date: "2025-10-24" },
  { id: 20, title: "캘리그라피 지도사", cat: "art", lessons: 20, price: 220000, fund: "self", sponsor: null, rating: 4.7, students: 1460, badge: "", cert: "캘리그라피지도사 2급", date: "2025-09-12" },
  { id: 21, title: "직업상담 실무과정", cat: "job", lessons: 26, price: 250000, fund: "full", sponsor: "D물산 나눔재단", rating: 4.5, students: 1290, badge: "", cert: "직업상담사 실무", date: "2025-08-27" },
  { id: 22, title: "산업안전지도사 2급", cat: "env", lessons: 25, price: 250000, fund: "full", sponsor: "G중공업 사회공헌재단", rating: 4.6, students: 1670, badge: "", cert: "산업안전지도사 2급", date: "2026-01-08" },
  { id: 23, title: "환경교육지도사", cat: "env", lessons: 22, price: 230000, fund: "partial", self: 39000, sponsor: "G중공업 사회공헌재단", rating: 4.5, students: 980, badge: "", cert: "환경교육지도사 2급", date: "2025-07-15" },
  { id: 24, title: "스마트팩토리 데이터 입문", cat: "ai", lessons: 26, price: 260000, fund: "full", sponsor: "H통신 ESG추진단", rating: 4.6, students: 1120, badge: "new", cert: "스마트팩토리 운영관리사", date: "2026-06-10" },
];

/* --------------------------------------------------------------------------
   [교체 필요] 공지 / 소식 / 일정 / 이벤트 / 후기 — 예시 콘텐츠
   -------------------------------------------------------------------------- */
const NOTICES = [
  { id: 1, title: "2026년 하반기 자격 검정 일정 안내", date: "2026-07-01", views: 1204, new: true },
  { id: 2, title: "[모집] 기업 후원 전액지원 교육생 모집 안내 (12개 과정)", date: "2026-06-24", views: 2871, new: true },
  { id: 3, title: "자격증 발급 배송 일정 안내 (7월 신청 건)", date: "2026-06-18", views: 1540, new: false },
  { id: 4, title: "2025년 사회공헌 사업 결산 및 기부금 사용내역 공시", date: "2026-06-10", views: 964, new: false },
  { id: 5, title: "개인정보처리방침 개정 안내 (2026.07.01. 시행)", date: "2026-06-02", views: 388, new: false },
];

const NEWS = [
  { id: 1, title: "미래교육이룸학술협회, 2026 평생교육 우수기관 선정 (예시)", date: "2026-06-28" },
  { id: 2, title: "지역 복지관과 노인돌봄 인력양성 업무협약 체결 (예시)", date: "2026-06-15" },
  { id: 3, title: "AI 활용 교육 커리큘럼 자문위원회 발족 (예시)", date: "2026-05-30" },
  { id: 4, title: "누적 수강생 48,000명 돌파 (예시)", date: "2026-05-12" },
];

const SCHEDULES = [
  { id: 1, title: "제12회 자격 검정 시험", date: "2026-08-08", tag: "검정" },
  { id: 2, title: "8월 자격증 발급 신청 마감", date: "2026-08-20", tag: "발급" },
  { id: 3, title: "하반기 신규 과정 오픈", date: "2026-09-01", tag: "개강" },
  { id: 4, title: "제13회 자격 검정 시험", date: "2026-10-10", tag: "검정" },
];

const EVENTS = [
  { id: 1, title: "2026 하반기 전액지원 교육생 모집", desc: "8/1 ~ 8/31 · 후원 배정 12개 과정 · 선착순 2,000명 (예시)", color: "04668B" },
  { id: 2, title: "임직원 재능기부 강사단 모집", desc: "후원 기업 임직원 대상 · 상시 접수 (예시)", color: "F5A623" },
];

const REVIEWS = [
  { name: "김O진", course: "아동심리상담사 2급", rating: 5, text: "육아휴직 중에 들었는데 모바일로 자투리 시간마다 볼 수 있어서 두 달 만에 수료했어요. 강의가 사례 중심이라 아이를 이해하는 데 바로 도움이 됐습니다." },
  { name: "이O수", course: "병원동행매니저", rating: 5, text: "50대 재취업을 준비하며 수강했습니다. 현장 실무 위주로 구성돼 있어서 실제 어르신 응대할 때 배운 내용을 그대로 쓰고 있어요. 자격증 발급도 빨랐습니다." },
  { name: "박O영", course: "반려동물관리사", rating: 4, text: "강의 하나가 20분 정도라 출퇴근 지하철에서 딱 한 강씩 듣기 좋았어요. 진도율 관리가 자동으로 돼서 신경 쓸 게 없었습니다." },
  { name: "최O은", course: "AI활용지도사 2급", rating: 5, text: "실습 예제를 따라 하면서 배우니 비전공자인데도 어렵지 않았습니다. 수료 후 주민센터 강의까지 연결돼서 만족합니다." },
  { name: "정O호", course: "바리스타 자격과정 2급", rating: 5, text: "창업 준비로 들었는데 원두 이론부터 추출까지 체계적이었어요. 시험도 강의 내용에서 그대로 나와서 한 번에 합격했습니다." },
  { name: "한O미", course: "방과후지도사 2급", rating: 4, text: "수업 계획서 작성 파트가 특히 좋았습니다. 실제 방과후 수업에 바로 적용할 수 있는 자료가 많았어요." },
];

/* --------------------------------------------------------------------------
   유틸
   -------------------------------------------------------------------------- */
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const catOf = (id) => CATEGORIES.find((c) => c.id === id) || { name: "기타", icon: "📘", en: "Course" };
const won = (n) => n.toLocaleString("ko-KR") + "원";
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

/** 강의 썸네일 (실제 이미지가 준비되면 이 함수만 교체하면 전체 반영됩니다) */
const thumbOf = (lec, w = 400, h = 300) => {
  const palette = ["04668B", "0A7FA8", "034E6B", "16748F", "0B6E93"];
  const bg = palette[lec.id % palette.length];
  return `https://placehold.co/${w}x${h}/${bg}/ffffff?text=${catOf(lec.cat).en}`;
};

const starsHtml = (rating) => {
  const full = Math.round(rating);
  return `<span class="rating__stars" aria-hidden="true">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
};

const lectureCount = (catId) => LECTURES.filter((l) => l.cat === catId).length;

/** 수강생이 실제로 부담하는 금액 */
const selfCost = (lec) => (lec.fund === "full" ? 0 : lec.fund === "partial" ? lec.self : lec.price);

/** 후원 지원 상태 표기 */
const fundInfo = (lec) => {
  if (lec.fund === "full")
    return { label: "기업 후원 100% 지원", cls: "badge--fund", cost: "0원", note: "수강생 부담 없음" };
  if (lec.fund === "partial")
    return { label: `기업 후원 ${Math.round((1 - lec.self / lec.price) * 100)}% 지원`, cls: "badge--fund", cost: won(lec.self), note: "자부담금" };
  return { label: "자부담 과정", cls: "badge", cost: won(lec.price), note: "후원 미배정" };
};

/** 총 수강시간(분) — 강의당 평균 24분 기준 (결정적 계산) */
const totalMinutes = (lec) => lec.lessons * 24;
const hoursText = (mins) => `${Math.floor(mins / 60)}시간 ${mins % 60}분`;

/* --------------------------------------------------------------------------
   내비게이션 정의
   -------------------------------------------------------------------------- */
const NAV = [
  {
    key: "lecture",
    label: "강의",
    href: "lecture.html",
    children: CATEGORIES.map((c) => ({ label: `${c.icon} ${c.name}`, href: `lecture.html?cat=${c.id}` })),
  },
  { key: "certificate", label: "자격과정 안내", href: "certificate.html" },
  { key: "issue", label: "자격증 발급", href: "certificate.html#issue" },
  {
    key: "csr",
    label: "사회공헌",
    href: "csr.html",
    children: [
      { label: "협회 사회공헌 모델", href: "csr.html#model" },
      { label: "후원 기업 · 파트너", href: "csr.html#partners" },
      { label: "사업 사례 · 임팩트", href: "csr.html#impact" },
      { label: "기부 · 협약 절차", href: "csr.html#process" },
      { label: "사회공헌 제휴 문의", href: "csr.html#contact" },
    ],
  },
  {
    key: "community",
    label: "커뮤니티",
    href: "community.html",
    children: [
      { label: "공지사항", href: "community.html#notice" },
      { label: "1:1 문의", href: "community.html#qna" },
      { label: "수강후기", href: "community.html#review" },
      { label: "이벤트", href: "community.html#event" },
    ],
  },
  { key: "about", label: "협회소개", href: "about.html" },
];

/* --------------------------------------------------------------------------
   공통 헤더
   -------------------------------------------------------------------------- */
function renderHeader() {
  const host = qs("#site-header");
  if (!host) return;
  const active = document.body.dataset.page || "";

  const gnbItems = NAV.map((item) => {
    const cur = item.key === active ? ' aria-current="page"' : "";
    const sub = item.children
      ? `<ul class="gnb-sub">${item.children
          .map((c) => `<li><a href="${c.href}">${c.label}</a></li>`)
          .join("")}</ul>`
      : "";
    return `<li><a href="${item.href}"${cur}>${item.label}</a>${sub}</li>`;
  }).join("");

  const mobileItems = NAV.map((item, i) => {
    if (!item.children) return `<li><a href="${item.href}">${item.label}</a></li>`;
    return `<li>
      <button type="button" class="m-acc__btn" aria-expanded="false" aria-controls="m-acc-${i}">${item.label}</button>
      <div class="m-acc__panel" id="m-acc-${i}">
        <a href="${item.href}">${item.label} 전체보기</a>
        ${item.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("")}
      </div>
    </li>`;
  }).join("");

  host.innerHTML = `
    <div class="header-util">
      <div class="container">
        <a href="csr.html#contact" class="util-strong">🤝 기업 사회공헌 제휴문의</a>
        <span class="util-divider" aria-hidden="true"></span>
        <a href="certificate.html#issue">자격증 발급조회</a>
        <span class="util-divider" aria-hidden="true"></span>
        <a href="#" data-demo>로그인</a>
        <span class="util-divider" aria-hidden="true"></span>
        <a href="#" data-demo>회원가입</a>
        <span class="util-divider" aria-hidden="true"></span>
        <a href="community.html#qna">고객센터</a>
        <button type="button" data-demo aria-label="검색 열기">🔍<span class="sr-only">검색</span></button>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="index.html" class="logo">
          <span class="logo-mark" aria-hidden="true">미</span>
          <span class="logo-text">${SITE.nameShort}<small>${SITE.tagline}</small></span>
        </a>
        <nav class="gnb" aria-label="주요 메뉴"><ul>${gnbItems}</ul></nav>
        <div class="header-cta">
          <a href="lecture.html" class="btn btn--accent btn--sm">수강신청</a>
        </div>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="메뉴 열기">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;

  // 모바일 사이드바 + 배경 (body 직속으로 붙여야 sticky 헤더 위에 덮인다)
  const aside = document.createElement("template");
  aside.innerHTML = `
    <div class="nav-backdrop" hidden></div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="모바일 메뉴" aria-hidden="true">
      <div class="mobile-nav__head">
        <a href="index.html" class="logo">
          <span class="logo-mark" aria-hidden="true">미</span>
          <span class="logo-text">${SITE.nameShort}</span>
        </a>
        <button type="button" class="mobile-nav__close" aria-label="메뉴 닫기">×</button>
      </div>
      <div class="mobile-nav__body"><ul>${mobileItems}</ul></div>
      <div class="mobile-nav__foot">
        <a href="lecture.html" class="btn btn--accent btn--block">수강신청</a>
        <a href="certificate.html#issue" class="btn btn--ghost btn--block">자격증 발급조회</a>
        <a href="tel:${SITE.tel}" class="btn btn--light btn--block">📞 ${SITE.tel}</a>
      </div>
    </nav>`;
  document.body.appendChild(aside.content);
}

function initMobileNav() {
  const toggle = qs(".nav-toggle");
  const nav = qs(".mobile-nav");
  const backdrop = qs(".nav-backdrop");
  const closeBtn = qs(".mobile-nav__close");
  if (!toggle || !nav || !backdrop) return;

  const open = () => {
    nav.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("is-open"));
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    nav.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    setTimeout(() => (backdrop.hidden = true), 200);
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => (nav.classList.contains("is-open") ? close() : open()));
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });

  // 모바일 메뉴 아코디언
  qsa(".m-acc__btn", nav).forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = qs("#" + btn.getAttribute("aria-controls"), nav);
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("is-open", !isOpen);
    });
  });
}

/* --------------------------------------------------------------------------
   공통 푸터 + 플로팅 버튼
   -------------------------------------------------------------------------- */
function renderFooter() {
  const host = qs("#site-footer");
  if (!host) return;

  host.innerHTML = `
    <div class="footer-top">
      <div class="container">
        <a href="about.html">협회소개</a>
        <a href="#" data-demo class="is-strong">개인정보처리방침</a>
        <a href="#" data-demo>이용약관</a>
        <a href="about.html#location">오시는 길</a>
        <a href="csr.html#contact">사회공헌 제휴문의</a>
        <a href="community.html#qna">1:1 문의</a>
        <a href="certificate.html#issue">자격증 발급조회</a>
      </div>
    </div>
    <div class="container">
      <div class="footer-main">
        <div>
          <a href="index.html" class="logo footer-logo">
            <span class="logo-mark" aria-hidden="true">미</span>
            <span class="logo-text">${SITE.nameShort}<small>${SITE.tagline}</small></span>
          </a>
          <div class="footer-info">
            <span>상호 : ${SITE.name}</span>
            <span>대표자 : ${SITE.ceo} (예시)</span>
            <span>사업자등록번호 : ${SITE.bizNo} (예시)</span>
            <span>통신판매업신고 : ${SITE.mailOrderNo} (예시)</span>
            <span>개인정보보호책임자 : ${SITE.privacyOfficer} (예시)</span>
            <span>주소 : ${SITE.address}</span>
            <span>대표전화 : ${SITE.tel} (예시)</span>
            <span>팩스 : ${SITE.fax} (예시)</span>
            <span>이메일 : ${SITE.email} (예시)</span>
            <span>교육운영 : ${SITE.affiliate}</span>
          </div>
          <p class="footer-copy">
            민간자격 등록번호 : ${SITE.certRegNo} (예시) · ${SITE.csr.donationRegNo} (예시)<br />
            본 사이트의 협회 정보 · 후원 기업명 · 과정명 · 통계는 모두 <strong>예시 데이터</strong>이며, 실제 값으로 교체해야 합니다.<br />
            © ${SITE.copyrightYear} ${SITE.nameShort}. All rights reserved.
          </p>
        </div>
        <div class="footer-cs">
          <p class="footer-cs__label">고객센터</p>
          <p class="footer-cs__tel">${SITE.tel}</p>
          <p class="footer-cs__hours">
            ${SITE.hours.weekday} (${SITE.hours.lunch})<br />
            ${SITE.hours.off}
          </p>
          <div class="footer-cs__actions">
            <a href="${SITE.kakaoUrl}" class="btn btn--kakao btn--sm" data-demo>💬 카카오톡 상담</a>
            <a href="community.html#qna" class="btn btn--outline-light btn--sm">1:1 문의</a>
          </div>
        </div>
      </div>
    </div>`;
}

function renderFloating() {
  const box = document.createElement("div");
  box.className = "floating";
  box.innerHTML = `
    <a href="${SITE.kakaoUrl}" class="floating__btn floating__btn--kakao" data-demo>
      <span class="ico" aria-hidden="true">💬</span>카톡상담
    </a>
    <a href="tel:${SITE.tel}" class="floating__btn">
      <span class="ico" aria-hidden="true">📞</span>전화문의
    </a>
    <button type="button" class="floating__btn floating__btn--top" aria-label="맨 위로 이동">
      <span class="ico" aria-hidden="true">↑</span>TOP
    </button>`;
  document.body.appendChild(box);

  const topBtn = qs(".floating__btn--top", box);
  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  const onScroll = () => topBtn.classList.toggle("is-visible", window.scrollY > 400);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   데모 링크 안내 (실제 기능 연결 전 임시)
   -------------------------------------------------------------------------- */
function initDemoLinks() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-demo]");
    if (!t) return;
    e.preventDefault();
    alert("데모 사이트입니다. 실제 서비스 연동 시 동작합니다.");
  });
}

/* --------------------------------------------------------------------------
   히어로 슬라이더 (자동 재생 + 스와이프 + 키보드)
   -------------------------------------------------------------------------- */
const HERO_SLIDES = [
  {
    eyebrow: "🤝 기업 사회공헌으로 함께하는 평생교육",
    title: "기업의 나눔이<br /><em>배움의 기회</em>가 됩니다",
    desc: "미래교육이룸학술협회는 기업 사회공헌 기부금으로 교육비를 지원하여, 배움이 필요한 분들께 무상 교육을 제공합니다.",
    img: "https://placehold.co/1600x600/034E6B/ffffff?text=Education+for+All",
    actions: [
      { label: "후원 교육과정 보기", href: "lecture.html", cls: "btn--accent" },
      { label: "사회공헌 모델 알아보기", href: "csr.html", cls: "btn--outline-light" },
    ],
  },
  {
    eyebrow: "💙 교육비 부담 없이",
    title: "후원 과정은 <em>교육비 0원</em>,<br />자격증까지 한 번에",
    desc: "기업 후원이 배정된 과정은 수강생 부담 없이 학습부터 시험, 자격증 발급까지 진행할 수 있습니다.",
    img: "https://placehold.co/1600x600/04668B/ffffff?text=Fully+Funded",
    actions: [
      { label: "전액지원 과정 찾기", href: "lecture.html?fund=full", cls: "btn--accent" },
      { label: "자격증 발급 안내", href: "certificate.html#issue", cls: "btn--outline-light" },
    ],
  },
  {
    eyebrow: "🏢 기업 사회공헌 담당자님께",
    title: "설계부터 임팩트 리포트까지<br /><em>협회가 함께합니다</em>",
    desc: "대상자 모집, 교육 운영, 자격 검정, 성과 측정까지 원스톱으로 수행하고 결과를 리포트로 보고드립니다.",
    img: "https://placehold.co/1600x600/0A7FA8/ffffff?text=CSR+Partnership",
    actions: [
      { label: "사회공헌 제휴 문의", href: "csr.html#contact", cls: "btn--accent" },
      { label: "사업 사례 보기", href: "csr.html#impact", cls: "btn--outline-light" },
    ],
  },
];

function initHeroSlider() {
  const root = qs("#hero");
  if (!root) return;

  root.innerHTML = `
    <div class="hero__viewport">
      <div class="hero__track">
        ${HERO_SLIDES.map(
          (s, i) => `
          <div class="hero__slide" style="background-image:url('${s.img}')" role="group"
               aria-roledescription="슬라이드" aria-label="${i + 1} / ${HERO_SLIDES.length}">
            <div class="container">
              <div class="hero__inner">
                <span class="hero__eyebrow">${s.eyebrow}</span>
                <h2 class="hero__title">${s.title}</h2>
                <p class="hero__desc">${s.desc}</p>
                <div class="hero__actions">
                  ${s.actions.map((a) => `<a href="${a.href}" class="btn btn--lg ${a.cls}">${a.label}</a>`).join("")}
                </div>
              </div>
            </div>
          </div>`
        ).join("")}
      </div>
    </div>
    <button type="button" class="hero__arrow hero__arrow--prev" aria-label="이전 배너">‹</button>
    <button type="button" class="hero__arrow hero__arrow--next" aria-label="다음 배너">›</button>
    <div class="hero__dots" role="tablist" aria-label="배너 선택">
      ${HERO_SLIDES.map(
        (_, i) => `<button type="button" class="hero__dot" role="tab" aria-label="${i + 1}번 배너" aria-current="${i === 0}"></button>`
      ).join("")}
    </div>`;

  const track = qs(".hero__track", root);
  const dots = qsa(".hero__dot", root);
  let index = 0;
  let timer = null;

  const go = (i) => {
    index = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.setAttribute("aria-current", String(di === index)));
  };
  const play = () => {
    stop();
    timer = setInterval(() => go(index + 1), 5000);
  };
  const stop = () => timer && clearInterval(timer);

  qs(".hero__arrow--next", root).addEventListener("click", () => { go(index + 1); play(); });
  qs(".hero__arrow--prev", root).addEventListener("click", () => { go(index - 1); play(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { go(i); play(); }));

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", play);

  // 터치 스와이프
  let startX = 0;
  let dragging = false;
  root.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dragging = true; stop(); }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    play();
  }, { passive: true });

  // 키보드 좌우 이동
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { go(index + 1); play(); }
    if (e.key === "ArrowLeft") { go(index - 1); play(); }
  });

  go(0);
  play();
}

/* --------------------------------------------------------------------------
   공용 컴포넌트: 강의 카드
   -------------------------------------------------------------------------- */
function courseCardHtml(lec) {
  const c = catOf(lec.cat);
  const f = fundInfo(lec);
  const flag =
    lec.badge === "new" ? '<span class="badge badge--new course-card__flag">NEW</span>'
    : lec.badge === "hot" ? '<span class="badge badge--accent course-card__flag">인기</span>'
    : lec.badge === "best" ? '<span class="badge badge--accent course-card__flag">BEST</span>'
    : "";

  return `
    <article class="course-card" style="position:relative">
      <div class="course-card__thumb">
        <img src="${thumbOf(lec)}" alt="${esc(lec.title)} 강의 대표 이미지" loading="lazy" width="400" height="300" />
        ${flag}
      </div>
      <div class="course-card__body">
        <div class="course-card__tags">
          <span class="badge">${c.icon} ${c.name}</span>
          <span class="badge ${f.cls}">${f.label}</span>
        </div>
        <h3 class="course-card__title">
          <a href="lecture-detail.html?id=${lec.id}">${esc(lec.title)}</a>
        </h3>
        ${lec.sponsor ? `<p class="course-card__sponsor">후원 ${esc(lec.sponsor)} (예시)</p>` : ""}
        <div class="course-card__meta">
          <span>📺 총 ${lec.lessons}강</span>
          <span>⏱ ${hoursText(totalMinutes(lec))}</span>
        </div>
        <div class="course-card__meta">
          <span class="rating">${starsHtml(lec.rating)} ${lec.rating.toFixed(1)}
            <span class="sr-only">5점 만점</span> (수혜 ${lec.students.toLocaleString("ko-KR")}명)</span>
        </div>
        <div class="course-card__foot">
          <div class="course-card__price">
            ${lec.fund === "self" ? "" : `<del>${won(lec.price)}</del>`}
            <strong>${f.cost}</strong>
          </div>
          <span class="btn btn--accent btn--sm" aria-hidden="true">교육신청</span>
        </div>
      </div>
    </article>`;
}

/* --------------------------------------------------------------------------
   탭 (공용) — [role=tablist] 기반
   -------------------------------------------------------------------------- */
function initTabs(root = document) {
  qsa("[data-tabs]", root).forEach((wrap) => {
    const tabs = qsa("[role=tab]", wrap);
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = qs("#" + t.getAttribute("aria-controls"), wrap);
        if (panel) panel.hidden = !on;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        select(next);
      });
    });
    select(tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0]);
  });
}

/* --------------------------------------------------------------------------
   아코디언 (공용)
   -------------------------------------------------------------------------- */
function initAccordion(root = document) {
  qsa(".accordion__btn", root).forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = qs("#" + btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      if (panel) panel.hidden = open;
    });
  });
}

/* --------------------------------------------------------------------------
   후기 슬라이더 (공용)
   -------------------------------------------------------------------------- */
function initReviewSlider() {
  const root = qs("#reviewSlider");
  if (!root) return;

  const track = qs(".review-track", root);
  track.innerHTML = REVIEWS.map(
    (r) => `
    <article class="review-card">
      <span class="rating">${starsHtml(r.rating)} ${r.rating}.0<span class="sr-only">5점 만점</span></span>
      <p class="review-card__text">“${esc(r.text)}”</p>
      <div class="review-card__user">
        <span class="review-card__avatar" aria-hidden="true">${r.name.charAt(0)}</span>
        <div>
          <p class="review-card__name">${esc(r.name)}</p>
          <p class="review-card__course">${esc(r.course)} 수료</p>
        </div>
      </div>
    </article>`
  ).join("");

  const prev = qs("[data-review-prev]");
  const next = qs("[data-review-next]");
  let page = 0;

  const perView = () => (window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3);
  const maxPage = () => Math.max(0, REVIEWS.length - perView());

  const update = () => {
    page = Math.min(page, maxPage());
    const card = qs(".review-card", track);
    if (!card) return;
    const step = card.getBoundingClientRect().width + 24;
    track.style.transform = `translateX(-${page * step}px)`;
    if (prev) prev.disabled = page === 0;
    if (next) next.disabled = page >= maxPage();
  };

  prev && prev.addEventListener("click", () => { page = Math.max(0, page - 1); update(); });
  next && next.addEventListener("click", () => { page = Math.min(maxPage(), page + 1); update(); });
  window.addEventListener("resize", update);

  // 터치 스와이프
  let startX = 0;
  track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
  track.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      page = dx < 0 ? Math.min(maxPage(), page + 1) : Math.max(0, page - 1);
      update();
    }
  }, { passive: true });

  update();
}

/* --------------------------------------------------------------------------
   메인 페이지
   -------------------------------------------------------------------------- */
function initHome() {
  if (document.body.dataset.page !== "home") return;

  // (3) 인기 강의 — 수강생 순 상위 8개
  const popular = qs("#popularCourses");
  if (popular) {
    popular.innerHTML = [...LECTURES]
      .sort((a, b) => b.students - a.students)
      .slice(0, 8)
      .map(courseCardHtml)
      .join("");
  }

  // (4) 카테고리별 과정안내 탭 (pqi.kr 방식 참고)
  const tabWrap = qs("#courseTabs");
  if (tabWrap) {
    const tabCats = CATEGORIES.filter((c) => lectureCount(c.id) >= 2).slice(0, 6);
    qs("[role=tablist]", tabWrap).innerHTML = tabCats
      .map(
        (c, i) => `<button type="button" class="tab" role="tab" id="ct-tab-${c.id}"
            aria-controls="ct-panel-${c.id}" aria-selected="${i === 0}">${c.icon} ${c.name}</button>`
      )
      .join("");
    qs("#courseTabPanels").innerHTML = tabCats
      .map(
        (c) => `<div class="tab-panel" id="ct-panel-${c.id}" role="tabpanel" aria-labelledby="ct-tab-${c.id}" hidden>
          <div class="grid grid--4">
            ${LECTURES.filter((l) => l.cat === c.id).slice(0, 4).map(courseCardHtml).join("")}
          </div>
          <div style="text-align:center;margin-top:32px">
            <a href="lecture.html?cat=${c.id}" class="btn btn--ghost">${c.name} 과정 전체보기 →</a>
          </div>
        </div>`
      )
      .join("");
  }

  // (5) 자격증 카테고리 그리드
  const catGrid = qs("#catGrid");
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map(
      (c) => `
      <a href="lecture.html?cat=${c.id}" class="cat-card">
        <span class="cat-card__icon" aria-hidden="true">${c.icon}</span>
        <span class="cat-card__name">${c.name}</span>
        <span class="cat-card__count">${lectureCount(c.id)}개 과정</span>
      </a>`
    ).join("");
  }

  // (7) 공지 / 소식 / 일정
  const noticeList = qs("#homeNotices");
  if (noticeList) {
    noticeList.innerHTML = NOTICES.map(
      (n) => `
      <li><a href="community.html#notice">
        <span class="notice-list__title">${esc(n.title)}</span>
        ${n.new ? '<span class="badge badge--new">N</span>' : ""}
        <span class="notice-list__date">${n.date}</span>
      </a></li>`
    ).join("");
  }

  const newsList = qs("#homeNews");
  if (newsList) {
    newsList.innerHTML = NEWS.map(
      (n) => `
      <li><a href="community.html#notice">
        <span class="notice-list__title">${esc(n.title)}</span>
        <span class="notice-list__date">${n.date}</span>
      </a></li>`
    ).join("");
  }

  const scheduleList = qs("#homeSchedules");
  if (scheduleList) {
    scheduleList.innerHTML = SCHEDULES.map(
      (s) => `
      <li><a href="community.html#notice">
        <span class="badge">${s.tag}</span>
        <span class="notice-list__title">${esc(s.title)}</span>
        <span class="notice-list__date">${s.date}</span>
      </a></li>`
    ).join("");
  }

  // 이벤트 배너
  const eventBox = qs("#homeEvents");
  if (eventBox) {
    eventBox.innerHTML = EVENTS.map(
      (e) => `
      <a href="community.html#event">
        <img src="https://placehold.co/560x160/${e.color}/ffffff?text=EVENT" alt="${esc(e.title)} 이벤트 배너" loading="lazy" width="560" height="160" />
      </a>`
    ).join("");
  }

  // (9) 통계 스트립
  const statGrid = qs("#statGrid");
  if (statGrid) {
    statGrid.innerHTML = STATS.map(
      (s) => `
      <div class="stat">
        <p class="stat__value">${s.value}<span class="unit">${s.unit}</span></p>
        <p class="stat__label">${s.label}</p>
      </div>`
    ).join("");
  }

  renderPartnerStrip("#partnerStrip");
  renderImpactCards("#impactCards");
}

/* --------------------------------------------------------------------------
   사회공헌 공용 렌더러 (index.html / csr.html 공용)
   -------------------------------------------------------------------------- */
function renderPartnerStrip(sel) {
  const host = qs(sel);
  if (!host) return;
  host.innerHTML = PARTNERS.map(
    (p) => `
    <li class="partner-card">
      <img src="https://placehold.co/200x80/f5f8fa/5b6b7b?text=LOGO" alt="${esc(p.name)} 로고 (예시 이미지)"
           loading="lazy" width="200" height="80" />
      <p class="partner-card__name">${esc(p.name)}</p>
      <p class="partner-card__meta">${p.since}년 ~ · ${esc(p.area)}</p>
    </li>`
  ).join("");
}

function renderImpactCards(sel) {
  const host = qs(sel);
  if (!host) return;
  host.innerHTML = IMPACT_CASES.map(
    (c) => `
    <article class="impact-card">
      <span class="badge badge--fund">${esc(c.partner)}</span>
      <h3 class="impact-card__title">${esc(c.title)}</h3>
      <p class="impact-card__period">🗓 ${c.period}</p>
      <p class="impact-card__people"><strong>${c.people.toLocaleString("ko-KR")}</strong>명 교육 수혜</p>
      <p class="impact-card__desc">${esc(c.desc)}</p>
    </article>`
  ).join("");
}

/* --------------------------------------------------------------------------
   사회공헌 페이지
   -------------------------------------------------------------------------- */
function initCsr() {
  if (document.body.dataset.page !== "csr") return;

  renderPartnerStrip("#csrPartners");
  renderImpactCards("#csrImpact");

  const statGrid = qs("#csrStats");
  if (statGrid) {
    statGrid.innerHTML = STATS.map(
      (s) => `
      <div class="stat">
        <p class="stat__value">${s.value}<span class="unit">${s.unit}</span></p>
        <p class="stat__label">${s.label}</p>
      </div>`
    ).join("");
  }

  // 후원 제안 문의 폼 (UI 데모)
  const form = qs("#csrForm");
  if (form) {
    const sel = qs("#csrInterest", form);
    if (sel) {
      sel.innerHTML =
        '<option value="">관심 분야를 선택하세요</option>' +
        [
          "교육비 후원 (과정 단위 지원)",
          "임직원 참여형 프로그램 (재능기부 강의)",
          "특정 대상 맞춤 사업 설계",
          "지역사회 연계 사업",
          "기타 협의 희망",
        ]
          .map((v) => `<option>${v}</option>`)
          .join("");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "데모 사이트입니다. 실제 제휴 문의는 접수되지 않습니다.\n" +
          `실제 운영 시 ${SITE.csr.email} / ${SITE.csr.tel} 로 연결됩니다.`
      );
    });
  }
}

/* --------------------------------------------------------------------------
   강의 목록 페이지
   -------------------------------------------------------------------------- */
function initLectureList() {
  const grid = qs("#lectureGrid");
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  let state = {
    cat: params.get("cat") || "all",
    fund: params.get("fund") || "all",
    sort: params.get("sort") || "popular",
    page: 1,
  };
  const PER_PAGE = 8;

  // 후원 지원 여부 필터
  const fundList = qs("#fundFilter");
  fundList.innerHTML = [
    { id: "all", label: "전체" },
    { id: "full", label: "💙 전액지원" },
    { id: "partial", label: "일부지원" },
    { id: "self", label: "자부담" },
  ]
    .map(
      (f) => `<li><button type="button" data-fund="${f.id}">${f.label}
        <span class="count">${f.id === "all" ? LECTURES.length : LECTURES.filter((l) => l.fund === f.id).length}</span>
      </button></li>`
    )
    .join("");

  // 카테고리 필터 목록
  const filterList = qs("#catFilter");
  filterList.innerHTML =
    `<li><button type="button" data-cat="all">전체 <span class="count">${LECTURES.length}</span></button></li>` +
    CATEGORIES.map(
      (c) => `<li><button type="button" data-cat="${c.id}">${c.icon} ${c.name} <span class="count">${lectureCount(c.id)}</span></button></li>`
    ).join("");

  const filtered = () => {
    let list = [...LECTURES];
    if (state.cat !== "all") list = list.filter((l) => l.cat === state.cat);
    if (state.fund !== "all") list = list.filter((l) => l.fund === state.fund);
    if (state.sort === "popular") list.sort((a, b) => b.students - a.students);
    else if (state.sort === "latest") list.sort((a, b) => b.date.localeCompare(a.date));
    else if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (state.sort === "cost") list.sort((a, b) => selfCost(a) - selfCost(b));
    return list;
  };

  const render = () => {
    const list = filtered();
    const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    state.page = Math.min(state.page, pages);
    const slice = list.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

    // 제목 / 개수
    const cur = state.cat === "all" ? null : catOf(state.cat);
    qs("#lectureTitle").textContent = cur ? `${cur.icon} ${cur.name} 과정` : "전체 자격과정";
    qs("#lectureCount").innerHTML = `총 <strong>${list.length}</strong>개 과정`;

    // 카드
    grid.innerHTML = slice.length
      ? slice.map(courseCardHtml).join("")
      : `<div class="empty-state" style="grid-column:1/-1">
           <p class="empty-state__icon" aria-hidden="true">🔍</p>
           <p>해당 카테고리에 등록된 과정이 없습니다.</p>
         </div>`;

    // 필터 활성화 상태
    qsa("#catFilter button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.cat === state.cat))
    );
    qsa("#fundFilter button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.fund === state.fund))
    );
    qsa("#sortTabs button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.sort === state.sort))
    );

    // 페이지네이션
    const pg = qs("#pagination");
    pg.innerHTML =
      `<button type="button" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""} aria-label="이전 페이지">‹</button>` +
      Array.from({ length: pages }, (_, i) =>
        `<button type="button" data-page="${i + 1}" ${i + 1 === state.page ? 'aria-current="page"' : ""}>${i + 1}</button>`
      ).join("") +
      `<button type="button" data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""} aria-label="다음 페이지">›</button>`;

    // URL 동기화 (링크 공유 · 뒤로가기 시 상태 유지)
    const q = new URLSearchParams();
    if (state.cat !== "all") q.set("cat", state.cat);
    if (state.fund !== "all") q.set("fund", state.fund);
    if (state.sort !== "popular") q.set("sort", state.sort);
    if (state.page > 1) q.set("page", state.page);
    history.replaceState(null, "", q.toString() ? `?${q}` : location.pathname);
  };

  filterList.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cat]");
    if (!b) return;
    state.cat = b.dataset.cat;
    state.page = 1;
    render();
  });

  fundList.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-fund]");
    if (!b) return;
    state.fund = b.dataset.fund;
    state.page = 1;
    render();
  });

  qs("#sortTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-sort]");
    if (!b) return;
    state.sort = b.dataset.sort;
    state.page = 1;
    render();
  });

  qs("#pagination").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-page]");
    if (!b || b.disabled) return;
    state.page = Number(b.dataset.page);
    render();
    qs("#lectureTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const p = Number(params.get("page"));
  if (p > 0) state.page = p;
  render();
}

/* --------------------------------------------------------------------------
   강의 상세 페이지
   -------------------------------------------------------------------------- */

/** 카테고리별 커리큘럼 제목 풀 — 강의 수만큼 결정적으로 생성 */
const CURRICULUM_POOL = {
  default: [
    "과정 오리엔테이션 및 학습 안내", "개념의 이해와 용어 정리", "이론적 배경과 역사", "주요 이론 ①",
    "주요 이론 ②", "관련 법규와 윤리", "대상자 이해하기", "의사소통의 기본 원리",
    "관찰과 기록의 방법", "사례 분석 ①", "사례 분석 ②", "평가 도구의 활용",
    "프로그램 기획의 기초", "프로그램 설계 실습", "현장 적용 사례 ①", "현장 적용 사례 ②",
    "문제 상황 대처법", "실무자 인터뷰", "관련 기관과 연계 방법", "보고서 작성법",
    "직업윤리와 책임", "안전 관리 수칙", "최신 동향과 이슈", "자격 취득 후 진로 설계",
    "실습 과제 리뷰 ①", "실습 과제 리뷰 ②", "종합 사례 연구", "핵심 요약 정리",
    "시험 대비 문제풀이 ①", "시험 대비 문제풀이 ②", "시험 대비 문제풀이 ③", "기출 유형 분석",
    "최종 점검 및 마무리", "수료 후 활동 안내",
  ],
};

function curriculumOf(lec) {
  const pool = CURRICULUM_POOL[lec.cat] || CURRICULUM_POOL.default;
  return Array.from({ length: lec.lessons }, (_, i) => ({
    no: i + 1,
    // 21~27분 사이를 결정적으로 배분 (새로고침해도 값이 바뀌지 않음)
    time: 21 + ((i * 7 + lec.id * 3) % 7),
    title: pool[i % pool.length],
  }));
}

function initLectureDetail() {
  const root = qs("#detailRoot");
  if (!root) return;

  const id = Number(new URLSearchParams(location.search).get("id")) || 3;
  const lec = LECTURES.find((l) => l.id === id) || LECTURES[2];
  const c = catOf(lec.cat);
  const mins = totalMinutes(lec);

  document.title = `${lec.title} · ${SITE.nameShort}`;

  // 히어로
  qs("#detailHero").innerHTML = `
    <div class="container">
      <div class="detail-hero__grid">
        <div>
          <ol class="breadcrumb">
            <li><a href="index.html">홈</a></li>
            <li><a href="lecture.html">강의</a></li>
            <li><a href="lecture.html?cat=${lec.cat}">${c.name}</a></li>
            <li aria-current="page">${esc(lec.title)}</li>
          </ol>
          <span class="badge">${c.icon} ${c.name}</span>
          <h1 class="detail-hero__title">${esc(lec.title)}</h1>
          <p class="detail-hero__desc">
            현장에서 바로 쓰이는 실무 중심 커리큘럼으로 구성된 100% 온라인 과정입니다.
            수료 후 <strong>${esc(lec.cert)}</strong> 자격증을 발급받을 수 있습니다. (예시)
          </p>
          <div class="detail-hero__meta">
            <span class="rating">${starsHtml(lec.rating)} ${lec.rating.toFixed(1)}<span class="sr-only">5점 만점</span></span>
            <span>👥 수강생 ${lec.students.toLocaleString("ko-KR")}명</span>
            <span>📺 총 ${lec.lessons}강</span>
            <span>⏱ ${hoursText(mins)}</span>
          </div>
        </div>
        <div class="detail-hero__img">
          <img src="${thumbOf(lec, 640, 420)}" alt="${esc(lec.title)} 강의 대표 이미지" width="640" height="420" />
        </div>
      </div>
    </div>`;

  // 신청 박스
  const f = fundInfo(lec);
  qs("#applyBox").innerHTML = `
    <span class="badge ${f.cls}">${f.label}</span>
    <p class="apply-box__price">
      ${lec.fund === "self" ? "" : `<del>교육비 상당액 ${won(lec.price)}</del>`}
      ${f.cost}
      <span class="apply-box__cost-note">${f.note}</span>
    </p>
    ${
      lec.sponsor
        ? `<p class="apply-box__sponsor">🤝 <strong>${esc(lec.sponsor)}</strong>의 사회공헌 기부금으로
             교육비가 지원되는 과정입니다. (예시)</p>`
        : `<p class="apply-box__sponsor apply-box__sponsor--none">이 과정은 현재 후원이 배정되지 않아 자부담으로 운영됩니다.
             기업 후원이 확정되면 지원 과정으로 전환됩니다. (예시)</p>`
    }
    <ul class="apply-box__list">
      <li><span class="k">총 강의 수</span><span class="v">${lec.lessons}강</span></li>
      <li><span class="k">총 수강 시간</span><span class="v">${hoursText(mins)}</span></li>
      <li><span class="k">수강 기간</span><span class="v">승인일로부터 3개월</span></li>
      <li><span class="k">수료 기준</span><span class="v">진도율 60% 이상<br />+ 시험 60점 이상</span></li>
      <li><span class="k">발급 자격증</span><span class="v">${esc(lec.cert)}</span></li>
      <li><span class="k">교육 운영</span><span class="v">${SITE.affiliate}</span></li>
    </ul>
    <div class="apply-box__actions">
      <button type="button" class="btn btn--accent btn--lg btn--block" data-demo>교육 신청하기</button>
      <a href="certificate.html#issue" class="btn btn--ghost btn--block">자격증 발급 안내</a>
      <a href="community.html#qna" class="btn btn--light btn--block">1:1 문의하기</a>
    </div>`;

  // 강의 정보 표
  qs("#infoTable").innerHTML = `
    <tbody>
      <tr><th scope="row">과정명</th><td>${esc(lec.title)}</td></tr>
      <tr><th scope="row">카테고리</th><td>${c.icon} ${c.name}</td></tr>
      <tr><th scope="row">교육비 지원</th><td>
        <strong>${f.label}</strong> — 수강생 부담 ${f.cost}
        ${lec.sponsor ? `<br />후원 : ${esc(lec.sponsor)} (예시)` : ""}
      </td></tr>
      <tr><th scope="row">교육 운영</th><td>${SITE.name} · ${SITE.affiliate} 공동 운영 (예시)</td></tr>
      <tr><th scope="row">총 강의 수</th><td>${lec.lessons}강 (강의당 21~27분)</td></tr>
      <tr><th scope="row">총 수강 시간</th><td>${hoursText(mins)}</td></tr>
      <tr><th scope="row">수강 기간</th><td>수강 승인일로부터 3개월 (기간 내 무제한 반복 수강)</td></tr>
      <tr><th scope="row">수료 기준</th><td>진도율 60% 이상 + 온라인 시험 60점 이상</td></tr>
      <tr><th scope="row">수강 환경</th><td>PC · 태블릿 · 모바일 (진도 자동 저장)</td></tr>
      <tr><th scope="row">발급 자격증</th><td>${esc(lec.cert)} · 민간자격 등록번호 ${SITE.certRegNo} (예시)</td></tr>
    </tbody>`;

  // 탭 1 — 강의 소개
  qs("#panel-intro").innerHTML = `
    <div class="prose">
      <h3>이런 분께 추천합니다</h3>
      <ul>
        <li>${c.name} 분야로 재취업 · 이직을 준비하는 분</li>
        <li>관련 자격증을 단기간에 취득하고 싶은 분</li>
        <li>기존 업무에 전문성을 더하고 싶은 현직자</li>
        <li>창업 · 부업 · 프리랜서 활동을 준비하는 분</li>
      </ul>

      <h3>과정 소개</h3>
      <p>
        「${esc(lec.title)}」은 이론과 실무를 균형 있게 다루는 ${lec.lessons}강 구성의 온라인 과정입니다.
        기초 개념부터 현장 사례, 시험 대비까지 순서대로 따라오면 자연스럽게 수료할 수 있도록 설계했습니다.
        모든 강의는 21~27분 내외로 짧게 나뉘어 있어 출퇴근 시간이나 자투리 시간에도 부담 없이 학습할 수 있습니다. (예시 설명)
      </p>

      <h3>학습 목표</h3>
      <ul>
        <li>${c.name} 분야의 핵심 이론과 용어를 정확히 이해한다</li>
        <li>실제 현장 사례를 분석하고 적절한 대응 방법을 설명할 수 있다</li>
        <li>대상자 특성에 맞는 프로그램을 기획하고 운영할 수 있다</li>
        <li>관련 법규와 직업윤리를 준수하며 실무를 수행할 수 있다</li>
      </ul>

      <h3>학습 방법</h3>
      <p>
        수강신청 후 즉시 학습이 시작되며, 진도는 자동으로 저장됩니다.
        진도율 60% 이상을 채우면 온라인 시험에 응시할 수 있고, 60점 이상 득점 시 수료 처리됩니다.
        수료 후에는 마이페이지에서 바로 자격증 발급을 신청할 수 있습니다. (예시 설명)
      </p>
    </div>`;

  // 탭 2 — 커리큘럼
  const cur = curriculumOf(lec);
  qs("#panel-curriculum").innerHTML = `
    <div class="curriculum">
      <div class="curriculum__head">
        <span>전체 ${cur.length}강</span>
        <span>총 ${hoursText(mins)}</span>
      </div>
      <ul>
        ${cur
          .map(
            (v) => `<li>
              <span class="curriculum__no">${v.no}강</span>
              <span class="curriculum__title">${esc(v.title)}</span>
              <span class="curriculum__time">${v.time}분</span>
            </li>`
          )
          .join("")}
      </ul>
    </div>`;

  // 탭 3 — 자격증 정보
  qs("#panel-cert").innerHTML = `
    <div class="prose">
      <h3>발급 자격증</h3>
      <table class="info-table">
        <tbody>
          <tr><th scope="row">자격증명</th><td>${esc(lec.cert)}</td></tr>
          <tr><th scope="row">등급</th><td>2급 (민간자격)</td></tr>
          <tr><th scope="row">발급기관</th><td>${SITE.name}</td></tr>
          <tr><th scope="row">민간자격 등록번호</th><td>${SITE.certRegNo} (예시 — 실제 등록번호로 교체 필요)</td></tr>
          <tr><th scope="row">검정 방법</th><td>온라인 필기시험 (객관식 40문항 / 60점 이상 합격)</td></tr>
          <tr><th scope="row">발급 비용</th><td>${
            lec.fund === "full"
              ? "0원 — 후원 기업의 기부금으로 발급비까지 지원됩니다 (예시)"
              : "50,000원 (예시)"
          }</td></tr>
          <tr><th scope="row">발급 기간</th><td>신청 후 영업일 기준 5~7일 (등기 발송)</td></tr>
        </tbody>
      </table>

      <h3>활용 분야 (예시)</h3>
      <ul>
        <li>관련 기관 · 센터 · 시설 취업 시 참고 자료</li>
        <li>기존 업무에서의 전문성 강화 및 사내 직무 활용</li>
        <li>지역 커뮤니티 · 평생학습관 강의 및 봉사 활동</li>
        <li>창업 · 프리랜서 활동 시 전문성 증빙 자료</li>
      </ul>

      <div class="notice-box">
        <ul>
          <li>본 자격은 <strong>국가공인 자격이 아닌 민간자격</strong>입니다.</li>
          <li>민간자격은 자격기본법에 따라 등록된 것으로, 국가로부터 인정받은 것이 아닙니다.</li>
          <li>자격증 취득이 취업을 보장하지 않으며, 취업 여부는 채용 기관의 기준에 따릅니다.</li>
        </ul>
      </div>
    </div>`;

  // 탭 4 — 환불 규정 / 수강 안내
  qs("#panel-refund").innerHTML = `
    <div class="accordion">
      <div class="accordion__item">
        <h3><button type="button" class="accordion__btn" aria-expanded="true" aria-controls="rf-1">환불 규정 (예시)</button></h3>
        <div class="accordion__panel" id="rf-1">
          <table class="info-table">
            <tbody>
              <tr><th scope="row">수강 시작 전</th><td>전액 환불</td></tr>
              <tr><th scope="row">진도율 10% 미만</th><td>수강료의 90% 환불</td></tr>
              <tr><th scope="row">진도율 10% ~ 50% 미만</th><td>수강료의 50% 환불</td></tr>
              <tr><th scope="row">진도율 50% 이상</th><td>환불 불가</td></tr>
              <tr><th scope="row">자격증 발급 후</th><td>환불 불가</td></tr>
            </tbody>
          </table>
          <p style="margin-top:12px">※ 환불 신청은 1:1 문의 또는 고객센터(${SITE.tel})로 접수해 주세요. 위 기준은 예시이며 실제 약관으로 교체해야 합니다.</p>
        </div>
      </div>
      <div class="accordion__item">
        <h3><button type="button" class="accordion__btn" aria-expanded="false" aria-controls="rf-2">수강 안내</button></h3>
        <div class="accordion__panel" id="rf-2" hidden>
          <ul>
            <li>수강 기간은 결제일로부터 3개월이며, 기간 내 반복 수강이 가능합니다.</li>
            <li>진도는 자동 저장되어 PC와 모바일에서 이어서 학습할 수 있습니다.</li>
            <li>진도율 60% 이상을 채우면 온라인 시험에 응시할 수 있습니다.</li>
            <li>시험은 기간 내 최대 3회까지 재응시할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div class="accordion__item">
        <h3><button type="button" class="accordion__btn" aria-expanded="false" aria-controls="rf-3">수강 환경</button></h3>
        <div class="accordion__panel" id="rf-3" hidden>
          <ul>
            <li>권장 브라우저 : Chrome, Edge, Safari 최신 버전</li>
            <li>모바일 : iOS 14 이상 / Android 10 이상</li>
            <li>인터넷 연결이 필요하며, 데이터 사용량은 강의당 약 100MB입니다. (예시)</li>
          </ul>
        </div>
      </div>
    </div>`;

  // 연관 추천 강의 4개
  const related = LECTURES.filter((l) => l.cat === lec.cat && l.id !== lec.id).slice(0, 4);
  const fill = LECTURES.filter((l) => l.cat !== lec.cat && l.badge)
    .sort((a, b) => b.students - a.students)
    .slice(0, 4 - related.length);
  qs("#relatedCourses").innerHTML = [...related, ...fill].map(courseCardHtml).join("");
  // 탭·아코디언 초기화는 부팅 마지막의 initTabs()/initAccordion()이 일괄 처리한다.
}

/* --------------------------------------------------------------------------
   커뮤니티 페이지 — 공지 게시판 / 후기
   -------------------------------------------------------------------------- */
function initCommunity() {
  const board = qs("#noticeBoard");
  if (board) {
    const all = [...NOTICES, ...NEWS.map((n, i) => ({ id: 100 + i, title: n.title, date: n.date, views: 300 + i * 47 }))];
    board.innerHTML = all
      .map(
        (n, i) => `
        <tr>
          <td class="num">${all.length - i}</td>
          <td class="subject">
            <a href="#" data-demo>${esc(n.title)}</a>
            ${n.new ? '<span class="badge badge--new">N</span>' : ""}
          </td>
          <td class="date">${n.date}</td>
          <td class="views">${n.views.toLocaleString("ko-KR")}</td>
        </tr>`
      )
      .join("");
  }

  const reviewList = qs("#reviewList");
  if (reviewList) {
    reviewList.innerHTML = REVIEWS.map(
      (r, i) => `
      <article class="review-item">
        <div class="review-item__head">
          <span class="rating">${starsHtml(r.rating)} ${r.rating}.0<span class="sr-only">5점 만점</span></span>
          <span class="badge">${esc(r.course)}</span>
        </div>
        <p class="review-item__text">${esc(r.text)}</p>
        <div class="review-item__foot">
          <span>${esc(r.name)}</span>
          <span aria-hidden="true">·</span>
          <span>2026-0${(i % 6) + 1}-1${i % 9}</span>
        </div>
      </article>`
    ).join("");
  }

  const eventGrid = qs("#eventGrid");
  if (eventGrid) {
    eventGrid.innerHTML = EVENTS.map(
      (e) => `
      <article class="card">
        <img src="https://placehold.co/560x200/${e.color}/ffffff?text=EVENT" alt="${esc(e.title)} 이벤트 이미지"
             style="border-radius:8px;margin-bottom:16px" loading="lazy" width="560" height="200" />
        <h3 style="font-size:1.1rem;font-weight:700">${esc(e.title)}</h3>
        <p style="color:var(--color-text-soft);margin-top:6px">${esc(e.desc)}</p>
      </article>`
    ).join("");
  }

  // 1:1 문의 폼 (UI 데모)
  const qnaForm = qs("#qnaForm");
  if (qnaForm) {
    const catSel = qs("#qnaCat", qnaForm);
    if (catSel) {
      catSel.innerHTML =
        '<option value="">문의 유형을 선택하세요</option>' +
        ["수강신청 · 결제", "학습 · 진도", "시험 · 수료", "자격증 발급", "환불", "기타"]
          .map((v) => `<option>${v}</option>`)
          .join("");
    }
    qnaForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("데모 사이트입니다. 실제 문의는 접수되지 않습니다.\n(서버 연동 시 정상 동작합니다.)");
    });
  }
}

/* --------------------------------------------------------------------------
   자격증 페이지 — 발급조회 폼 + 자격증 목록
   -------------------------------------------------------------------------- */
function initCertificate() {
  const certList = qs("#certList");
  if (certList) {
    certList.innerHTML = LECTURES.map(
      (l) => `
      <li>
        <a href="lecture-detail.html?id=${l.id}" class="cert-item">
          <span class="cert-item__icon" aria-hidden="true">${catOf(l.cat).icon}</span>
          <span>
            <span class="cert-item__name">${esc(l.cert)}</span>
            <span class="cert-item__no">등록번호 ${SITE.certRegNo} (예시) · ${catOf(l.cat).name}</span>
          </span>
        </a>
      </li>`
    ).join("");
  }

  const issueForm = qs("#issueForm");
  if (issueForm) {
    issueForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const result = qs("#issueResult");
      result.hidden = false;
      result.textContent =
        "데모 사이트입니다. 실제 발급 시스템 연동 시 조회 결과가 표시됩니다. (입력값은 전송되지 않습니다.)";
      result.focus();
    });
  }
}

/* --------------------------------------------------------------------------
   부팅
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderFloating();
  initMobileNav();
  initDemoLinks();

  initHeroSlider();
  initReviewSlider();

  // 페이지별 렌더링을 먼저 끝낸 뒤 공용 컴포넌트를 초기화해야 한다.
  // (initHome이 만들어내는 탭에도 이벤트가 붙어야 하므로 순서를 바꾸면 안 됨)
  initHome();
  initCsr();
  initLectureList();
  initLectureDetail();
  initCommunity();
  initCertificate();

  initTabs();
  initAccordion();
});
