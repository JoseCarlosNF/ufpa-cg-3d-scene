import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Main scene definitions
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer({ antialias: true });

camera.position.z = 5
camera.position.y = 5
camera.position.x = 5

// Renderer oprtions
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement );

// Responsive window
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

// Camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// Axes helper
export const axesHelper = new THREE.AxesHelper(5);
