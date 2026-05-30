// UX Research combined array in original LESSON_MAP order (by ID)
// Depends on: ux-research-easy.js, ux-research-medium.js, ux-research-hard.js
const UX_UX_RESEARCH = (function() {
  var q = {};
  UX_UX_RESEARCH_EASY.forEach(function(x) { q[x.id] = x; });
  UX_UX_RESEARCH_MEDIUM.forEach(function(x) { q[x.id] = x; });
  UX_UX_RESEARCH_HARD.forEach(function(x) { q[x.id] = x; });
  return [1,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,90,91,92,100,120,121,122,123,124,125,126,127,128,154,157,161,168,175,183,189,198,200].map(function(id) { return q[id]; });
})();
