import * as THREE from 'three';
export function initHeroScene() {

  const host = document.getElementById('threeScene'); if (!host) return () => { }; if (!THREE) { host.innerHTML = '<div class="pt-24 text-center text-[150px] font-extrabold text-[#079bff]">H.</div>'; return; }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(35, 1, .1, 100); camera.position.set(0, 1.25, 11);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); renderer.setClearColor(0x000000, 0); host.appendChild(renderer.domElement);
  const ambient = new THREE.AmbientLight(0xffffff, 1.4); scene.add(ambient); const light = new THREE.PointLight(0x008cff, 55); light.position.set(4, 5, 6); scene.add(light); const cool = new THREE.PointLight(0x6a96ff, 45); cool.position.set(-5, -2, 5); scene.add(cool);
  const group = new THREE.Group(); scene.add(group); group.rotation.y = -.22;
  const metal = new THREE.MeshStandardMaterial({ color: 0x202b3d, metalness: .8, roughness: .28 }); const black = new THREE.MeshStandardMaterial({ color: 0x0b1019, metalness: .35, roughness: .35 }); const gold = new THREE.MeshStandardMaterial({ color: 0x079bff, metalness: .7, roughness: .2 });
  function box(w, h, d, material, x, y, z) { const obj = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material); obj.position.set(x, y, z); group.add(obj); return obj; }
  // Laptop screen with a live canvas texture
  const screenBody = box(4.5, 2.82, .18, metal, 0, .72, -.08); const screenBezel = box(4.23, 2.54, .02, black, 0, .75, .02);
  const c = document.createElement('canvas'); c.width = 1024; c.height = 640; const ctx = c.getContext('2d'); const grd = ctx.createLinearGradient(0, 0, 1024, 640); grd.addColorStop(0, '#172a41'); grd.addColorStop(1, '#080e1b'); ctx.fillStyle = grd; ctx.fillRect(0, 0, 1024, 640);
  ctx.strokeStyle = 'rgba(0,145,255,.2)'; for (let x = 0; x < 1024; x += 70) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 640); ctx.stroke() } for (let y = 0; y < 640; y += 70) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke() }
  ctx.font = 'bold 26px Outfit, sans-serif'; ctx.fillStyle = '#079bff'; ctx.fillText('HAAD / CODE', 65, 95); ctx.font = 'bold 94px Outfit, sans-serif'; ctx.fillStyle = '#f5f5f1'; ctx.fillText('FULL STACK', 65, 285); ctx.fillText('DEV.', 65, 382); ctx.fillStyle = '#079bff'; ctx.fillRect(65, 427, 310, 5); ctx.fillStyle = '#a5b9cf'; ctx.font = '25px Arial'; ctx.fillText('DESIGN  •  CODE  •  MOTION', 65, 505);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; const display = new THREE.Mesh(new THREE.PlaneGeometry(4.08, 2.39), new THREE.MeshBasicMaterial({ map: tex })); display.position.set(0, .75, .04); group.add(display);
  const base = box(4.8, .16, 3.1, metal, 0, -.76, 1.25); base.rotation.x = -.13; const trackpad = box(1.4, .012, .9, new THREE.MeshStandardMaterial({ color: 0x455267, metalness: .6, roughness: .45 }), 0, -.66, 2.12); trackpad.rotation.x = -.13;
  for (let r = 0; r < 4; r++)for (let i = 0; i < 12; i++) { const key = box(.3, .018, .22, black, -1.98 + i * .36, -.656, .34 + r * .39); key.rotation.x = -.13 }
  // Gold orbit rings around the object
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x0579ff, metalness: .85, roughness: .24, transparent: true, opacity: .72 }); const rings = [];
  for (let i = 0; i < 3; i++) { const mesh = new THREE.Mesh(new THREE.TorusGeometry(3.3 + i * .42, .012, 8, 140), ringMat); mesh.rotation.set(.35 + i * .35, .45 + i * .48, .2 + i * .36); scene.add(mesh); rings.push(mesh) }
  const particlesGeo = new THREE.BufferGeometry(), coords = []; for (let i = 0; i < 180; i++) { coords.push((Math.random() - .5) * 14, (Math.random() - .5) * 10, (Math.random() - .5) * 10) } particlesGeo.setAttribute('position', new THREE.Float32BufferAttribute(coords, 3)); const particles = new THREE.Points(particlesGeo, new THREE.PointsMaterial({ color: 0x079bff, size: .025, transparent: true, opacity: .85 })); scene.add(particles);
  const resize = () => { const w = host.clientWidth, h = host.clientHeight; if (w && h) { camera.aspect = w / h; camera.position.z = w < 480 ? 13.5 : 11; camera.updateProjectionMatrix(); renderer.setSize(w, h, false) } }; resize(); const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host);
  let mouseX = 0, mouseY = 0, frame = 0; const onPointerMove = (event) => { mouseX = (event.clientX / window.innerWidth - .5) * .35; mouseY = (event.clientY / window.innerHeight - .5) * .22; }; window.addEventListener('pointermove', onPointerMove, { passive: true });
  function animate(t) { frame = requestAnimationFrame(animate); const s = t * .001; group.position.y = reduced ? 0 : Math.sin(s * .8) * .15; group.rotation.y += ((-.25 + mouseX) - group.rotation.y) * .035; group.rotation.x += ((.04 - mouseY) - group.rotation.x) * .035; if (!reduced) { for (let i = 0; i < rings.length; i++) { rings[i].rotation.z += .0008 * (i % 2 ? 1 : -1); rings[i].rotation.y += .00045; } particles.rotation.y = s * .018 } renderer.render(scene, camera) } frame = requestAnimationFrame(animate);

  return () => { cancelAnimationFrame(frame); resizeObserver.disconnect(); window.removeEventListener('pointermove', onPointerMove); scene.traverse((object) => { object.geometry?.dispose(); if (object.material) { const materials = Array.isArray(object.material) ? object.material : [object.material]; for (const material of materials) { material.map?.dispose(); material.dispose(); } } }); renderer.dispose(); renderer.domElement.remove(); };

}
