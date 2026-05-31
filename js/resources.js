/* ═══════════════════════════════════════════════
   RESOURCE LIBRARY
═══════════════════════════════════════════════ */
const RES_TAGS=['All','Figma','Typography','Color','UX Research','Inspiration','Icons','Illustrations','Images','Prototyping','CSS','Career','Tools'];
let activeResTag='All', activeResSearch='';

const DEFAULT_RESOURCES=[
  /* ── Figma ─────────────────────────────────── */
  {id:'r1', title:'Figma — Official Help Docs',              url:'https://help.figma.com',                                        type:'📄', tags:['Figma','Tools']},
  {id:'r2', title:'Figma — Auto Layout Guide',               url:'https://www.figma.com/blog/auto-layout',                        type:'📄', tags:['Figma']},
  {id:'r3', title:'Figma Community — Free UI Kits',          url:'https://www.figma.com/community',                               type:'🎨', tags:['Figma','Inspiration']},
  {id:'r4', title:'Figma to Code — Builder.io',             url:'https://www.builder.io/blog/figma-to-code',                     type:'📄', tags:['Figma','CSS']},

  /* ── Typography ────────────────────────────── */
  {id:'r5', title:'Refactoring UI — Typography Tips',        url:'https://www.refactoringui.com',                                 type:'📚', tags:['Typography']},
  {id:'r6', title:'Google Fonts — Free Web Fonts',           url:'https://fonts.google.com',                                      type:'🔗', tags:['Typography','Tools']},
  {id:'r7', title:'Font Pair — Font Combinations',           url:'https://www.fontpair.co',                                       type:'🔗', tags:['Typography']},
  {id:'r8', title:'Typescale — Modular Scale Generator',     url:'https://typescale.com',                                         type:'🔗', tags:['Typography','Tools']},
  {id:'r9', title:'Inter — Best UI Font Explained',          url:'https://rsms.me/inter',                                         type:'🔗', tags:['Typography']},

  /* ── Color ─────────────────────────────────── */
  {id:'r10',title:'Coolors — Color Palette Generator',       url:'https://coolors.co',                                            type:'🎨', tags:['Color','Tools']},
  {id:'r11',title:'Realtime Colors — Live UI Preview',       url:'https://www.realtimecolors.com',                                type:'🎨', tags:['Color','Tools']},
  {id:'r12',title:'Color Hunt — Curated Palettes',           url:'https://colorhunt.co',                                          type:'🎨', tags:['Color','Inspiration']},
  {id:'r13',title:'Accessible Colors — WCAG Contrast Check', url:'https://accessible-colors.com',                                 type:'🔗', tags:['Color','UX Research']},
  {id:'r14',title:'Adobe Color Wheel',                       url:'https://color.adobe.com',                                       type:'🎨', tags:['Color','Tools']},
  {id:'r15',title:'Huemint — AI Color Palettes',             url:'https://huemint.com',                                           type:'🎨', tags:['Color']},
  {id:'r16',title:'Shadcn UI Colors — Dark Mode Ready',      url:'https://ui.shadcn.com/colors',                                  type:'🎨', tags:['Color','CSS']},
  {id:'r17',title:'Happy Hues — Color in Context',           url:'https://www.happyhues.co',                                      type:'🎨', tags:['Color','Inspiration']},

  /* ── UX Research ───────────────────────────── */
  {id:'r18',title:'Nielsen Norman Group — UX Articles',      url:'https://www.nngroup.com/articles',                              type:'📚', tags:['UX Research']},
  {id:'r19',title:'Laws of UX — Psychology for Designers',   url:'https://lawsofux.com',                                          type:'📚', tags:['UX Research']},
  {id:'r20',title:'UX Myths — Common Misconceptions',        url:'https://uxmyths.com',                                           type:'📄', tags:['UX Research']},
  {id:'r21',title:'Interaction Design Foundation',           url:'https://www.interaction-design.org',                            type:'📚', tags:['UX Research','Career']},
  {id:'r22',title:'UX Collective — Medium Publication',      url:'https://uxdesign.cc',                                           type:'📄', tags:['UX Research','Inspiration']},
  {id:'r23',title:'Smashing Magazine — UX & Design',         url:'https://www.smashingmagazine.com',                              type:'📄', tags:['UX Research','CSS']},
  {id:'r24',title:'UX Planet — Articles & Case Studies',     url:'https://uxplanet.org',                                          type:'📄', tags:['UX Research']},

  /* ── Inspiration ───────────────────────────── */
  {id:'r25',title:'Dribbble — Design Shots',                 url:'https://dribbble.com',                                          type:'🔗', tags:['Inspiration']},
  {id:'r26',title:'Behance — Full Case Studies',             url:'https://www.behance.net',                                       type:'🔗', tags:['Inspiration','Career']},
  {id:'r27',title:'Mobbin — Mobile UI Patterns Library',     url:'https://mobbin.com',                                            type:'🔗', tags:['Inspiration']},
  {id:'r28',title:'Screenlane — UI Detail Inspiration',      url:'https://screenlane.com',                                        type:'🔗', tags:['Inspiration']},
  {id:'r29',title:'Lapa Ninja — Landing Page Inspiration',   url:'https://www.lapa.ninja',                                        type:'🔗', tags:['Inspiration']},
  {id:'r30',title:'UI Garage — Daily UI Patterns',           url:'https://uigarage.net',                                          type:'🔗', tags:['Inspiration']},
  {id:'r31',title:'Awwwards — Award-Winning Sites',          url:'https://www.awwwards.com',                                      type:'🔗', tags:['Inspiration']},
  {id:'r32',title:'Page Flows — User Flow Recordings',       url:'https://pageflows.com',                                         type:'🔗', tags:['Inspiration','UX Research']},
  {id:'r33',title:'Godly — Curated Web Design Gallery',      url:'https://godly.website',                                         type:'🔗', tags:['Inspiration']},

  /* ── Icons ─────────────────────────────────── */
  {id:'r34',title:'Phosphor Icons — Flexible Icon Set',      url:'https://phosphoricons.com',                                     type:'🔗', tags:['Icons']},
  {id:'r35',title:'Heroicons — Tailwind UI Icons',           url:'https://heroicons.com',                                         type:'🔗', tags:['Icons']},
  {id:'r36',title:'Lucide — Open Source Icon Library',       url:'https://lucide.dev',                                            type:'🔗', tags:['Icons']},
  {id:'r37',title:'Iconify — 200k+ Icons in One API',        url:'https://iconify.design',                                        type:'🔗', tags:['Icons','Tools']},
  {id:'r38',title:'Flaticon — Free & Premium Icons',         url:'https://www.flaticon.com',                                      type:'🔗', tags:['Icons']},
  {id:'r39',title:'Font Awesome — Classic Icon Set',         url:'https://fontawesome.com',                                       type:'🔗', tags:['Icons']},
  {id:'r40',title:'SVG Repo — 500k+ Free SVG Icons',        url:'https://www.svgrepo.com',                                       type:'🔗', tags:['Icons']},
  {id:'r41',title:'The Noun Project — Concept Icons',        url:'https://thenounproject.com',                                    type:'🔗', tags:['Icons']},

  /* ── Illustrations ─────────────────────────── */
  {id:'r42',title:'Storyset — Editable Scene Illustrations', url:'https://storyset.com',                                          type:'🎨', tags:['Illustrations']},
  {id:'r43',title:'unDraw — Open Source SVG Illustrations',  url:'https://undraw.co/illustrations',                               type:'🎨', tags:['Illustrations']},
  {id:'r44',title:'Blush — Customizable People Illustrations',url:'https://blush.design',                                         type:'🎨', tags:['Illustrations']},
  {id:'r45',title:'Open Peeps — Hand-drawn People',          url:'https://www.openpeeps.com',                                     type:'🎨', tags:['Illustrations']},
  {id:'r46',title:'Humaaans — Mix-and-match Characters',     url:'https://www.humaaans.com',                                      type:'🎨', tags:['Illustrations']},
  {id:'r47',title:'Illlustrations.co — Free Illustration Pack',url:'https://illlustrations.co',                                   type:'🎨', tags:['Illustrations']},
  {id:'r48',title:'DrawKit — Beautiful Illustration Sets',   url:'https://www.drawkit.com',                                       type:'🎨', tags:['Illustrations']},

  /* ── Images / Photos ───────────────────────── */
  {id:'r49',title:'Unsplash — Free High-Res Photography',    url:'https://unsplash.com',                                          type:'🖼️', tags:['Images']},
  {id:'r50',title:'Pexels — Free Stock Photos & Videos',     url:'https://www.pexels.com',                                        type:'🖼️', tags:['Images']},
  {id:'r51',title:'Freepik — Photos, Vectors & PSD Files',   url:'https://www.freepik.com',                                       type:'🖼️', tags:['Images','Illustrations']},
  {id:'r52',title:'Shots.so — Beautiful Device Mockups',     url:'https://shots.so',                                              type:'🖼️', tags:['Images','Tools']},
  {id:'r53',title:'Mockup World — Free Mockup Templates',    url:'https://www.mockupworld.co',                                    type:'🖼️', tags:['Images','Tools']},

  /* ── Prototyping ───────────────────────────── */
  {id:'r54',title:'Maze — Usability Testing Platform',       url:'https://maze.co',                                               type:'🔗', tags:['Prototyping','UX Research']},
  {id:'r55',title:'Framer — Interactive Prototyping',        url:'https://www.framer.com',                                        type:'🔗', tags:['Prototyping','Tools']},
  {id:'r56',title:'Whimsical — Wireframes & Flowcharts',     url:'https://whimsical.com',                                         type:'🔗', tags:['Prototyping','Tools']},
  {id:'r57',title:'Spline — 3D Design in the Browser',       url:'https://spline.design',                                         type:'🔗', tags:['Prototyping','Tools']},

  /* ── CSS / Dev Handoff ─────────────────────── */
  {id:'r58',title:'CSS Tricks — Complete Flexbox Guide',     url:'https://css-tricks.com/snippets/css/a-guide-to-flexbox',        type:'📄', tags:['CSS']},
  {id:'r59',title:'Tailwind CSS — Utility-First Docs',       url:'https://tailwindcss.com/docs',                                  type:'📄', tags:['CSS','Tools']},
  {id:'r60',title:'Glassmorphism CSS Generator',             url:'https://hype4.academy/tools/glassmorphism-generator',           type:'🔗', tags:['CSS','Tools']},
  {id:'r61',title:'CSS Gradient Generator',                  url:'https://cssgradient.io',                                        type:'🔗', tags:['CSS','Tools']},
  {id:'r62',title:'Neumorphism.io — Soft UI CSS Generator',  url:'https://neumorphism.io',                                        type:'🔗', tags:['CSS','Tools']},
  {id:'r63',title:'Animista — CSS Animation Library',        url:'https://animista.net',                                          type:'🔗', tags:['CSS']},

  /* ── Career ────────────────────────────────── */
  {id:'r64',title:'ADPList — Free 1:1 Design Mentorship',    url:'https://adplist.org',                                           type:'🔗', tags:['Career']},
  {id:'r65',title:'Read.cv — Designer Portfolio Platform',   url:'https://read.cv',                                               type:'🔗', tags:['Career']},
  {id:'r66',title:'Cofolios — Designer Portfolio Gallery',   url:'https://www.cofolios.com',                                      type:'🔗', tags:['Career','Inspiration']},
  {id:'r67',title:'Daily UI — 100-Day Design Challenge',     url:'https://www.dailyui.co',                                        type:'🔗', tags:['Career','Inspiration']},
  {id:'r68',title:'Design Buddies — Design Community',         url:'https://www.designbuddies.community',                            type:'🔗', tags:['Career']},

  /* ── Icons (more) ──────────────────────────── */
  {id:'r69',title:'Pictogrammers — Free Material Design Icons',url:'https://pictogrammers.com',                                  type:'🔗', tags:['Icons']},
  {id:'r70',title:'Bootstrap Icons — Open Source Icon Set',     url:'https://icons.getbootstrap.com',                            type:'🔗', tags:['Icons']},
  {id:'r71',title:'Feather Icons — Simply Beautiful Icons',     url:'https://feathericons.com',                                  type:'🔗', tags:['Icons']},

  /* ── Avatars / People ───────────────────────── */
  {id:'r72',title:'Avatar Generator — DiceBear',                url:'https://www.dicebear.com',                                  type:'🔗', tags:['Icons','Illustrations']},
  {id:'r73',title:'UI Avatars — Letter Avatars API',            url:'https://ui-avatars.com',                                    type:'🔗', tags:['Icons','Tools']},
  {id:'r74',title:'Avatar Placeholder Service',                 url:'https://pravatar.cc',                                       type:'🔗', tags:['Icons']},
  {id:'r75',title:'Generated Photos — AI Face Gallery',         url:'https://generated.photos',                                  type:'🖼️', tags:['Images','Illustrations']},
  {id:'r76',title:'This Person Does Not Exist — AI Faces',      url:'https://thispersondoesnotexist.com',                        type:'🖼️', tags:['Images']},

  /* ── Mockups ────────────────────────────────── */
  {id:'r77',title:'Smart Mockups — Device Mockups',            url:'https://smartmockups.com',                                  type:'🖼️', tags:['Images','Prototyping']},
  {id:'r78',title:'Screenzy — Browser Mockup Generator',        url:'https://screenzy.io',                                       type:'🔗', tags:['Images','Tools']},
  {id:'r79',title:'Artboard Studio — Mockup Design Tool',       url:'https://artboard.studio',                                   type:'🔗', tags:['Images','Prototyping']},
  {id:'r80',title:'Clean Mock — Free Device Frames',            url:'https://cleanmock.com',                                     type:'🔗', tags:['Images','Prototyping']},

  /* ── UI/UX Design ───────────────────────────── */
  {id:'r81',title:'UI Design Daily — Free UI Resources',        url:'https://www.uidesigndaily.com',                             type:'🎨', tags:['Inspiration','Figma']},
  {id:'r82',title:'Collect UI — Design Pattern Gallery',        url:'https://collectui.com',                                     type:'🎨', tags:['Inspiration']},
  {id:'r83',title:'Call To Inspiration — UI Gallery',           url:'https://www.calltoinspiration.com',                         type:'🎨', tags:['Inspiration']},
  {id:'r84',title:'UI Notes — Real World App Screenshots',      url:'https://uinotes.com',                                       type:'🎨', tags:['Inspiration','UX Research']},
  {id:'r85',title:'User Flow Patterns — UX Flow Examples',      url:'https://userflowpatterns.com',                              type:'📄', tags:['UX Research','Prototyping']},

  /* ── TEDx / Talks ───────────────────────────── */
  {id:'r86',title:'TED — The Power of UX (Margaret Gould Stewart)',   url:'https://www.ted.com/talks/margaret_gould_stewart_how_giant_websites_design_for_you', type:'📺', tags:['UX Research','Career']},
  {id:'r87',title:'TED — Design for All Senses',                       url:'https://www.ted.com/talks/jinsop_lee_design_for_all_5_senses',                      type:'📺', tags:['UX Research','Inspiration']},
  {id:'r88',title:'TED — Ethical Design (Tristan Harris)',             url:'https://www.ted.com/talks/tristan_harris_the_manipulative_tricks_tech_companies_use_to_capture_your_attention', type:'📺', tags:['UX Research','Career']},
  {id:'r89',title:'Google Design — Material Design Talks',             url:'https://design.google/videos',                                                    type:'📺', tags:['UX Research','Inspiration']},
  {id:'r90',title:'UX Salon — Conference Talks',                       url:'https://www.uxsalon.com',                                                          type:'📺', tags:['UX Research','Career']},

  /* ── Material Design 3 ──────────────────────── */
  {id:'r95',title:'Material Design 3 — Official Docs',          url:'https://m3.material.io',                                      type:'📚', tags:['UX Research','Figma','Prototyping']},
  {id:'r96',title:'Material Theme Builder — Figma Plugin',      url:'https://material-foundation.github.io/material-theme-builder',type:'🎨', tags:['Figma','Color','Tools']},
  {id:'r97',title:'Material Symbols — Variable Icons',          url:'https://fonts.google.com/icons',                              type:'🔗', tags:['Icons','Typography']},
  {id:'r98',title:'Material Color — Dynamic Color Guide',       url:'https://m3.material.io/foundations/color',                    type:'📚', tags:['Color','UX Research']},
  {id:'r99',title:'Material Design Kit — Official Figma Kit',   url:'https://www.figma.com/community/file/1035203688169396461',     type:'🎨', tags:['Figma','Prototyping']},
  {id:'r100',title:'Material Motion — Design Motion System',    url:'https://m3.material.io/motion',                               type:'📚', tags:['UX Research','Prototyping','CSS']},

  /* ── Prototyping (more) ─────────────────────── */
  {id:'r91',title:'ProtoPie — High-Fidelity Prototyping',      url:'https://www.protopie.io',                                   type:'🔗', tags:['Prototyping']},
  {id:'r92',title:'Axure RP — Advanced Prototyping Tool',      url:'https://www.axure.com',                                     type:'🔗', tags:['Prototyping']},
  {id:'r93',title:'Balsamiq — Low-Fidelity Wireframing',       url:'https://balsamiq.com',                                      type:'🔗', tags:['Prototyping','Tools']},
  {id:'r94',title:'Sketch — Vector Design Tool',               url:'https://www.sketch.com',                                    type:'🔗', tags:['Prototyping','Figma']},
];

function getResources(){
  try{
    const r=localStorage.getItem('sp-resources');
    if(r){
      const parsed=JSON.parse(r);
      // Merge: keep user's custom resources + fill in any missing defaults
      const existingIds=new Set(parsed.map(p=>p.id));
      const merged=[...parsed,...DEFAULT_RESOURCES.filter(d=>!existingIds.has(d.id))];
      return merged;
    }
    return DEFAULT_RESOURCES;
  }catch(e){return DEFAULT_RESOURCES;}
}
function saveResources(r){try{localStorage.setItem('sp-resources',JSON.stringify(r));}catch(e){}}

function buildLibraryHTML(){
  const resources=getResources();
  const filtered=resources.filter(r=>{
    if(activeResTag!=='All'&&!r.tags.includes(activeResTag))return false;
    if(activeResSearch&&!r.title.toLowerCase().includes(activeResSearch.toLowerCase()))return false;
    return true;
  });
  const tags=RES_TAGS.map(t=>`<button class="res-tag${activeResTag===t?' on':''}" onclick="setResTag('${t}')">${t}</button>`).join('');
  let h=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:6px;">
    <p style="font-size:13px;color:var(--muted);">Curated design wiki · <span style="color:var(--accent);font-weight:600">${resources.length} resources</span></p>
    <div style="display:flex;gap:6px;align-items:center;">
      <input type="text" id="res-search" placeholder="Search resources…" value="${escHtml(activeResSearch)}" oninput="onResSearch()" style="background:var(--surface2);border:1px solid var(--border2);border-radius:6px;padding:5px 10px;font-size:12px;color:var(--text);font-family:var(--font);outline:none;width:180px;">
      <button class="act-btn" onclick="addResource()">+ Add resource</button>
    </div>
  </div>
  <div class="resource-tags">${tags}</div>
  <div class="resource-list">`;
  if(!filtered.length){h+=`<div class="empty-state">No resources tagged "${activeResTag}" yet.</div>`;}
  filtered.forEach(res=>{
    const tagBadges=res.tags.map(t=>`<span class="resource-tag-badge">${escHtml(t)}</span>`).join('');
    h+=`<div class="resource-item">
      <span class="resource-icon">${res.type||'🔗'}</span>
      <div class="resource-body">
        <p class="resource-title">${escHtml(res.title)}</p>
        <a class="resource-url" href="${escHtml(res.url)}" target="_blank" rel="noopener">${escHtml(res.url)}</a>
        <div class="resource-tag-list">${tagBadges}</div>
      </div>
      <div class="resource-actions">
        <button class="act-btn" onclick="window.open('${escHtml(res.url)}','_blank')" title="Open">↗</button>
        <button class="act-btn del" onclick="deleteResource('${res.id}')">✕</button>
      </div>
    </div>`;
  });
  return h+'</div>';
}

function renderResources(){
  const el=document.getElementById('v-resources');
  if(el)el.innerHTML=buildLibraryHTML();
  if(activeResSearch&&document.getElementById('res-search'))onResSearch();
}

function setResTag(tag){
  activeResTag=tag;
  if(document.getElementById('v-learn'))renderLearn('library');
  else renderResources();
  // Re-apply search filter on new DOM
  if(activeResSearch)onResSearch();
}

let resSearchTimer=null;
function onResSearch(){
  activeResSearch=document.getElementById('res-search')?.value||'';
  document.querySelectorAll('.resource-item').forEach(el=>{
    const title=el.querySelector('.resource-title')?.textContent?.toLowerCase()||'';
    el.style.display=title.includes(activeResSearch.toLowerCase())?'':'none';
  });
}

function addResource(){
  const knownTags=RES_TAGS.filter(t=>t!=='All').sort();
  const tagChips=knownTags.map(t=>`<span class="res-tag-chip" data-tag="${t}" onclick="toggleResTagChip(this)">${t}</span>`).join('');
  showModal(`<p class="modal-title">Add Resource</p>
    <div class="modal-row"><span class="modal-label">Title</span><input class="modal-input" id="res-title" placeholder="e.g. Figma shortcuts"></div>
    <div class="modal-row"><span class="modal-label">URL</span><input class="modal-input" id="res-url" placeholder="https://…"></div>
    <div class="modal-row"><span class="modal-label">Type</span>
      <select class="modal-input" id="res-type">
        <option value="🔗">🔗 Link</option>
        <option value="📺">📺 Video</option>
        <option value="📄">📄 Article</option>
        <option value="📚">📚 Course</option>
        <option value="🎨">🎨 Design tool</option>
        <option value="🖼️">🖼️ Images / Photos</option>
      </select>
    </div>
    <div class="modal-row"><span class="modal-label">Tags</span>
      <input class="modal-input" id="res-tags" placeholder="Type or click tags below">
      <div class="res-tag-chips" style="margin-top:6px;">${tagChips}</div>
    </div>
    <div class="modal-btns">
      <button class="modal-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" onclick="confirmAddResource()">Add</button>
    </div>`);
}

function toggleResTagChip(el){
  el.classList.toggle('on');
  const input=document.getElementById('res-tags');
  if(!input)return;
  const selected=[...document.querySelectorAll('.res-tag-chip.on')].map(c=>c.dataset.tag);
  const manual=input.value.split(',').map(s=>s.trim()).filter(Boolean).filter(t=>!selected.includes(t));
  input.value=[...selected,...manual].join(', ');
}

function confirmAddResource(){
  const title=document.getElementById('res-title')?.value.trim();
  const url=document.getElementById('res-url')?.value.trim();
  const type=document.getElementById('res-type')?.value||'🔗';
  const tagsRaw=document.getElementById('res-tags')?.value||'';
  if(!title||!url){alert('Title and URL required');return;}
  const tags=tagsRaw.split(',').map(t=>t.trim()).filter(Boolean);
  const resources=getResources();
  resources.unshift({id:'r-'+uid(),title,url,type,tags});
  saveResources(resources);closeModal();
  if(document.getElementById('v-learn'))renderLearn('library');
  else renderResources();
}

function deleteResource(id){
  if(!confirm('Delete this resource?'))return;
  const resources=getResources().filter(r=>r.id!==id);
  saveResources(resources);
  if(document.getElementById('v-learn'))renderLearn('library');
  else renderResources();
}