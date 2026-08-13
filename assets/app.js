/* =========================================================
   COD Reseller Theme — mockup runtime
   - review toolbar (page nav, AR/FR, desktop/mobile)
   - 58 wilayas + communes + home/stopdesk rate table
   - live COD total calculation (no page reload)
   Placeholder rates — to be replaced by the client's real table.
   ========================================================= */

/* ---------- 1. Wilaya table -----------------------------------------
   [code, name_ar, name_fr, home_price, stopdesk_price, [communes]]      */
const WILAYAS = [
[1,"أدرار","Adrar",1200,750,["Adrar","Reggane","Aoulef","Timiaouine"]],
[2,"الشلف","Chlef",600,350,["Chlef","Ténès","Oued Fodda","Boukadir"]],
[3,"الأغواط","Laghouat",750,450,["Laghouat","Aflou","Ksar El Hirane"]],
[4,"أم البواقي","Oum El Bouaghi",600,350,["Oum El Bouaghi","Aïn Beïda","Aïn M'lila"]],
[5,"باتنة","Batna",600,350,["Batna","Barika","Merouana","Arris"]],
[6,"بجاية","Béjaïa",550,300,["Béjaïa","Akbou","El Kseur","Tichy"]],
[7,"بسكرة","Biskra",700,400,["Biskra","Tolga","Ouled Djellal","Sidi Okba"]],
[8,"بشار","Béchar",1100,700,["Béchar","Kenadsa","Abadla","Taghit"]],
[9,"البليدة","Blida",450,250,["Blida","Boufarik","Ouled Yaïch","Larbaâ"]],
[10,"البويرة","Bouira",550,300,["Bouira","Lakhdaria","Sour El Ghozlane","M'Chedallah"]],
[11,"تمنراست","Tamanrasset",1400,900,["Tamanrasset","Abalessa","In Amguel"]],
[12,"تبسة","Tébessa",700,400,["Tébessa","Bir el Ater","Cheria","El Ogla"]],
[13,"تلمسان","Tlemcen",650,400,["Tlemcen","Maghnia","Ghazaouet","Remchi"]],
[14,"تيارت","Tiaret",650,380,["Tiaret","Sougueur","Frenda","Mahdia"]],
[15,"تيزي وزو","Tizi Ouzou",500,300,["Tizi Ouzou","Azazga","Draa Ben Khedda","Tigzirt"]],
[16,"الجزائر","Alger",400,200,["Alger Centre","Bab Ezzouar","Birtouta","Dar El Beïda","Hussein Dey","Chéraga"]],
[17,"الجلفة","Djelfa",700,420,["Djelfa","Aïn Oussera","Messaad","Hassi Bahbah"]],
[18,"جيجل","Jijel",600,350,["Jijel","Taher","El Milia","Chekfa"]],
[19,"سطيف","Sétif",550,300,["Sétif","El Eulma","Aïn Oulmene","Bougaa"]],
[20,"سعيدة","Saïda",700,400,["Saïda","Aïn El Hadjar","Ouled Brahim"]],
[21,"سكيكدة","Skikda",600,350,["Skikda","Collo","Azzaba","El Harrouch"]],
[22,"سيدي بلعباس","Sidi Bel Abbès",650,380,["Sidi Bel Abbès","Telagh","Sfisef","Ben Badis"]],
[23,"عنابة","Annaba",600,350,["Annaba","El Bouni","Berrahal","El Hadjar"]],
[24,"قالمة","Guelma",600,350,["Guelma","Oued Zenati","Bouchegouf","Héliopolis"]],
[25,"قسنطينة","Constantine",550,320,["Constantine","El Khroub","Aïn Smara","Hamma Bouziane"]],
[26,"المدية","Médéa",550,320,["Médéa","Berrouaghia","Ksar El Boukhari","Tablat"]],
[27,"مستغانم","Mostaganem",600,350,["Mostaganem","Aïn Tédelès","Sidi Ali","Hassi Mameche"]],
[28,"المسيلة","M'Sila",650,380,["M'Sila","Bou Saâda","Sidi Aïssa","Aïn El Melh"]],
[29,"معسكر","Mascara",650,380,["Mascara","Sig","Mohammadia","Tighennif"]],
[30,"ورقلة","Ouargla",900,600,["Ouargla","Hassi Messaoud","Touggourt Rte","N'Goussa"]],
[31,"وهران","Oran",550,300,["Oran","Es Sénia","Bir El Djir","Arzew","Aïn El Turk"]],
[32,"البيض","El Bayadh",900,600,["El Bayadh","Bougtoub","Brezina"]],
[33,"إليزي","Illizi",1400,900,["Illizi","In Amenas","Debdeb"]],
[34,"برج بوعريريج","Bordj Bou Arréridj",550,320,["Bordj Bou Arréridj","Ras El Oued","El Achir","Mansoura"]],
[35,"بومرداس","Boumerdès",450,250,["Boumerdès","Boudouaou","Dellys","Bordj Menaïel"]],
[36,"الطارف","El Tarf",650,380,["El Tarf","El Kala","Bouhadjar","Dréan"]],
[37,"تندوف","Tindouf",1400,900,["Tindouf","Oum El Assel"]],
[38,"تيسمسيلت","Tissemsilt",700,400,["Tissemsilt","Théniet El Had","Bordj Bou Naama"]],
[39,"الوادي","El Oued",850,550,["El Oued","Guemar","Debila","Robbah"]],
[40,"خنشلة","Khenchela",700,400,["Khenchela","Kais","Chechar"]],
[41,"سوق أهراس","Souk Ahras",650,380,["Souk Ahras","Sedrata","M'Daourouch"]],
[42,"تيبازة","Tipaza",450,250,["Tipaza","Koléa","Cherchell","Hadjout"]],
[43,"ميلة","Mila",600,350,["Mila","Chelghoum Laïd","Ferdjioua","Grarem"]],
[44,"عين الدفلى","Aïn Defla",550,320,["Aïn Defla","Khemis Miliana","Miliana","El Attaf"]],
[45,"النعامة","Naâma",950,600,["Naâma","Mécheria","Aïn Sefra"]],
[46,"عين تموشنت","Aïn Témouchent",650,380,["Aïn Témouchent","Hammam Bou Hadjar","Beni Saf"]],
[47,"غرداية","Ghardaïa",850,550,["Ghardaïa","Metlili","Berriane","El Guerrara"]],
[48,"غليزان","Relizane",650,380,["Relizane","Oued Rhiou","Zemmoura","Mazouna"]],
[49,"تيميمون","Timimoun",1300,850,["Timimoun","Aougrout","Charouine"]],
[50,"برج باجي مختار","Bordj Badji Mokhtar",1500,950,["Bordj Badji Mokhtar","Timiaouine"]],
[51,"أولاد جلال","Ouled Djellal",800,500,["Ouled Djellal","Sidi Khaled","Doucen"]],
[52,"بني عباس","Béni Abbès",1300,850,["Béni Abbès","Igli","Kerzaz"]],
[53,"عين صالح","In Salah",1400,900,["In Salah","Foggaret Ezzoua"]],
[54,"عين قزام","In Guezzam",1500,950,["In Guezzam","Tin Zaouatine"]],
[55,"تقرت","Touggourt",900,600,["Touggourt","Témacine","Megarine","Nezla"]],
[56,"جانت","Djanet",1500,950,["Djanet","Bordj El Haouas"]],
[57,"المغير","El M'Ghair",850,550,["El M'Ghair","Djamaa","Sidi Khelil"]],
[58,"المنيعة","El Meniaa",950,620,["El Meniaa","Hassi Gara"]]
];

/* ---------- 1b. Icon set ---------------------------------------------
   Stroked SVG symbols injected once per page and referenced with
   <svg class="i"><use href="#i-truck"></use></svg>. No emoji anywhere:
   emoji render differently on every device and read as clip-art.       */
const ICONS = {
  truck:'<path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H14v10H4.5A1.5 1.5 0 0 1 3 14.5z"/><path d="M14 9.5h3.6a2 2 0 0 1 1.7 1l1.7 2.8V16h-7z"/><circle cx="7.5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  cash:'<rect x="2.5" y="6" width="19" height="12" rx="2.2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/>',
  ret:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4.5V10h5.5"/>',
  phone:'<path d="M6.2 3.5h3l1.6 4-2 1.3a12 12 0 0 0 5.4 5.4l1.3-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7 2 2 0 0 1 6.2 3.5z"/>',
  star:'<path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9z"/>',
  bolt:'<path d="M13.3 2.5L4.8 13.2h6.1l-.9 8.3 8.8-10.8h-6.3z"/>',
  shield:'<path d="M12 2.8l7.4 3v5.4c0 4.3-3 8.2-7.4 9.6-4.4-1.4-7.4-5.3-7.4-9.6V5.8z"/><path d="M9 12l2.1 2.2L15.4 10"/>',
  search:'<circle cx="10.8" cy="10.8" r="6.3"/><path d="M15.5 15.5l4.3 4.3"/>',
  cart:'<circle cx="9.5" cy="19.5" r="1.6"/><circle cx="17.5" cy="19.5" r="1.6"/><path d="M2.6 3.5h2.6l2.4 11.2h11L20.9 7H6.4"/>',
  form:'<rect x="4" y="2.8" width="16" height="18.4" rx="2.4"/><path d="M8 8h8M8 12h8M8 16h4.5"/>',
  lock:'<rect x="4.5" y="10.2" width="15" height="10.3" rx="2.3"/><path d="M8 10.2V7.6a4 4 0 0 1 8 0v2.6"/>',
  info:'<circle cx="12" cy="12" r="9.2"/><path d="M12 11.2v5.2M12 7.8v.4"/>',
  key:'<circle cx="8.2" cy="15.8" r="4.3"/><path d="M11.3 12.7L20 4M17 7l2.4 2.4M14.6 9.4l2.4 2.4"/>',
  box:'<path d="M3.2 7.6L12 3l8.8 4.6v8.8L12 21l-8.8-4.6z"/><path d="M3.2 7.6L12 12.2l8.8-4.6M12 12.2V21"/>',
  file:'<path d="M14 2.9H7.4a2 2 0 0 0-2 2v14.2a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V7.6z"/><path d="M14 2.9v4.7h4.6"/><path d="M8.8 13h6.4M8.8 16.5h4.4"/>',
  receipt:'<path d="M5 2.9h14v18.2l-2.3-1.5-2.3 1.5-2.4-1.5-2.3 1.5-2.4-1.5L5 21.1z"/><path d="M9 8h6M9 12h6"/>',
  check:'<path d="M4.5 12.5l5 5 10-11"/>',
  checkCircle:'<circle cx="12" cy="12" r="9.2"/><path d="M8 12.3l2.7 2.7L16.2 9.5"/>',
  alert:'<path d="M12 3.4l9 15.6H3z"/><path d="M12 9.4v4.3M12 16.6v.3"/>',
  ban:'<circle cx="12" cy="12" r="9.2"/><path d="M5.6 5.6l12.8 12.8"/>',
  clock:'<circle cx="12" cy="12" r="9.2"/><path d="M12 6.9V12l3.4 2"/>',
  store:'<path d="M4 9.6V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.6"/><path d="M3 9.6L4.8 4h14.4L21 9.6a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/>',
  home:'<path d="M3.6 10.4L12 3.4l8.4 7"/><path d="M5.6 12v8.4h12.8V12"/><path d="M10 20.4v-5.2h4v5.2"/>',
  arrow:'<path d="M4.5 12h14.2"/><path d="M13.4 6.6l5.3 5.4-5.3 5.4"/>',
  chev:'<path d="M8.5 4.8l7 7.2-7 7.2"/>',
  grid:'<rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.4"/><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.4"/><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.4"/><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.4"/>',
  brush:'<path d="M4 16.5c2.4-.6 3.4.4 3 3-2.3 1-4 .1-3-3z"/><path d="M7.6 17.2L17.4 7.4a2.3 2.3 0 0 0-3.2-3.2L4.4 14"/>',
  gear:'<circle cx="12" cy="12" r="3.1"/><path d="M12 2.8l1.3 2.4 2.7-.5 1 2.6 2.5 1.1-.9 2.6 1.7 2.1-1.7 2.1.9 2.6-2.5 1.1-1 2.6-2.7-.5L12 21.2l-1.3-2.4-2.7.5-1-2.6-2.5-1.1.9-2.6L3.7 11l1.7-2.1-.9-2.6 2.5-1.1 1-2.6 2.7.5z"/>',
  play:'<circle cx="12" cy="12" r="9.2"/><path d="M10.2 8.6l5.4 3.4-5.4 3.4z"/>',
  phoneDev:'<rect x="6.4" y="2.4" width="11.2" height="19.2" rx="2.4"/><path d="M10.6 18.4h2.8"/>',
  monitor:'<rect x="2.8" y="4" width="18.4" height="12.4" rx="2"/><path d="M8.4 20.4h7.2M12 16.4v4"/>',
  mail:'<rect x="2.8" y="5" width="18.4" height="14" rx="2.2"/><path d="M3.4 6.6L12 12.8l8.6-6.2"/>',
  refresh:'<path d="M20.4 11.4a8.4 8.4 0 0 0-14.6-4.6L3.6 9"/><path d="M3.6 12.6a8.4 8.4 0 0 0 14.6 4.6l2.2-2.2"/><path d="M3.6 4.4V9h4.6M20.4 19.6V15h-4.6"/>',
  pin:'<path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10.2" r="2.6"/>',
  desk:'<rect x="3" y="4.6" width="18" height="11.4" rx="1.8"/><path d="M7 20h10M12 16v4"/><path d="M7.6 9h4.2"/>'
};

function injectSprite(){
  if(document.getElementById('icon-sprite')) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.id = 'icon-sprite';
  svg.setAttribute('aria-hidden','true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  svg.innerHTML = Object.keys(ICONS).map(k=>
    `<symbol id="i-${k}" viewBox="0 0 24 24">${ICONS[k]}</symbol>`
  ).join('');
  document.body.insertBefore(svg, document.body.firstChild);
}
const icon = (name, cls) => `<svg class="i ${cls||''}"><use href="#i-${name}"></use></svg>`;

/* Star ratings drawn as SVG rather than ★ glyphs, which render as
   coloured emoji on some Android/iOS builds.                          */
function renderStars(){
  document.querySelectorAll('.stars').forEach(el=>{
    const rate = parseFloat(el.dataset.rate || '5');
    el.innerHTML = [1,2,3,4,5].map(n=>
      `<svg class="i i-fill${n<=Math.round(rate)?'':' off'}"><use href="#i-star"></use></svg>`
    ).join('');
  });
}

/* Sections ease in as they enter the viewport. Cheap, and it is what
   separates a hand-built storefront from a static export.             */
function initReveal(){
  const els = document.querySelectorAll('[data-rise]');
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin:'0px 0px -8% 0px', threshold:.06 });
  els.forEach((el,i)=>{ el.style.transitionDelay = Math.min(i%6,5)*55 + 'ms'; io.observe(el); });
}

/* ---------- 2. Review toolbar ---------------------------------------- */
const PAGES = [
  ["index.html","1 · Storefront"],
  ["product.html","2 · Product + COD form"],
  ["thankyou.html","3 · Order confirmed"],
  ["sales-site.html","4 · License sales site"],
  ["email-delivery.html","5 · Auto-delivery email"],
  ["admin-license.html","6 · Theme activation (WP admin)"],
  ["admin-options.html","7 · Theme options (WP admin)"]
];

function buildBar(){
  const host = document.getElementById('mockbar');
  if(!host) return;
  const here = location.pathname.split('/').pop() || 'index.html';
  host.className = 'mockbar';

  /* The bar is written statically into every page so it occupies its final
     height at first paint. Injecting it here instead pushed the whole page
     down a few hundred ms in and scored ~0.93 cumulative layout shift.
     This branch is only a fallback if the static markup is missing.       */
  if(!host.querySelector('.mockbar-in')){
    host.innerHTML =
      '<div class="mockbar-in">' +
        '<div class="brand">COD<span>·</span>Theme mockup</div>' +
        '<div class="mocknav">' +
          PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('') +
        '</div>' +
        '<div class="mocktools">' +
          '<button class="chip" id="tLang">AR / FR</button>' +
          '<button class="chip" id="tDev">' + icon('phoneDev') + ' Mobile</button>' +
        '</div>' +
      '</div>';
  }
  host.querySelectorAll('.mocknav a').forEach(a=>{
    a.classList.toggle('on', a.getAttribute('href') === here);
  });

  document.getElementById('tLang').onclick = ()=> setLang(document.documentElement.lang==='ar'?'fr':'ar');
  document.getElementById('tDev').onclick = ()=>{
    const on = document.documentElement.classList.toggle('mobile');
    localStorage.setItem('mk_dev', on?'m':'d');
    const b = document.getElementById('tDev');
    b.classList.toggle('on', on);
    b.innerHTML = on ? icon('monitor') + ' Desktop' : icon('phoneDev') + ' Mobile';
  };
  if(localStorage.getItem('mk_dev')==='m') document.getElementById('tDev').click();
}

/* Latin/number runs inside Arabic text are wrapped in LRM marks, otherwise
   the bidi algorithm reorders things like "11.900 DA" into "DA 11.900". */
const LATIN_RUN = /[0-9A-Za-z][0-9A-Za-z.,:\/   -]*[0-9A-Za-z]|[0-9A-Za-z]/g;
function isolateLatin(el){
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    const v = n.nodeValue.replace(/‎/g,'');
    n.nodeValue = v.replace(LATIN_RUN, m => '‎' + m + '‎');
  });
}

/* ---------- 3. Language switch (AR default, RTL) ---------------------- */
function setLang(lang){
  const html = document.documentElement;
  html.lang = lang;
  html.dir = (lang==='ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar]').forEach(el=>{
    if(el.dataset.fr === undefined) el.dataset.fr = el.innerHTML.trim();
    el.innerHTML = (lang==='ar') ? el.dataset.ar : el.dataset.fr;
    if(lang==='ar') isolateLatin(el);
  });
  document.querySelectorAll('[data-ar-ph]').forEach(el=>{
    if(!el.dataset.frPh) el.dataset.frPh = el.placeholder || '';
    el.placeholder = (lang==='ar') ? el.dataset.arPh : el.dataset.frPh;
  });
  localStorage.setItem('mk_lang', lang);
  fillWilayas();
  if(typeof window.__resetCommunes === 'function') window.__resetCommunes();
  if(typeof window.__codRender === 'function') window.__codRender();
  if(typeof window.__shipDraw === 'function'){
    const q = document.getElementById('shipSearch');
    window.__shipDraw(q ? q.value : '');
  }
}

/* ---------- 4. Money helper ------------------------------------------- */
/* Amounts count up to their new value instead of snapping. Small thing,
   but it is what makes a total feel alive when the wilaya changes.      */
const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setMoney(el, value, fallback){
  if(!el) return;
  if(value === null || value === undefined){ el.textContent = fallback; el._v = null; return; }
  const from = (typeof el._v === 'number') ? el._v : value;
  el._v = value;
  if(REDUCED || from === value){ el.textContent = DZD(value); return; }
  const t0 = performance.now(), dur = 420;
  const step = now =>{
    const p = Math.min(1,(now-t0)/dur);
    const e = 1-Math.pow(1-p,3);
    el.textContent = DZD(Math.round(from + (value-from)*e));
    if(p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const DZD = n => new Intl.NumberFormat('fr-DZ').format(n).replace(/ | /g,' ') + ' DA';

/* ---------- 5. COD form logic ----------------------------------------- */
let COD = null;

function fillWilayas(){
  const sel = document.getElementById('wilaya');
  if(!sel) return;
  const cur = sel.value;
  const ar = document.documentElement.lang==='ar';
  sel.innerHTML = `<option value="">${ar?'— اختر الولاية —':'— Choisir la wilaya —'}</option>` +
    WILAYAS.map(w=>`<option value="${w[0]}">${String(w[0]).padStart(2,'0')} - ${ar?w[1]:w[2]}</option>`).join('');
  if(cur) sel.value = cur;
}

function initCOD(){
  const form = document.getElementById('codform');
  if(!form) return;

  COD = { wilaya:null, mode:'home', qty:1, offer:0 };
  const OFFERS = [
    {q:1, price:3900},
    {q:2, price:6900},
    {q:3, price:9500}
  ];

  fillWilayas();

  const wSel = document.getElementById('wilaya');
  const cSel = document.getElementById('commune');
  const ar = () => document.documentElement.lang==='ar';

  function resetCommunes(list){
    cSel.innerHTML = `<option value="">${ar()?'— اختر البلدية —':'— Choisir la commune —'}</option>` +
      (list||[]).map(c=>`<option>${c}</option>`).join('');
    cSel.disabled = !list;
  }
  window.__resetCommunes = ()=>{
    const w = WILAYAS.find(x=>String(x[0])===wSel.value);
    const keep = cSel.value;
    resetCommunes(w ? w[5] : null);
    if(keep) cSel.value = keep;
  };
  resetCommunes(null);

  wSel.onchange = ()=>{
    const w = WILAYAS.find(x=>String(x[0])===wSel.value);
    COD.wilaya = w || null;
    resetCommunes(w ? w[5] : null);
    wSel.closest('.field').classList.remove('err');
    render();
  };
  cSel.onchange = ()=> cSel.closest('.field').classList.remove('err');

  document.querySelectorAll('.ship-opt').forEach(btn=>{
    btn.onclick = ()=>{
      document.querySelectorAll('.ship-opt').forEach(b=>b.classList.remove('on'));
      btn.classList.add('on');
      COD.mode = btn.dataset.mode;
      render();
    };
  });

  document.querySelectorAll('.offer').forEach((el,i)=>{
    el.onclick = ()=>{
      document.querySelectorAll('.offer').forEach(o=>o.classList.remove('on'));
      el.classList.add('on');
      COD.offer = i; COD.qty = OFFERS[i].q;
      const q = document.getElementById('qtyVal'); if(q) q.textContent = COD.qty;
      render();
    };
  });

  const qm = document.getElementById('qMinus'), qp = document.getElementById('qPlus');
  if(qm) qm.onclick = ()=>{ if(COD.qty>1){ COD.qty--; document.getElementById('qtyVal').textContent=COD.qty; render(); } };
  if(qp) qp.onclick = ()=>{ if(COD.qty<10){ COD.qty++; document.getElementById('qtyVal').textContent=COD.qty; render(); } };

  function shipCost(){
    if(!COD.wilaya) return null;
    return COD.mode==='home' ? COD.wilaya[3] : COD.wilaya[4];
  }
  function goodsCost(){
    const o = OFFERS[COD.offer];
    return COD.qty === o.q ? o.price : Math.round(o.price / o.q * COD.qty);
  }

  function render(){
    const s = shipCost(), g = goodsCost();
    const el = id => document.getElementById(id);
    const flash = e =>{ if(!e) return; e.classList.remove('flash'); void e.offsetWidth; e.classList.add('flash'); };

    setMoney(el('sGoods'), g);
    setMoney(el('sShip'), s, ar() ? 'اختر الولاية' : 'Choisir la wilaya');
    setMoney(el('sTotal'), g + (s||0));
    setMoney(el('stickyPrice'), g + (s||0));
    [el('sGoods'),el('sShip'),el('sTotal')].forEach(flash);

    // per-wilaya prices on the two delivery buttons
    setMoney(el('homeCost'), COD.wilaya ? COD.wilaya[3] : null, '—');
    setMoney(el('deskCost'), COD.wilaya ? COD.wilaya[4] : null, '—');
  }
  render();
  window.__codRender = render;

  form.onsubmit = e=>{
    e.preventDefault();
    let ok = true;
    ['fullname','phone','wilaya','commune'].forEach(id=>{
      const el = document.getElementById(id);
      const f  = el.closest('.field');
      const bad = !el.value.trim() || (id==='phone' && !/^0[5-7][0-9]{8}$/.test(el.value.replace(/\s/g,'')));
      f.classList.toggle('err', bad);
      if(bad) ok = false;
    });
    if(!ok){ document.querySelector('.field.err').scrollIntoView({block:'center'}); return; }
    const b = document.getElementById('submitBtn');
    b.disabled = true;
    b.textContent = ar() ? 'جاري تأكيد الطلب…' : 'Confirmation en cours…';
    setTimeout(()=>{ location.href = 'thankyou.html'; }, 700);
  };
}

/* ---------- 5b. Conversion widgets -------------------------------------
   Countdown, social-proof toasts and animated stats. In the real theme
   each of these is a switch in the Customizer — see admin-options.html.  */

function initCountdown(){
  const box = document.getElementById('countdown');
  if(!box) return;
  let left = 2*3600 + 14*60 + 33;           // demo value, admin-configurable
  const pad = n => String(n).padStart(2,'0');
  const cells = box.querySelectorAll('.cd-n');
  const tick = ()=>{
    if(left <= 0) left = 3*3600;
    const h = Math.floor(left/3600), m = Math.floor((left%3600)/60), s = left%60;
    [h,m,s].forEach((v,i)=>{ if(cells[i] && cells[i].textContent !== pad(v)) cells[i].textContent = pad(v); });
    left--;
  };
  tick();
  setInterval(tick, 1000);
}

const PROOF = [
  ["أمين","Amine","وهران","Oran",4],
  ["سارة","Sarah","سطيف","Sétif",11],
  ["ياسين","Yacine","الجزائر","Alger",17],
  ["نسرين","Nesrine","قسنطينة","Constantine",23],
  ["كريم","Karim","عنابة","Annaba",31],
  ["ليلى","Leila","تلمسان","Tlemcen",38]
];
function initProof(){
  const host = document.getElementById('proof');
  if(!host || REDUCED) return;
  let i = 0;
  const show = ()=>{
    const ar = document.documentElement.lang === 'ar';
    const p = PROOF[i % PROOF.length]; i++;
    host.innerHTML =
      '<span class="pv">' + icon('checkCircle') + '</span>' +
      '<div class="pt"><b>' + (ar ? p[0]+' من '+p[2] : p[1]+' de '+p[3]) + '</b>' +
      '<span>' + (ar ? 'طلب هذا المنتج قبل ‎'+p[4]+'‎ دقيقة' : 'a commandé ce produit il y a '+p[4]+' min') + '</span></div>' +
      '<button class="px" aria-label="close">&times;</button>';
    host.querySelector('.px').onclick = ()=> host.classList.remove('on');
    host.classList.add('on');
    setTimeout(()=> host.classList.remove('on'), 5200);
  };
  setTimeout(show, 3200);
  setInterval(show, 13000);
}

function initStats(){
  const nums = document.querySelectorAll('.stat .num[data-to]');
  if(!nums.length) return;
  const run = el =>{
    const to = parseFloat(el.dataset.to), dec = (el.dataset.dec|0);
    const fmt = v => dec ? v.toFixed(dec)
      : new Intl.NumberFormat('fr-DZ').format(Math.round(v)).replace(/ | /g,' ');
    if(REDUCED){ el.textContent = fmt(to); return; }
    const t0 = performance.now(), dur = 1300;
    const step = now =>{
      const p = Math.min(1,(now-t0)/dur), e = 1-Math.pow(1-p,3);
      el.textContent = fmt(to*e);
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if(!('IntersectionObserver' in window)){ nums.forEach(run); return; }
  const io = new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting){ run(en.target); io.unobserve(en.target); }
  }), { threshold:.5 });
  nums.forEach(n=>io.observe(n));
}

/* ---------- 6. WP-admin license state switcher ------------------------ */
function initStates(){
  const tabs = document.querySelectorAll('.statetab');
  if(!tabs.length) return;
  tabs.forEach(t=>{
    t.onclick = ()=>{
      tabs.forEach(x=>x.classList.remove('on'));
      t.classList.add('on');
      document.querySelectorAll('.wpmain > [data-state]').forEach(p=>{
        p.classList.toggle('hidden', p.dataset.state !== t.dataset.state);
      });
    };
  });
}

/* ---------- 6b. Theme options panel (screen 7) ------------------------
   Demonstrates that everything on the storefront is editable from WP
   admin: no template file is ever touched by the buyer.               */
function initOptions(){
  const tabs = document.querySelectorAll('.wptab');
  if(!tabs.length) return;

  tabs.forEach(t=>{
    t.onclick = ()=>{
      tabs.forEach(x=>x.classList.remove('on'));
      t.classList.add('on');
      document.querySelectorAll('.optpane').forEach(p=>{
        p.classList.toggle('hidden', p.dataset.tab !== t.dataset.tab);
      });
    };
  });

  const pv = document.querySelector('.livepv');
  const setVar = (k,v)=>{ if(pv) pv.style.setProperty(k,v); };

  // colour swatches -> live preview, no reload
  document.querySelectorAll('.swatch').forEach(s=>{
    s.style.background = s.dataset.val;
    s.onclick = ()=>{
      s.parentElement.querySelectorAll('.swatch').forEach(x=>x.classList.remove('on'));
      s.classList.add('on');
      setVar(s.dataset.var, s.dataset.val);
      if(s.dataset.var === '--accent'){
        setVar('--accent-2', s.dataset.val2 || s.dataset.val);
        setVar('--accent-ring', s.dataset.val + '2b');
        setVar('--accent-wash', s.dataset.wash || '#FFF3EE');
      }
      const hex = document.getElementById('optHex');
      if(hex && s.dataset.var === '--accent') hex.value = s.dataset.val.toUpperCase();
    };
  });

  const font = document.getElementById('optFont');
  if(font) font.onchange = ()=>{ setVar('--display', font.value); setVar('--body', font.value); };

  const rad = document.getElementById('optRadius');
  if(rad) rad.oninput = ()=>{
    const v = +rad.value;
    setVar('--r-sm', (v*0.5)+'px'); setVar('--r-md', (v*0.66)+'px');
    setVar('--r-lg', v+'px');       setVar('--r-xl', (v*1.35)+'px');
    const out = document.getElementById('optRadiusVal'); if(out) out.textContent = v+'px';
  };

  const btnStyle = document.getElementById('optBtn');
  if(btnStyle) btnStyle.onchange = ()=>{
    const b = pv && pv.querySelector('.btn');
    if(b) b.style.borderRadius = btnStyle.value === 'pill' ? '999px'
                              : btnStyle.value === 'round' ? '12px' : '2px';
  };

  // switches
  document.querySelectorAll('.tgl').forEach(t=>{
    if(!t.querySelector('i')) t.innerHTML = '<i></i>';
    t.onclick = ()=>{
      t.classList.toggle('on');
      const tgt = t.dataset.pv && pv && pv.querySelector(t.dataset.pv);
      if(tgt) tgt.style.display = t.classList.contains('on') ? '' : 'none';
    };
  });

  // 58-wilaya rate table, editable + searchable
  const tb = document.getElementById('shipRows');
  if(tb){
    const ar = () => document.documentElement.lang === 'ar';
    const draw = (q='')=>{
      const rows = WILAYAS.filter(w=>{
        const s = (w[1]+' '+w[2]+' '+w[0]).toLowerCase();
        return !q || s.includes(q.toLowerCase());
      });
      tb.innerHTML = rows.map(w=>
        '<tr><td><b>'+String(w[0]).padStart(2,'0')+'</b> '+(ar()?w[1]:w[2])+'</td>'+
        '<td><input class="pxin" value="'+w[3]+'"><span class="cur">DA</span></td>'+
        '<td><input class="pxin" value="'+w[4]+'"><span class="cur">DA</span></td>'+
        '<td><span class="tgl on mini"><i></i></span></td></tr>'
      ).join('');
      const c = document.getElementById('shipCount');
      if(c) c.textContent = rows.length;
      tb.querySelectorAll('.tgl').forEach(t=> t.onclick = ()=> t.classList.toggle('on'));
    };
    draw();
    const q = document.getElementById('shipSearch');
    if(q) q.oninput = ()=> draw(q.value);
    window.__shipDraw = draw;
  }
}

/* ---------- boot ------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', ()=>{
  injectSprite();
  buildBar();
  renderStars();
  initCOD();
  initStates();
  initOptions();
  initReveal();
  initCountdown();
  initProof();
  initStats();
  setLang(localStorage.getItem('mk_lang') || 'ar');
  if(typeof window.__codRender === 'function') window.__codRender();
});
