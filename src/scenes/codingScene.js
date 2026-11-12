import * as THREE from 'three';
export function initCodingScene() {

  const stage = document.getElementById('coding3dStage');
  const mount = document.getElementById('coding3dCanvas');
  if (!stage || !mount) return () => { };
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch (e) { return () => { }; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x000000, 0); mount.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 100); camera.position.set(0, 0.85, 10.5);
  scene.add(new THREE.HemisphereLight(0xd5ecff, 0x052040, 2.3));
  const key = new THREE.PointLight(0x008dff, 70); key.position.set(3, 4, 5); scene.add(key);
  const fill = new THREE.PointLight(0x3f77ff, 45); fill.position.set(-5, 1, -1); scene.add(fill);
  const rig = new THREE.Group(); rig.position.y = .16; rig.scale.setScalar(1.23); scene.add(rig);
  const mat = (color, metalness = .4, roughness = .36) => new THREE.MeshStandardMaterial({ color, metalness, roughness });
  const navy = mat(0x0a1729, .5), metal = mat(0x223957, .7), edge = mat(0x098cff, .35), glass = mat(0x143d6b, .25);
  const addBox = (parent, w, h, d, m, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); parent.add(o); return o; };
  // 3D screen with rendered code lines
  const screen = new THREE.Group(); screen.position.set(-.54, .45, .1); screen.rotation.y = -.18; rig.add(screen);
  addBox(screen, 4.1, 2.68, .15, metal, 0, .37, 0);
  addBox(screen, 3.83, 2.41, .18, navy, 0, .39, .09);
  const c = document.createElement('canvas'); c.width = 1024; c.height = 650; const ctx = c.getContext('2d');
  ctx.fillStyle = '#07172c'; ctx.fillRect(0, 0, 1024, 650);
  ctx.fillStyle = '#123353'; ctx.fillRect(0, 0, 1024, 68);
  for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.fillStyle = ['#ff6473', '#ffbf56', '#47d6bd'][i]; ctx.arc(35 + i * 32, 34, 9, 0, Math.PI * 2); ctx.fill(); }
  ctx.fillStyle = '#61cbff'; ctx.font = 'bold 26px monospace'; ctx.fillText('portfolio / app.jsx', 150, 43);
  const lines = [['01  import React from "react";', '#77c9ff'], ['02  const Developer = () => {', '#c2dfff'], ['03    const skills = [', '#8fa3ff'], ['04      "React", "Node.js",', '#55e4cc'], ['05      "MongoDB", "SQL"', '#55e4cc'], ['06    ];', '#8fa3ff'], ['07    return <WebApp />;', '#fbd17d'], ['08  };', '#c2dfff'], ['09  export default Developer;', '#77c9ff']];
  ctx.font = '26px monospace';
  for (let i = 0; i < lines.length; i++) {
    ctx.fillStyle = lines[i][1];
    ctx.fillText(lines[i][0], 34, 116 + i * 55);
  }
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace;
  const display = new THREE.Mesh(new THREE.PlaneGeometry(3.78, 2.35), new THREE.MeshBasicMaterial({ map: texture })); display.position.set(0, .39, .19); screen.add(display);
  addBox(screen, .2, .74, .22, metal, 0, -1.37, -.11);
  addBox(screen, 1.7, .08, .65, metal, 0, -1.7, .1);
  // Keyboard and desk
  const kb = addBox(rig, 3.45, .13, 1.3, metal, -.52, -1.42, 1.65); kb.rotation.y = -.18;
  for (let i = 0; i < 10; i++)for (let j = 0; j < 3; j++) {
    const key = addBox(rig, .22, .025, .19, navy, -2.03 + i * .32, -1.33, 1.26 + j * .32); key.rotation.y = -.18;
  }
  // Server rack with glowing horizontal slots
  const server = new THREE.Group(); server.position.set(2.52, -.52, -.45); server.rotation.y = .22; rig.add(server);
  addBox(server, 1.22, 2.7, 1.1, navy, 0, 0, 0);
  addBox(server, 1.32, .12, 1.2, metal, 0, 1.4, 0);
  addBox(server, 1.32, .12, 1.2, metal, 0, -1.4, 0);
  for (let i = 0; i < 5; i++) {
    const y = .96 - i * .49; addBox(server, 1.03, .30, .08, glass, 0, y, .58);
    addBox(server, .55, .033, .085, edge, -.15, y + .05, .63);
    const led = new THREE.Mesh(new THREE.SphereGeometry(.047, 10, 8), new THREE.MeshBasicMaterial({ color: 0x28dbff })); led.position.set(.4, y + .01, .64); server.add(led);
  }
  // Database cylinders
  const dbGroup = new THREE.Group(); dbGroup.position.set(2.28, -1.05, 1.6); rig.add(dbGroup);
  const cyl = new THREE.CylinderGeometry(.56, .56, .30, 40);
  for (let k = 0; k < 3; k++) {
    const disk = new THREE.Mesh(cyl, k === 1 ? edge : metal); disk.position.y = k * .35; dbGroup.add(disk);
    const wire = new THREE.Mesh(new THREE.TorusGeometry(.56, .026, 8, 40), new THREE.MeshBasicMaterial({ color: 0x55c6ff })); wire.rotation.x = Math.PI / 2; wire.position.y = k * .35 + .16; dbGroup.add(wire);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.45, .018, 8, 120), new THREE.MeshBasicMaterial({ color: 0x147be6, transparent: true, opacity: .57 })); ring.rotation.set(.45, .4, .12); rig.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.0, .01, 8, 120), new THREE.MeshBasicMaterial({ color: 0x39bfff, transparent: true, opacity: .34 })); ring2.rotation.set(-.34, -.6, .3); rig.add(ring2);
  // orbiting full stack nodes
  const nodes = [];
  for (let i = 0; i < 7; i++) {
    const n = new THREE.Mesh(new THREE.OctahedronGeometry(i % 2 ? .15 : .2), new THREE.MeshStandardMaterial({ color: i % 2 ? 0x18cafa : 0x1668fd, emissive: 0x053c8b, emissiveIntensity: .65, metalness: .25, roughness: .3 })); rig.add(n); nodes.push(n);
  }
  const particles = new THREE.BufferGeometry(), points = []; for (let i = 0; i < 95; i++) { points.push((Math.random() - .5) * 11, (Math.random() - .5) * 7, (Math.random() - .5) * 5) }
  particles.setAttribute('position', new THREE.Float32BufferAttribute(points, 3)); scene.add(new THREE.Points(particles, new THREE.PointsMaterial({ color: 0x20a5ff, size: .03, transparent: true, opacity: .67 })));
  let mx = 0, my = 0, frame = 0, playing = true;
  function resize() { const w = mount.clientWidth, h = mount.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); camera.position.z = w < 480 ? 12.8 : 9.8; }
  resize(); const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null; if (ro) ro.observe(mount); else window.addEventListener('resize', resize);
  // Responsive mouse tracking + drag-to-rotate (touch works on phones too).
  let dragging = false, dragId = null, lastX = 0, lastY = 0, dragYaw = 0, dragPitch = 0;
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true; dragId = e.pointerId; lastX = e.clientX; lastY = e.clientY;
    stage.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (dragging && e.pointerId === dragId) {
      dragYaw += (e.clientX - lastX) * .008;
      dragPitch += (e.clientY - lastY) * .005;
      dragYaw = Math.max(-1.35, Math.min(1.35, dragYaw));
      dragPitch = Math.max(-.48, Math.min(.48, dragPitch));
      lastX = e.clientX; lastY = e.clientY;
    } else if (!dragging) {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;
      mx = Math.max(-1, Math.min(1, x * 2)) * .62;
      my = Math.max(-1, Math.min(1, y * 2)) * .27;
    }
  };
  stage.addEventListener('pointerdown', onPointerDown);
  stage.addEventListener('pointermove', onPointerMove);
  const release = e => { if (e.pointerId !== dragId) return; dragging = false; dragId = null; };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  const onLostCapture = () => { dragging = false; dragId = null; };
  const onPointerLeave = () => { if (!dragging) { mx = 0; my = 0; } };
  stage.addEventListener('lostpointercapture', onLostCapture);
  stage.addEventListener('pointerleave', onPointerLeave);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function animate(t) {
    if (!playing) return; frame = requestAnimationFrame(animate);
    const sec = t * .001; rig.rotation.y += ((dragYaw + mx + (reduce ? 0 : Math.sin(sec * .22) * .055)) - rig.rotation.y) * .085;
    rig.rotation.x += ((dragPitch + my) - rig.rotation.x) * .085;
    if (!reduce) { rig.position.y = .16 + Math.sin(sec * .9) * .075; ring.rotation.y += .0014; ring2.rotation.z -= .001; }
    for (let i = 0; i < nodes.length; i++) {
      const angle = i / 7 * Math.PI * 2 + (reduce ? 0 : sec * .18);
      nodes[i].position.set(Math.cos(angle) * 3.35, Math.sin(angle * 1.4) * 1.5 + .35, Math.sin(angle) * 1.2);
    }
    renderer.render(scene, camera);
  }
  frame = requestAnimationFrame(animate);
  // React cleanup: remove listeners and release GPU resources on unmount.
  return () => {
    playing = false;
    cancelAnimationFrame(frame);
    stage.removeEventListener('pointerdown', onPointerDown);
    stage.removeEventListener('pointermove', onPointerMove);
    stage.removeEventListener('pointerup', release);
    stage.removeEventListener('pointercancel', release);
    stage.removeEventListener('lostpointercapture', onLostCapture);
    stage.removeEventListener('pointerleave', onPointerLeave);
    if (ro) ro.disconnect();
    else window.removeEventListener('resize', resize);
    const geometries = new Set();
    const materials = new Set();
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) {
        const list = Array.isArray(object.material) ? object.material : [object.material];
        for (let i = 0; i < list.length; i++) materials.add(list[i]);
      }
    });
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) {
      if (material.map) material.map.dispose();
      material.dispose();
    }
    renderer.dispose();
    renderer.domElement.remove();
  };
}
