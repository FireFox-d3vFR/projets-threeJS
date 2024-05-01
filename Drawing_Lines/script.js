import * as THREE from "https://unpkg.com/three/build/three.module.js";

// Créer la scène
const rendere = new THREE.WebGLRenderer();
rendere.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendere.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0,0);
const scene = new THREE.Scene();

// Créer une ligne
const material = new THREE.LineBasicMaterial( { color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,0));
points.push(new THREE.Vector3(10,0,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

// Afficher la scène
scene.add(line);
rendere.render(scene, camera);