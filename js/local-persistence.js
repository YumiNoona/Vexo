/* Durable local-only persistence.
   localStorage remains the fast source of truth; IndexedDB keeps rolling
   recovery snapshots so browser cleanup, partial writes, or bad imports are
   less likely to destroy the planner. Nothing leaves this device. */
(function(){
  const DB_NAME='vexo-local-v1', STORE='snapshots', SNAPSHOT_KEY='latest';
  let db=null, timer=null;

  function openDb(){
    return new Promise(resolve=>{
      if(!window.indexedDB){resolve(null);return;}
      const req=indexedDB.open(DB_NAME,1);
      req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(STORE))req.result.createObjectStore(STORE);};
      req.onsuccess=()=>resolve(req.result);
      req.onerror=()=>resolve(null);
    });
  }
  function collect(){
    const values={};
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k&&(k.startsWith('sp-')||k.startsWith('wg-')))values[k]=localStorage.getItem(k);
    }
    return {version:1,savedAt:new Date().toISOString(),values};
  }
  function readLatest(){
    return new Promise(resolve=>{
      if(!db){resolve(null);return;}
      const req=db.transaction(STORE,'readonly').objectStore(STORE).get(SNAPSHOT_KEY);
      req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>resolve(null);
    });
  }
  function writeSnapshot(){
    if(!db)return;
    try{db.transaction(STORE,'readwrite').objectStore(STORE).put(collect(),SNAPSHOT_KEY);}catch(e){}
  }
  function scheduleSnapshot(){clearTimeout(timer);timer=setTimeout(writeSnapshot,350);}

  window.initLocalPersistence=async function(){
    db=await openDb();
    const latest=await readLatest();
    const hasPlannerData=Object.keys(localStorage).some(k=>k.startsWith('sp-')||k.startsWith('wg-'));
    if(!hasPlannerData&&latest&&latest.values){
      Object.entries(latest.values).forEach(([k,v])=>{try{localStorage.setItem(k,v);}catch(e){}});
    }
    const nativeSet=Storage.prototype.setItem;
    const nativeRemove=Storage.prototype.removeItem;
    const nativeClear=Storage.prototype.clear;
    if(!Storage.prototype.__vexoWrapped){
      Storage.prototype.setItem=function(k,v){nativeSet.call(this,k,v);if(this===localStorage&&(String(k).startsWith('sp-')||String(k).startsWith('wg-')))scheduleSnapshot();};
      Storage.prototype.removeItem=function(k){nativeRemove.call(this,k);if(this===localStorage&&(String(k).startsWith('sp-')||String(k).startsWith('wg-')))scheduleSnapshot();};
      Storage.prototype.clear=function(){nativeClear.call(this);if(this===localStorage)scheduleSnapshot();};
      Storage.prototype.__vexoWrapped=true;
    }
    scheduleSnapshot();
  };
})();
