import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Main scene definitions
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5
const renderer = new THREE.WebGLRenderer();

// Enable/Disable DEBUG
const helpers = true

// Renderer oprtions
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement );

// Camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// Axes helper
const axesHelper = new THREE.AxesHelper(5);
helpers ? scene.add(axesHelper) : null

// Every reload to load new scene after camera chage
export const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
