// Theme 5 game logic
(function(){
  const STORAGE_KEY = 'cookie-state-theme-5';
  let state = { cookies: 0, perClick: 1, autoClickers: 0, clickUpgrades: 0 };
  function autoCost() { return Math.floor(50 * Math.pow(1.15, state.autoClickers)); }
  function clickCost() { return Math.floor(25 * Math.pow(1.2, state.clickUpgrades)); }
  const cookieBtn = document.getElementById('cookieBtn');
  const cookieCount = document.getElementById('cookieCount');
  const perClickEl = document.getElementById('perClick');
  const cpsEl = document.getElementById('cps');
  const autoBtn = document.getElementById('buyAuto');
  const clickBtn = document.getElementById('buyClick');
  const autoCostEl = document.getElementById('autoCost');
  const clickCostEl = document.getElementById('clickCost');
  const autoCountEl = document.getElementById('autoCount');
  const clickUpgradesEl = document.getElementById('clickUpgrades');
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');

  function load() { try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) Object.assign(state, JSON.parse(raw)); } catch(e){} render(); }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function reset() { state = {cookies:0, perClick:1, autoClickers:0, clickUpgrades:0}; save(); render(); }
  function getCPS(){ return state.autoClickers * 1; }
  function render(){
    cookieCount.textContent = Math.floor(state.cookies);
    perClickEl.textContent = state.perClick;
    cpsEl.textContent = getCPS().toFixed(1);
    autoCostEl.textContent = autoCost();
    clickCostEl.textContent = clickCost();
    autoCountEl.textContent = state.autoClickers;
    clickUpgradesEl.textContent = state.clickUpgrades;
  }

  cookieBtn.addEventListener('click',()=>{ state.cookies += state.perClick; cookieBtn.style.transform = 'scale(1.02)'; setTimeout(()=> cookieBtn.style.transform = '', 80); render(); });
  autoBtn.addEventListener('click',()=>{ const cost = autoCost(); if (state.cookies >= cost){ state.cookies -= cost; state.autoClickers += 1; render(); } else { flash(autoBtn); }});
  clickBtn.addEventListener('click',()=>{ const cost = clickCost(); if (state.cookies >= cost){ state.cookies -= cost; state.clickUpgrades += 1; state.perClick += 1; render(); } else { flash(clickBtn); }});
  saveBtn.addEventListener('click', save);
  resetBtn.addEventListener('click', ()=>{ if(confirm('Reset progress for this theme?')) reset(); });

  setInterval(()=>{ state.cookies += getCPS(); render(); }, 1000);
  setInterval(save, 5000);

  function flash(el){ const orig = el.style.boxShadow; el.style.boxShadow = '0 6px 20px rgba(255,0,0,0.6)'; setTimeout(()=> el.style.boxShadow = orig, 300); }
  load();
})();