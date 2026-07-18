(function () {
  const canvas   = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 7);

  /* ── Lights ── */
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  const goldL = new THREE.PointLight(0xd4960a, 3.5, 18);
  goldL.position.set(4, 4, 3);
  scene.add(goldL);

  const purpL = new THREE.PointLight(0x9b44dd, 2.2, 14);
  purpL.position.set(-5, -2, 2);
  scene.add(purpL);

  const tealL = new THREE.PointLight(0x2ecf8c, 1.6, 12);
  tealL.position.set(0, -6, 2);
  scene.add(tealL);

  /* ── Materials factory ── */
  function wireMat(hex, op)  { return new THREE.MeshBasicMaterial({ color:hex, wireframe:true, transparent:true, opacity:op }); }
  function solidMat(hex, em, shin, op) {
    return new THREE.MeshPhongMaterial({ color:hex, emissive:em, shininess:shin, transparent:true, opacity:op });
  }

  /* ── 1. Large icosahedron wireframe — top right ── */
  const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 1), wireMat(0xd4960a, 0.13));
  ico.position.set(4.5, 2.4, -2);
  scene.add(ico);

  /* ── 2. Torus wireframe — left ── */
  const torus = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.44, 10, 26), wireMat(0x9b44dd, 0.12));
  torus.position.set(-4.8, -0.6, -1.2);
  torus.rotation.x = 0.6;
  scene.add(torus);

  /* ── 3. Torus knot — upper left, gold phong ── */
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.85, 0.23, 100, 14, 2, 3),
    solidMat(0xf0a800, 0x5a3a00, 90, 0.6)
  );
  knot.position.set(-3.8, 3.0, -0.5);
  scene.add(knot);

  /* ── 4. Octahedron — lower right, shiny gold ── */
  const oct = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.6, 0),
    solidMat(0xd4960a, 0x8b5a00, 160, 0.88)
  );
  oct.position.set(3.5, -3.0, 0.6);
  scene.add(oct);

  /* ── 5. Thin decorative ring — back plane ── */
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.025, 4, 80), wireMat(0xd4960a, 0.09));
  ring.position.set(1.5, 0.5, -4.5);
  ring.rotation.x = 0.25;
  scene.add(ring);

  /* ── 6. Second smaller ring ── */
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.018, 4, 60), wireMat(0xf0b429, 0.10));
  ring2.position.set(-2.5, -3.5, -3);
  ring2.rotation.y = 0.4;
  scene.add(ring2);

  /* ── 7. Small floating diamonds (octahedra) ── */
  const dData = [
    { pos:[ 2.2,-1.2, 1.2], col:0xd4960a, s:0.19 },
    { pos:[-2.5, 1.8, 0.8], col:0xf0b429, s:0.16 },
    { pos:[ 0.8, 3.6,-1.0], col:0xffd166, s:0.14 },
    { pos:[-1.5,-3.2, 0.5], col:0xc47f00, s:0.20 },
    { pos:[ 3.0, 0.5, 1.0], col:0xe8a800, s:0.12 },
  ];
  const diamonds = dData.map(({ pos, col, s }) => {
    const d = new THREE.Mesh(
      new THREE.OctahedronGeometry(s, 0),
      solidMat(col, 0x6b4500, 220, 0.82)
    );
    d.position.set(...pos);
    scene.add(d);
    return { mesh: d, baseY: pos[1] };
  });

  /* ── 8. Star particles ── */
  const N = 600;
  const pPos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pPos[i] = (Math.random() - 0.5) * 32;
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo,
    new THREE.PointsMaterial({ color:0xd4960a, size:0.055, transparent:true, opacity:0.30 })
  ));

  /* ── 9. Dodecahedron wireframe — bottom left ── */
  const dodec = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.9, 0),
    wireMat(0x2ecf8c, 0.10)
  );
  dodec.position.set(-2.2, -4.0, -1.0);
  scene.add(dodec);

  /* ── Mouse ── */
  let mx = 0, my = 0, tmx = 0, tmy = 0;
  let _mouseHandler, _mouseLeaveHandler, _resizeHandler;
  _mouseHandler = function(e) {
    tmx = (e.clientX / window.innerWidth  - 0.5) * 2;
    tmy = (e.clientY / window.innerHeight - 0.5) * 2;

    /* card tilt + shine */
    const card = document.getElementById('loginCard');
    const shine = document.getElementById('cardShine');
    const r  = card.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / r.width;
    const dy = (e.clientY - (r.top  + r.height / 2)) / r.height;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 1.4) {
      card.style.transform = `perspective(1200px) rotateX(${-dy*6}deg) rotateY(${dx*7}deg) scale(1.012)`;
      card.style.boxShadow = `0 0 0 1px rgba(255,255,255,.05) inset,${-dx*14}px ${-dy*14}px 70px rgba(0,0,0,.65)`;
    } else {
      card.style.transform = ''; card.style.boxShadow = '';
    }
    shine.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
    shine.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  };
  document.addEventListener('mousemove', _mouseHandler);
  _mouseLeaveHandler = function() {
    const card = document.getElementById('loginCard');
    card.style.transform = ''; card.style.boxShadow = '';
  };
  document.addEventListener('mouseleave', _mouseLeaveHandler);

  /* ── Animate ── */
  let t = 0, rafId = null;
  (function loop() {
    rafId = requestAnimationFrame(loop);
    t += 0.012;

    mx += (tmx - mx) * 0.04;
    my += (tmy - my) * 0.04;

    ico.rotation.x   += 0.004; ico.rotation.y   += 0.006;
    ico.position.y    = 2.4 + Math.sin(t * 0.5) * 0.22;

    torus.rotation.x += 0.004; torus.rotation.z += 0.003;
    torus.position.y  = -0.6 + Math.sin(t * 0.38 + 1) * 0.26;

    knot.rotation.x  += 0.005; knot.rotation.y  += 0.007;
    knot.position.y   = 3.0 + Math.sin(t * 0.44 + 0.5) * 0.22;

    oct.rotation.x   += 0.011; oct.rotation.y   += 0.009;
    oct.position.y    = -3.0 + Math.sin(t * 0.68 + 2) * 0.18;

    ring.rotation.z  += 0.002; ring.rotation.x  += 0.001;
    ring2.rotation.y += 0.003; ring2.rotation.z += 0.002;

    dodec.rotation.x += 0.004; dodec.rotation.y += 0.005;
    dodec.position.y  = -4.0 + Math.sin(t * 0.5 + 3) * 0.2;

    diamonds.forEach((d, i) => {
      d.mesh.rotation.x += 0.012 + i * 0.003;
      d.mesh.rotation.y += 0.015 + i * 0.002;
      d.mesh.position.y  = d.baseY + Math.sin(t * 0.8 + i * 1.3) * 0.13;
    });

    /* pulsing gold light */
    goldL.intensity = 3.0 + Math.sin(t * 1.6) * 0.7;

    /* camera parallax */
    camera.position.x += (mx * 0.55 - camera.position.x) * 0.03;
    camera.position.y += (-my * 0.35 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  })();

  _resizeHandler = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', _resizeHandler);

  // Cleanup on page unload
  window.addEventListener('beforeunload', function() {
    if (rafId) cancelAnimationFrame(rafId);
    renderer.dispose();
    scene.traverse(function(obj) {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    document.removeEventListener('mousemove', _mouseHandler);
    document.removeEventListener('mouseleave', _mouseLeaveHandler);
    window.removeEventListener('resize', _resizeHandler);
    renderer.forceContextLoss();
  });
})();