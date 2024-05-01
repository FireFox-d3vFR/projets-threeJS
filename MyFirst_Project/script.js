import * as THREE from "https://unpkg.com/three/build/three.module.js";

// Créer la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const rendere = new THREE.WebGLRenderer();
rendere.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendere.domElement);

// Créer des formes
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0xf27c16 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Créer un rendu de la scène

function animate() {
    requestAnimationFrame(animate);
    rendere.render(scene, camera);

    // Animation du cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate();
