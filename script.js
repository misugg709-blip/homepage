/* ===== 데이터 ===== */
const PROGRAMS = [
  { rank:1, name:"당첨의신 AI", type:"ai", paid:true, price:"월 19,900원", stars:4.9, reviews:2841,
    desc:"머신러닝으로 역대 당첨 패턴을 분석해 고확률 조합을 추천하는 프리미엄 프로그램.",
    features:["AI 패턴 분석","제외수 자동 필터","당첨 시뮬레이션"], tags:["AI 분석","유료"] },
  { rank:2, name:"로또메이트 프로", type:"paid", paid:true, price:"월 9,900원", stars:4.7, reviews:1990,
    desc:"통계 기반 번호 추천과 자동 구매 연동을 지원하는 국민 로또 프로그램.",
    features:["통계 추천","자동 구매 연동","당첨 알림"], tags:["유료"] },
  { rank:3, name:"무료로또박스", type:"free", paid:false, price:"무료", stars:4.5, reviews:5120,
    desc:"가입 없이 바로 쓰는 무료 번호 생성 & 통계 조회 서비스. 광고 기반 운영.",
    features:["완전 무료","출현 통계 제공","설치 불필요"], tags:["무료"] },
  { rank:4, name:"빅데이터 로또랩", type:"ai", paid:true, price:"월 14,900원", stars:4.6, reviews:1345,
    desc:"빅데이터와 확률 모델을 결합해 조합별 기대값을 시각화해주는 분석 도구.",
    features:["기대값 분석","AI 조합 추천","엑셀 내보내기"], tags:["AI 분석","유료"] },
  { rank:5, name:"행운번호 무료판", type:"free", paid:false, price:"무료", stars:4.2, reviews:3260,
    desc:"간단한 랜덤·반자동 번호 생성에 특화된 가벼운 무료 웹앱.",
    features:["원클릭 생성","즐겨찾기 저장","모바일 최적화"], tags:["무료"] },
  { rank:6, name:"프로 분석가 스위트", type:"paid", paid:true, price:"월 24,900원", stars:4.8, reviews:870,
    desc:"전문가용 고급 필터와 조건 검색을 제공하는 파워 유저 전용 프로그램.",
    features:["50+ 필터 조건","조합 백테스트","우선 고객지원"], tags:["유료"] }
];
const FAQS = [
  { q:"로또당첨프로그램을 쓰면 정말 당첨 확률이 오르나요?", a:"프로그램은 통계·패턴 분석으로 조합 선택을 도와줄 뿐, 당첨을 보장하지 않습니다. 로또는 근본적으로 확률 게임입니다." },
  { q:"무료 프로그램과 유료 프로그램의 차이는 무엇인가요?", a:"무료는 기본 번호 생성과 통계 조회를 제공하고, 유료는 AI 분석·자동 구매 연동·상세 필터 등 고급 기능을 제공합니다." },
  { q:"'통계 가중치' 모드는 어떻게 작동하나요?", a:"역대 출현 빈도가 높은 번호에 약간 더 높은 선택 확률을 부여하는 방식입니다. 재미 요소이며 실제 당첨 확률과는 무관합니다." },
  { q:"이 사이트에서 실제로 로또를 구매할 수 있나요?", a:"아니요. 본 사이트는 정보 제공용 데모입니다. 실제 구매는 동행복권 등 공식 판매처를 이용하세요." }
];

function ballColor(n){ if(n<=10)return"#fbc400"; if(n<=20)return"#69c8f2"; if(n<=30)return"#ff7272"; if(n<=40)return"#888c94"; return"#b0d840"; }
const FREQ = Array.from({length:45},(_,i)=>40+Math.round(Math.abs(Math.sin(i*1.3))*60));

function makeBall(n, cls=""){ const b=document.createElement("div"); b.className="ball "+cls; b.style.background=ballColor(n); b.textContent=n; return b; }

/* ===== 프로그램 ===== */
const grid = document.getElementById("programGrid");
function renderPrograms(filter="all"){
  grid.innerHTML="";
  PROGRAMS.filter(p=> filter==="all" ? true : filter==="free" ? !p.paid : filter==="paid" ? p.paid : p.type==="ai")
  .forEach(p=>{
    const fs=Math.floor(p.stars); const stars="★".repeat(fs)+"☆".repeat(5-fs);
    const c=document.createElement("div"); c.className="card";
    c.innerHTML=`<span class="rank">TOP ${p.rank}</span>
      <h3>${p.name} ${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</h3>
      <div class="stars">${stars} ${p.stars.toFixed(1)} <small>(리뷰 ${p.reviews.toLocaleString()})</small></div>
      <p class="desc">${p.desc}</p>
      <ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>
      <div class="price">${p.price} <small>${p.paid?"부가세 포함":"· 광고 지원"}</small></div>
      <button class="btn btn-primary demo-btn">자세히 보기</button>`;
    grid.appendChild(c);
  });
  grid.querySelectorAll(".demo-btn").forEach(b=>b.addEventListener("click",()=>alert("데모 사이트입니다. 실제 링크는 연결되어 있지 않습니다.")));
}
renderPrograms();
document.querySelectorAll(".chip").forEach(ch=>ch.addEventListener("click",()=>{
  document.querySelector(".chip.active").classList.remove("active");
  ch.classList.add("active"); renderPrograms(ch.dataset.filter);
}));

/* ===== 번호 생성기 ===== */
function pickNumbers(mode){
  const pool=[];
  for(let n=1;n<=45;n++){ const w=mode==="stats"?FREQ[n-1]:1; for(let k=0;k<w;k++)pool.push(n); }
  const s=new Set();
  while(s.size<6) s.add(pool[Math.floor(Math.random()*pool.length)]);
  return [...s].sort((a,b)=>a-b);
}
const genResult = document.getElementById("genResult");
const GEN_SETS = 5; // 한 번에 5세트 동시 생성
document.getElementById("genBtn").addEventListener("click",()=>{
  const mode=document.querySelector('input[name="genMode"]:checked').value;
  genResult.innerHTML="";
  for(let s=0;s<GEN_SETS;s++){
    const nums=pickNumbers(mode);
    const line=document.createElement("div"); line.className="gen-line";
    const label=document.createElement("span"); label.className="set-label"; label.textContent=String.fromCharCode(65+s); // A~E
    const set=document.createElement("div"); set.className="ball-set";
    nums.forEach((n,i)=>{ const b=makeBall(n); b.style.animationDelay=`${(s*6+i)*0.05}s`; set.appendChild(b); });
    const actions=document.createElement("div"); actions.className="mini-actions";
    const simBtn=document.createElement("button"); simBtn.className="icon-btn"; simBtn.textContent="🎰 모의추첨";
    simBtn.addEventListener("click",()=>runSimulation(nums));
    const saveBtn=document.createElement("button"); saveBtn.className="icon-btn"; saveBtn.textContent="⭐ 저장";
    saveBtn.addEventListener("click",()=>saveSet(nums));
    actions.append(simBtn, saveBtn);
    line.append(label, set, actions);
    genResult.appendChild(line);
  }
});

/* ===== 내 번호 저장함 (localStorage) ===== */
const SAVE_KEY="chunun_saved_sets";
const savedBox=document.getElementById("savedBox");
const savedList=document.getElementById("savedList");
const savedCount=document.getElementById("savedCount");
function loadSaved(){ try{ return JSON.parse(localStorage.getItem(SAVE_KEY))||[]; }catch(e){ return []; } }
function persist(list){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(list)); }catch(e){} }
function saveSet(nums){
  const list=loadSaved();
  if(list.some(s=>s.join(",")===nums.join(","))){ alert("이미 저장된 번호입니다."); return; }
  list.unshift(nums); persist(list); renderSaved();
}
function renderSaved(){
  const list=loadSaved();
  savedCount.textContent=list.length;
  savedBox.hidden = list.length===0;
  savedList.innerHTML="";
  list.forEach((nums,idx)=>{
    const item=document.createElement("div"); item.className="saved-item";
    const set=document.createElement("div"); set.className="ball-set";
    nums.forEach(n=>set.appendChild(makeBall(n,"sm")));
    const actions=document.createElement("div"); actions.className="mini-actions";
    const simBtn=document.createElement("button"); simBtn.className="icon-btn"; simBtn.textContent="🎰";
    simBtn.title="모의추첨"; simBtn.addEventListener("click",()=>runSimulation(nums));
    const del=document.createElement("button"); del.className="icon-btn"; del.textContent="🗑";
    del.title="삭제"; del.addEventListener("click",()=>{ const l=loadSaved(); l.splice(idx,1); persist(l); renderSaved(); });
    actions.append(simBtn, del);
    item.append(set, actions);
    savedList.appendChild(item);
  });
}
document.getElementById("clearSaved").addEventListener("click",()=>{
  if(confirm("저장된 번호를 모두 삭제할까요?")){ persist([]); renderSaved(); }
});
renderSaved();

/* ===== 모의추첨 시뮬레이터 ===== */
const modal=document.getElementById("simModal");
function drawWinning(){
  const s=new Set(); while(s.size<7) s.add(1+Math.floor(Math.random()*45));
  const all=[...s]; return { win:all.slice(0,6).sort((a,b)=>a-b), bonus:all[6] };
}
function judge(mine, win, bonus){
  const hit=mine.filter(n=>win.includes(n)).length;
  const hasBonus=mine.includes(bonus);
  if(hit===6) return {rank:"🎉 1등 당첨!", win:true};
  if(hit===5 && hasBonus) return {rank:"🥈 2등 당첨!", win:true};
  if(hit===5) return {rank:"🥉 3등 당첨!", win:true};
  if(hit===4) return {rank:"4등 당첨", win:true};
  if(hit===3) return {rank:"5등 당첨", win:true};
  return {rank:"😢 낙첨", win:false};
}
function runSimulation(mine){
  const {win, bonus}=drawWinning();
  const res=judge(mine, win, bonus);
  const mineEl=document.getElementById("simMine"); const winEl=document.getElementById("simWin");
  mineEl.innerHTML=""; winEl.innerHTML="";
  mine.forEach(n=>{ const b=makeBall(n,"sm"); if(win.includes(n)||n===bonus)b.classList.add("hit"); mineEl.appendChild(b); });
  win.forEach(n=>winEl.appendChild(makeBall(n,"sm")));
  const plus=document.createElement("span"); plus.textContent="+"; plus.style.fontWeight="800"; plus.style.color="var(--text-soft)"; winEl.appendChild(plus);
  winEl.appendChild(makeBall(bonus,"sm"));
  const hit=mine.filter(n=>win.includes(n)).length;
  const result=document.getElementById("simResult");
  result.className="sim-result"+(res.win?" win":"");
  result.innerHTML=`<span class="rank">${res.rank}</span>일치 ${hit}개${mine.includes(bonus)?" + 보너스":""}`;
  modal.hidden=false;
}
modal.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>modal.hidden=true));
document.addEventListener("keydown",e=>{ if(e.key==="Escape") modal.hidden=true; });

/* ===== 출현 통계 ===== */
const chart=document.getElementById("statChart"); const maxF=Math.max(...FREQ);
FREQ.forEach((f,i)=>{ const bar=document.createElement("div"); bar.className="bar";
  bar.style.height=`${(f/maxF)*100}%`;
  bar.innerHTML=`<span>${i+1}</span><div class="tip">${i+1}번 · ${f}회</div>`; chart.appendChild(bar); });

/* ===== 히어로 미니볼 ===== */
const mini=document.getElementById("miniBalls");
[3,11,17,24,33,42,7,28,45,15,20,38].forEach((n,i)=>{ const b=document.createElement("div"); b.className="mb";
  b.style.background=ballColor(n); b.style.animationDelay=`${i*0.18}s`; mini.appendChild(b); });

/* ===== 다음 추첨 카운트다운 (매주 토 20:35) ===== */
const cdEl=document.getElementById("countdown");
function nextDraw(){
  const now=new Date();
  const d=new Date(now);
  d.setHours(20,35,0,0);
  // 0=일 ... 6=토. 토요일까지 남은 일수
  let add=(6 - now.getDay() + 7) % 7;
  if(add===0 && now.getTime() > d.getTime()) add=7; // 이미 토요일 추첨 지남
  d.setDate(now.getDate()+add);
  return d;
}
function tick(){
  const diff=nextDraw().getTime() - Date.now();
  if(diff<=0){ cdEl.textContent="추첨 진행 중…"; return; }
  const s=Math.floor(diff/1000);
  const dd=Math.floor(s/86400), hh=Math.floor(s%86400/3600), mm=Math.floor(s%3600/60), ss=s%60;
  const p=x=>String(x).padStart(2,"0");
  cdEl.textContent = (dd>0?`${dd}일 `:"") + `${p(hh)}:${p(mm)}:${p(ss)}`;
}
tick(); setInterval(tick,1000);

/* ===== FAQ ===== */
const faqList=document.getElementById("faqList");
FAQS.forEach(it=>{ const el=document.createElement("div"); el.className="faq-item";
  el.innerHTML=`<button class="faq-q" aria-expanded="false">${it.q} <span class="icon">＋</span></button><div class="faq-a"><p>${it.a}</p></div>`;
  const q=el.querySelector(".faq-q");
  q.addEventListener("click",()=>{ const open=el.classList.toggle("open"); q.setAttribute("aria-expanded",open); });
  faqList.appendChild(el); });

/* ===== 카운트업 ===== */
function countUp(el,target,suffix=""){ let cur=0; const step=target/60;
  const t=setInterval(()=>{ cur+=step; if(cur>=target){cur=target;clearInterval(t);} el.textContent=Math.floor(cur).toLocaleString()+suffix; },20); }
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){
  countUp(document.getElementById("statPrograms"),6);
  countUp(document.getElementById("statUsers"),128000);
  countUp(document.getElementById("statRate"),96,"%"); io.disconnect(); } }));
io.observe(document.querySelector(".hero-stats"));

/* ===== 테마 ===== */
const toggle=document.getElementById("themeToggle");
function setIcon(){ toggle.textContent = document.documentElement.getAttribute("data-theme")==="dark" ? "☀️" : "🌙"; }
(function(){ try{ const s=localStorage.getItem("theme"); if(s) document.documentElement.setAttribute("data-theme",s); }catch(e){} setIcon(); })();
toggle.addEventListener("click",()=>{
  const dark=document.documentElement.getAttribute("data-theme")==="dark";
  const next=dark?"light":"dark"; document.documentElement.setAttribute("data-theme",next);
  try{ localStorage.setItem("theme",next); }catch(e){} setIcon();
});
