const PEOPLE = [{"id": 1, "gender": "F", "name": "Sarah Martinez", "role": "Data Scientist", "company": "Shopify", "city": "Toronto, ON", "rating": 4.9, "field": "Data Science", "availability": "open", "specialties": ["ML", "Recommenders", "Python"], "avatar": "https://i.pravatar.cc/100?img=5"}, {"id": 2, "gender": "M", "name": "Michael Chen", "role": "Product Manager", "company": "Datadog", "city": "New York, NY", "rating": 4.8, "field": "Product Management", "availability": "open", "specialties": ["Roadmapping", "A/B Testing", "FinTech"], "avatar": "https://i.pravatar.cc/100?img=12"}, {"id": 3, "gender": "F", "name": "Emily Rodriguez", "role": "UX Designer", "company": "Figma", "city": "Los Angeles, CA", "rating": 4.7, "field": "UX Design", "availability": "busy", "specialties": ["Design Systems", "Accessibility", "Prototyping"], "avatar": "https://i.pravatar.cc/100?img=32"}, {"id": 4, "gender": "M", "name": "David Thompson", "role": "Software Engineer", "company": "Microsoft", "city": "Seattle, WA", "rating": 4.9, "field": "Software Engineering", "availability": "open", "specialties": ["Backend", "Cloud", "Distributed Systems"], "avatar": "https://i.pravatar.cc/100?img=14"}, {"id": 5, "gender": "F", "name": "Lisa Park", "role": "Career Coach", "company": "HBO", "city": "New York, NY", "rating": 4.8, "field": "Consulting", "availability": "open", "specialties": ["Interviewing", "Resume", "Portfolio"], "avatar": "https://i.pravatar.cc/100?img=47"}, {"id": 6, "gender": "M", "name": "James Wilson", "role": "ML Engineer", "company": "OpenAI", "city": "San Francisco, CA", "rating": 4.6, "field": "Data Science", "availability": "busy", "specialties": ["NLP", "LLMs", "MLOps"], "avatar": "https://i.pravatar.cc/100?img=23"}, {"id": 7, "gender": "F", "name": "Amina Yusuf", "role": "Quant Analyst", "company": "RBC", "city": "Toronto, ON", "rating": 4.8, "field": "Finance", "availability": "open", "specialties": ["Risk", "Derivatives", "Python"], "avatar": "https://i.pravatar.cc/100?img=58"}, {"id": 8, "gender": "F", "name": "Priya Shah", "role": "Data Engineer", "company": "Snowflake", "city": "Seattle, WA", "rating": 4.7, "field": "Software Engineering", "availability": "open", "specialties": ["ETL", "Warehousing", "dbt"], "avatar": "https://i.pravatar.cc/100?img=21"}, {"id": 9, "gender": "F", "name": "Hannah Lee", "role": "Consultant", "company": "McKinsey", "city": "New York, NY", "rating": 4.7, "field": "Consulting", "availability": "busy", "specialties": ["Ops", "Growth", "FinTech"], "avatar": "https://i.pravatar.cc/100?img=65"}, {"id": 10, "gender": "M", "name": "Noah Patel", "role": "Frontend Engineer", "company": "Shopify", "city": "Ottawa, ON", "rating": 4.8, "field": "Software Engineering", "availability": "open", "specialties": ["React", "Design Systems", "Perf"], "avatar": "https://i.pravatar.cc/100?img=41"}, {"id": 11, "gender": "F", "name": "Grace Kim", "role": "Product Analyst", "company": "Stripe", "city": "San Francisco, CA", "rating": 4.7, "field": "Finance", "availability": "open", "specialties": ["SQL", "Experimentation", "Growth"], "avatar": "https://i.pravatar.cc/100?img=31"}, {"id": 12, "gender": "M", "name": "Omar Haddad", "role": "Security Engineer", "company": "Cloudflare", "city": "London, UK", "rating": 4.6, "field": "Software Engineering", "availability": "busy", "specialties": ["AppSec", "Threat Modeling", "Zero Trust"], "avatar": "https://i.pravatar.cc/100?img=52"}, {"id": 13, "gender": "F", "name": "Nina Alvarez", "role": "Product Designer", "company": "Airbnb", "city": "San Francisco, CA", "rating": 4.8, "field": "UX Design", "availability": "open", "specialties": ["Prototyping", "Design Systems", "Research"], "avatar": "https://i.pravatar.cc/100?img=66"}, {"id": 14, "gender": "M", "name": "Ethan Brooks", "role": "Data Engineer", "company": "Databricks", "city": "Austin, TX", "rating": 4.7, "field": "Data Science", "availability": "open", "specialties": ["Spark", "ETL", "Delta Lake"], "avatar": "https://i.pravatar.cc/100?img=37"}, {"id": 15, "gender": "F", "name": "Zara Khan", "role": "Software Engineer", "company": "Google", "city": "Mountain View, CA", "rating": 4.9, "field": "Software Engineering", "availability": "busy", "specialties": ["Distributed Systems", "Golang", "Kubernetes"], "avatar": "https://i.pravatar.cc/100?img=8"}];

let SAVED = JSON.parse(localStorage.getItem('HTCH_SAVED') || '[]');
let THREADS = JSON.parse(localStorage.getItem('HTCH_THREADS') || '[]');
function saveState(){ localStorage.setItem('HTCH_SAVED', JSON.stringify(SAVED)); localStorage.setItem('HTCH_THREADS', JSON.stringify(THREADS)); }

function nav(active){
  return `
<header>
  <div class="container">
    <nav>
      <a class="brand" href="index.html">
        <img class="diamond" src="assets/img/htch_logo.png" alt="HTCH symbol"/><span>HTCH</span>
      </a>
      <div class="links">
        <a class="${active==='Mentor Directory'?'active':''}" href="mentors.html">Find a Mentor</a>
        <a class="${active==='Resources'?'active':''}" href="resources.html">Resources</a>
        <a class="${active==='Events'?'active':''}" href="events.html">Events</a>
        <a class="${active==='Game'?'active':''}" href="game.html">Networking Game</a>
        <a class="${active==='Messages'?'active':''}" href="messages.html">Messages</a>
        <a class="${active==='Profile'?'active':''}" href="profile.html">My Profile</a>
      </div>
      <div class="right">
        <button class="btn btn-linkedin" onclick="location.href='login.html'">Sign Up / Login</button>
      </div>
    </nav>
  </div>
</header>`;
}
function footer(){ return `<footer class="footer"><div class="container"><div class="line"></div><div style="font-size:12px;color:#627086">© 2025 HTCH</div></div></footer>`; }

/* Floating chips */
const FLOAT_TAGS = ["Software Engineering","Product Management","Data Science","UX Design","Finance","Marketing","Security","Cloud","AI/ML","Consulting","DevOps","Data Eng","PMM","Research","Design Systems","Accessibility","Growth","Robotics","Healthcare","Language Learning","Frontend","Backend","SRE","Product Analytics"];
function initFloating(){
  const wrap=document.getElementById('floatWrap'); if(!wrap) return;
  const W=wrap.clientWidth, H=wrap.clientHeight; let placed=[];
  FLOAT_TAGS.forEach((t)=>{
    const span=document.createElement('span'); span.className='float-chip'; span.textContent=t;
    let x,y,ok=false,tries=0; 
    while(!ok && tries<200){ x=Math.random()*(W-180); y=Math.random()*(H-46); ok=true; for(const p of placed){ if(Math.hypot(p.x-x,p.y-y)<120){ok=false;break;} } tries++; }
    span.style.left=x+'px'; span.style.top=y+'px'; placed.push({x,y});
    const depth=(0.25+Math.random()*0.6); span.dataset.depth=depth.toFixed(2);
    span.addEventListener('click', ()=>{ location.href = 'mentors.html?q=' + encodeURIComponent(t); });
    wrap.appendChild(span);
  });
  let mouseX=0, mouseY=0; wrap.addEventListener('mousemove', (e)=>{ const r=wrap.getBoundingClientRect(); mouseX=e.clientX-r.left; mouseY=e.clientY-r.top; });
  function tick(){ wrap.querySelectorAll('.float-chip').forEach(ch=>{ const d=parseFloat(ch.dataset.depth||0.5); const dx=(mouseX-W/2)/20*d; const dy=(mouseY-H/2)/20*d; ch.style.transform=`translate(${dx}px,${dy}px)`; }); requestAnimationFrame(tick); } tick();
}

/* Directory */
function initDirectory(){
  const cards=document.getElementById('cards');
  const search=document.getElementById('search');
  const fieldSel=document.getElementById('field');
  const openOnly=document.getElementById('openOnly');
  const unavailable=document.getElementById('unavailable');
  const gAll=document.getElementById('gAll'), gMale=document.getElementById('gMale'), gFemale=document.getElementById('gFemale'), gOther=document.getElementById('gOther');
  const activeChips=document.getElementById('activeChips');
  const loadMore=document.getElementById('loadMore');
  let visible=12; const selected=new Set();
  const params=new URLSearchParams(location.search); const preQ=params.get('q'); const preField=params.get('field');
  function updateChips(){
    if(!activeChips) return; activeChips.innerHTML=''; const add=(t)=>{const e=document.createElement('span');e.className='chip';e.textContent=t;activeChips.appendChild(e);};
    if(fieldSel?.value) add(fieldSel.value);
    if(openOnly?.checked) add('Open to connect');
    if(unavailable?.checked) add('Not available');
    if(gMale?.checked) add('Male'); else if(gFemale?.checked) add('Female'); else if(gOther?.checked) add('Other');
    selected.forEach(add);
  }
  function filtered(){
    const q=(search?.value||'').toLowerCase().trim();
    return PEOPLE.filter(p=>{
      const matchesQ=!q||[p.name,p.company,p.role,...p.specialties].join(' ').toLowerCase().includes(q);
      const matchesField=!fieldSel?.value||p.field===fieldSel.value;
      const matchesAvail=(openOnly?.checked? p.availability==='open' : true) && (unavailable?.checked? p.availability==='busy' : true);
      const matchesGender = gMale?.checked ? p.gender==='M' : gFemale?.checked ? p.gender==='F' : gOther?.checked ? p.gender==='O' : true;
      const matchesSpec=selected.size===0 || [...selected].every(s=>p.specialties.includes(s));
      return matchesQ && matchesField && matchesAvail && matchesGender && matchesSpec;
    });
  }
  function statusPill(p){
    const cls = p.availability==='open' ? 'status-open' : 'status-busy';
    const txt = p.availability==='open' ? 'Open to connect' : 'Not available';
    return `<span class="status-pill ${cls}">${txt} <span class="dot"></span></span>`;
  }
  function ratingHTML(r){ return `<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> ${r.toFixed(1)}</span>`; }
  function card(p){
    const el=document.createElement('div'); el.className='card m-card';
    el.innerHTML = `
      ${statusPill(p)}
      <div class="m-head">
        <div class="m-avatar"><img src="${p.avatar}" alt=""/></div>
        <div>
          <div class="m-name">${p.name}</div>
          <div class="m-role">${p.role} — <span class="m-company">${p.company}</span></div>
          <div>${ratingHTML(p.rating)}</div>
        </div>
      </div>
      <div class="m-tags">${p.specialties.map(t=>`<span class='tag' data-spec="${t}">${t}</span>`).join('')} </div>
      <div class="m-footer">
        <button class="btn-primary m-message" data-action="message">Message ${p.name.split(' ')[0]}</button>
        <button class="flag-btn" title="Save" data-action="save"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h6l1 2h5a1 1 0 0 1 1 1v11a.6.6 0 0 1-1 .4L12 14l-5 3.4A.6.6 0 0 1 6 17V4a1 1 0 0 1 -1 -1z"/></svg></button>
      </div>`;
    el.querySelectorAll('[data-spec]').forEach(tag=>{ tag.style.cursor='pointer'; tag.addEventListener('click',()=>{ const v=tag.dataset.spec; if(selected.has(v)){ selected.delete(v); tag.style.outline=''; } else { selected.add(v); tag.style.outline='2px solid var(--accent)'; } updateChips(); visible=12; render(); }); });
    el.querySelector('[data-action="message"]').addEventListener('click',()=> openMessageModal(p));
    const flag=el.querySelector('[data-action="save"]'); if(SAVED.includes(p.id)) flag.style.background='linear-gradient(135deg,var(--accent),var(--accent-2))';
    flag.addEventListener('click',()=>{ if(SAVED.includes(p.id)) SAVED=SAVED.filter(id=>id!==p.id); else SAVED.push(p.id); saveState(); flag.style.background=SAVED.includes(p.id)?'linear-gradient(135deg,var(--accent),var(--accent-2))':'#0c1422'; });
    return el;
  }
  function render(){
    const list=filtered(); cards.innerHTML=''; list.slice(0,visible).forEach(p=> cards.appendChild(card(p)));
    loadMore && (loadMore.style.display = (visible < list.length) ? 'block' : 'none');
  }
  function openMessageModal(p){
    const mb=document.getElementById('modalBackdrop'); const mm=document.getElementById('messageModal');
    document.getElementById('modalAvatar').innerHTML=`<img src="${p.avatar}" style="width:44px;height:44px;border-radius:50%"/>`;
    document.getElementById('modalName').textContent=p.name;
    document.getElementById('modalRole').textContent=`${p.role} — ${p.company}`;
    const t=document.getElementById('msgText'); t.value = `Hi ${p.name.split(' ')[0]}, I’m Alex (CS student). I’m exploring ${(p.specialties?.[0]||p.field||'your area')}. Would you be open to a 15‑min chat next week?`;
    mb.classList.add('open'); mm.classList.add('open');
    const send=document.getElementById('sendBtn'); const handler=()=>{ THREADS.unshift({with:p.name, role:p.role+' — '+p.company, preview:t.value, ts:Date.now()}); saveState(); alert('Message sent (demo)'); mb.classList.remove('open'); mm.classList.remove('open'); send.removeEventListener('click', handler); };
    send.addEventListener('click', handler);
  }
  if(preQ && search) search.value = decodeURIComponent(preQ);
  if(preField && fieldSel) fieldSel.value = decodeURIComponent(preField);
  updateChips(); render();
  search && search.addEventListener('input', ()=>{visible=12; render();});
  [fieldSel,openOnly,unavailable,gAll,gMale,gFemale,gOther].forEach(el=> el && el.addEventListener('change', ()=>{visible=12; updateChips(); render();}));
  loadMore && loadMore.addEventListener('click', ()=>{visible+=12; render();});
}

/* Practice AI */
function initPractice(){
  const msgs=document.getElementById('chat'), input=document.getElementById('chatInput'), send=document.getElementById('chatSend');
  function add(role,text){ const d=document.createElement('div'); d.className='dm-bubble '+(role==='me'?'me':''); d.innerHTML=role==='me'?text:`<strong>Coach:</strong> ${text}`; msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; }
  if(msgs) add('ai',"Hi! I’m your HTCH coach. Ask me to draft an elevator pitch or a cold intro.");
  function respond(q){ q=q.toLowerCase(); if(q.includes('elevator')||q.includes('pitch')) return "Try: “I’m Alex, a CS student focused on ML. I built a rental price predictor (MAE 7%). I’m looking for feedback on my next project.”"; if(q.includes('cold')&&(q.includes('intro')||q.includes('email')||q.includes('dm'))) return "Hi [Name], I’m Alex, a CS student interested in [their specialty]. Admire your work at [Company]. Could I ask 2 brief questions about breaking in and a project idea?"; return "I can help with: elevator pitches, cold intros, resume bullets, interview prep. Ask me for an example and I’ll draft it."; }
  function sendNow(){ const v=input.value.trim(); if(!v) return; add('me',v); add('ai',respond(v)); input.value=''; }
  send && send.addEventListener('click', sendNow); input && input.addEventListener('keydown', e=>{ if(e.key==='Enter') sendNow(); });
}

/* Events */
const EVENTS=[
  {id:'e1',name:'Women in STEM Night',city:'Toronto',date:'2025-10-15',type:'Networking',tags:['Mentorship','Women'],organizerName:'Sarah Martinez'},
  {id:'e2',name:'TechNova Career Fair',city:'Toronto',date:'2025-11-03',type:'Career Fair',tags:['Early Talent','Hiring'],organizerName:'David Thompson'},
  {id:'e3',name:'Mentorship Mixer',city:'Waterloo',date:'2025-11-20',type:'Mentorship',tags:['Networking'],organizerName:'Lisa Park'},
  {id:'e4',name:'AI in Finance Panel',city:'Toronto',date:'2025-10-30',type:'Panel',tags:['Finance','AI'],organizerName:'Grace Kim'},
  {id:'e5',name:'Product PM Roundtable',city:'NYC',date:'2025-12-05',type:'Networking',tags:['Product'],organizerName:'Michael Chen'},
  {id:'e6',name:'Cloud Career Night',city:'Toronto',date:'2025-12-12',type:'Panel',tags:['Cloud','AWS'],organizerName:'Chloe Tan'},
  {id:'e7',name:'Design Crit Club',city:'Toronto',date:'2025-10-21',type:'Mentorship',tags:['Design'],organizerName:'Nina Alvarez'},
  {id:'e8',name:'Quant Finance 101',city:'Toronto',date:'2025-11-15',type:'Panel',tags:['Finance'],organizerName:'Renee Okafor'},
  {id:'e9',name:'Data Science Lightning Talks',city:'San Francisco, CA',date:'2025-12-15',type:'Panel',tags:['DS','Talks'],organizerName:'Maya Patel'},
  {id:'e10',name:'SRE On‑Call Workshop',city:'Dublin, IE',date:'2025-12-20',type:'Workshop',tags:['SRE','Operations'],organizerName:'Arjun Mehta'},
  {id:'e11',name:'Frontend Design Systems Meetup',city:'Ottawa, ON',date:'2025-11-29',type:'Meetup',tags:['Frontend','Design Systems'],organizerName:'Noah Patel'},
  {id:'e12',name:'Security Threat Modeling 101',city:'London, UK',date:'2025-12-01',type:'Workshop',tags:['Security'],organizerName:'Omar Haddad'}
];
function initEvents(){
  const wrap=document.getElementById('timeline'); const city=document.getElementById('evtCity'); const type=document.getElementById('evtType'); const from=document.getElementById('evtFrom'); const q=document.getElementById('evtSearch');
  const IMG_MAP = {
    'Toronto': 'assets/img/events/toronto.svg',
    'Waterloo': 'assets/img/events/waterloo.svg',
    'NYC': 'assets/img/events/nyc.svg',
    'San Francisco, CA': 'assets/img/events/sf.svg',
    'Dublin, IE': 'assets/img/events/dublin.svg',
    'London, UK': 'assets/img/events/london.svg'
  };
  function imgFor(e){ return IMG_MAP[e.city] || 'assets/img/events/generic.svg'; }
  function filtered(){ const Q=(q&&q.value||'').toLowerCase(); return EVENTS
    .filter(e=>!city||!city.value||e.city===city.value)
    .filter(e=>!type||!type.value||e.type===type.value)
    .filter(e=>!from||!from.value||e.date>=from.value)
    .filter(e=>!Q||[e.name,e.city,e.type,(e.tags||[]).join(' ')].join(' ').toLowerCase().includes(Q))
    .sort((a,b)=>a.date.localeCompare(b.date)); }
  function card(e){
    const c=document.createElement('div'); c.className='event card';
    const organizer = e.organizerName ? `<a href="mentors.html?q=${encodeURIComponent(e.organizerName)}" class="small" style="color:var(--accent-2)">by ${e.organizerName}</a>` : '';
    c.innerHTML = `<div>
        <strong>${e.name}</strong>
        <div class="small">${e.city} • ${e.date} • ${e.type} ${organizer? '• ': ''}${organizer}</div>
        <div class="m-tags" style="margin-top:8px">${(e.tags||[]).map(t=>`<span class='tag'>${t}</span>`).join(' ')}</div>
        <div class="m-footer"><button class="btn">Learn More</button><button class="btn-primary">RSVP</button></div>
      </div>
      <div class="img"><img src="${imgFor(e)}" alt="${e.city} skyline"/></div>`;
    return c;
  }
  function render(){ wrap.innerHTML=''; filtered().forEach(e=> wrap.appendChild(card(e))); }
  ;[city,type,from,q].forEach(el=> el && el.addEventListener('input', render)); render();
}

/* Messages */
function initMessages(){
  const left = document.getElementById('convList');
  const right = document.getElementById('chatPane');
  if(!left || !right) return;
  if(THREADS.length === 0){
    const sample = (PEOPLE||[]).slice(0,6).map((p,i)=>({with:p.name, role:p.role+' — '+p.company, ts: Date.now()- (i+1)*3600*1000}));
    THREADS = [
      {...sample[0], preview:'Hi '+sample[0].with.split(' ')[0]+', quick question about breaking into '+(sample[0].role.split(' — ')[0]||'your field')+'.', messages:[
        {from:'me', text:'Hi! Big fan of your Databricks work. Could I ask 2 quick questions?'},
        {from:'them', text:'Sure, happy to help. What are you curious about?'},
        {from:'me', text:'How to get started with Spark projects as a student?'},
        {from:'them', text:'Build an end‑to‑end ETL on public data and write about it.'}
      ]},
      {...sample[1], preview:'No rush — just sent a short intro.', messages:[
        {from:'me', text:'Hello Michael, I admire your A/B testing posts. Would you be open to a 15‑min chat?'}]},
      {...sample[2], preview:'(no response yet)', messages:[
        {from:'me', text:'Hi Emily, quick portfolio review request if you have time 🙏'}]},
      {...sample[3], preview:'Follow‑up: thanks!', messages:[
        {from:'them', text:'Nice project! Ship it to GitHub and share metrics.'},
        {from:'me', text:'Thank you — will do and send a link soon.'}
      ]},
      {...sample[4], preview:'See thread for notes', messages:[
        {from:'me', text:'Loved your talk on MLOps.'},
        {from:'them', text:'Appreciate it! Happy to share resources.'},
        {from:'me', text:'Could you recommend a starter repo?'},
        {from:'them', text:'Check the cookiecutter data science template.'},
        {from:'me', text:'Perfect, thanks so much!'}
      ]},
      {...sample[5], preview:'Pinged re: mentorship mixer', messages:[]}
    ];
    saveState();
  }
  function renderList(){
    left.innerHTML = '';
    THREADS.forEach((t,idx)=>{
      const row = document.createElement('div');
      row.className = 'conv-row';
      row.innerHTML = `<div class="m-avatar"><img src="https://i.pravatar.cc/60?img=${idx+10}"/></div>
        <div style="flex:1">
          <div class="m-name">${t.with}</div>
          <div class="small">${t.role || ''}</div>
          <div class="small" style="opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.preview||''}</div>
        </div>`;
      row.addEventListener('click', ()=> openThread(idx));
      left.appendChild(row);
    });
  }
  function openThread(i){
    const t = THREADS[i];
    right.innerHTML = '';
    const head = document.createElement('div');
    head.className='card';
    head.innerHTML = `<div style="display:flex;gap:10px;align-items:center">
      <div class="m-avatar"><img src="https://i.pravatar.cc/60?img=${i+10}"/></div>
      <div><div class="m-name">${t.with}</div><div class="small">${t.role||''}</div></div>
      <div style="margin-left:auto;display:flex;gap:8px"><button class="btn">☆</button><button class="btn">⋮</button></div>
    </div>`;
    right.appendChild(head);
    const body = document.createElement('div');
    body.className='card';
    body.style.minHeight='300px';
    const thread = document.createElement('div');
    thread.style.display='flex'; thread.style.flexDirection='column'; thread.style.gap='8px';
    (t.messages && t.messages.length? t.messages : [{from:'them', text:'Hi! Tell me about your goals.'},{from:'me', text:t.preview||''}]).forEach(m=>{
      const b=document.createElement('div'); b.className='dm-bubble'+(m.from==='me'?' me':'');
      b.textContent=m.text; thread.appendChild(b);
    });
    body.appendChild(thread);
    right.appendChild(body);
    const input = document.createElement('div');
    input.className='card';
    input.innerHTML = `<div class="search-row"><input id="dmInput" placeholder="Type your message..."/><button class="btn-primary" id="dmSend">Send</button></div>`;
    right.appendChild(input);
    input.querySelector('#dmSend').addEventListener('click', ()=>{ const v = input.querySelector('#dmInput').value.trim(); if(!v) return;
      if(!THREADS[i].messages) THREADS[i].messages=[]; THREADS[i].messages.push({from:'me', text:v});
      THREADS[i].preview = v; THREADS[i].ts = Date.now(); saveState(); openThread(i); renderList(); });
  }
  renderList(); openThread(0);

  // AI assistant floating button
  const fab=document.createElement('div'); fab.className='ai-fab'; fab.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 00-5 5v1H5a2 2 0 100 4h2v2a5 5 0 005 5 5 5 0 005-5v-2h2a2 2 0 000-4h-2V7a5 5 0 00-5-5zm-1 15h2v2h-2z"/></svg>'; document.body.appendChild(fab);
  const chat=document.createElement('div'); chat.className='ai-chat'; chat.innerHTML = '<div class="ai-chat-header"><strong>HTCH Assistant</strong><button class="btn" id="aiClose">✕</button></div><div class="ai-chat-body" id="aiBody"><div class="ai-msg">Hi! Ask me for intro messages or elevator pitches.</div></div><div class="ai-chat-input"><input id="aiInput" placeholder="Ask the assistant..."/><button class="btn-primary" id="aiSend">Send</button></div>'; document.body.appendChild(chat);
  fab.addEventListener('click', ()=> chat.classList.toggle('open'));
  chat.querySelector('#aiClose').addEventListener('click', ()=> chat.classList.remove('open'));
  chat.querySelector('#aiSend').addEventListener('click', ()=>{ const i=document.getElementById('aiInput'); const v=i.value.trim(); if(!v) return; const b=document.getElementById('aiBody'); const me=document.createElement('div'); me.className='ai-msg me'; me.textContent=v; b.appendChild(me); const out=document.createElement('div'); out.className='ai-msg'; out.textContent = v.toLowerCase().includes('intro') ? 'Try: “Hi [Name] — I’m Alex, a CS student interested in your work on [topic]. Would you be open to a quick 15‑min chat next week?”' : (v.toLowerCase().includes('elevator') ? 'I’m Alex, CS @ UofT. Built a rental price predictor (MAE 7%). Exploring ML in marketplaces.' : 'I can help with intros, pitches, follow‑ups, and thank‑you notes.'); b.appendChild(out); b.scrollTop=b.scrollHeight; i.value=''; });
}
window.HTCH_APP = {nav,footer,initFloating,initDirectory,initPractice,initEvents,initMessages,PEOPLE,SAVED,THREADS,saveState};
