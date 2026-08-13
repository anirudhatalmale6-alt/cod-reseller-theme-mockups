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

/* ---------- 2. Review toolbar ---------------------------------------- */
const PAGES = [
  ["index.html","1 · Storefront"],
  ["product.html","2 · Product + COD form"],
  ["thankyou.html","3 · Order confirmed"],
  ["sales-site.html","4 · License sales site"],
  ["email-delivery.html","5 · Auto-delivery email"],
  ["admin-license.html","6 · Theme activation (WP admin)"]
];

function buildBar(){
  const host = document.getElementById('mockbar');
  if(!host) return;
  const here = location.pathname.split('/').pop() || 'index.html';
  host.className = 'mockbar';
  host.innerHTML =
    '<div class="mockbar-in">' +
      '<div class="brand">COD<span>·</span>Theme mockup</div>' +
      '<div class="mocknav">' +
        PAGES.map(p=>`<a href="${p[0]}" class="${p[0]===here?'on':''}">${p[1]}</a>`).join('') +
      '</div>' +
      '<div class="mocktools">' +
        '<button class="chip" id="tLang">AR / FR</button>' +
        '<button class="chip" id="tDev">📱 Mobile</button>' +
      '</div>' +
    '</div>';

  document.getElementById('tLang').onclick = ()=> setLang(document.documentElement.lang==='ar'?'fr':'ar');
  document.getElementById('tDev').onclick = ()=>{
    const on = document.documentElement.classList.toggle('mobile');
    localStorage.setItem('mk_dev', on?'m':'d');
    document.getElementById('tDev').classList.toggle('on', on);
    document.getElementById('tDev').textContent = on ? '🖥 Desktop' : '📱 Mobile';
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
}

/* ---------- 4. Money helper ------------------------------------------- */
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
    const set = (id,txt)=>{ const e=document.getElementById(id); if(e){ e.textContent=txt; e.classList.remove('flash'); void e.offsetWidth; e.classList.add('flash'); } };
    set('sGoods', DZD(g));
    set('sShip', s===null ? (ar()?'اختر الولاية':'Choisir la wilaya') : (s===0 ? (ar()?'مجاني':'Gratuit') : DZD(s)));
    set('sTotal', DZD(g + (s||0)));
    const sb = document.getElementById('stickyPrice'); if(sb) sb.textContent = DZD(g + (s||0));
    // per-wilaya prices on the two delivery buttons
    const hp = document.getElementById('homeCost'), dp = document.getElementById('deskCost');
    if(hp) hp.textContent = COD.wilaya ? DZD(COD.wilaya[3]) : '—';
    if(dp) dp.textContent = COD.wilaya ? DZD(COD.wilaya[4]) : '—';
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

/* ---------- boot ------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', ()=>{
  buildBar();
  initCOD();
  initStates();
  setLang(localStorage.getItem('mk_lang') || 'ar');
  if(typeof window.__codRender === 'function') window.__codRender();
});
