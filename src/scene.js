import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {bola, spots} from './main'
import * as dat from 'dat.gui'

// Main scene definitions
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10
camera.position.y = 10
camera.position.x = 10
const renderer = new THREE.WebGLRenderer({antialias: true});

// Enable/Disable DEBUG
const helpers = true
const gui = new dat.GUI()

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
let t = 0
export const animate = () => {
  window.requestAnimationFrame(animate);

  // Realistic ball roll
  t += 0.07 // velocity of moviment

  // Rotation around axis
  bola.rotation.x = 3*Math.sin(0.5*t)*Math.cos(0)
  bola.rotation.z = 3*Math.cos(0.5*t)

  // Orbit the cylinder
  bola.position.z = 3*Math.sin(0.5*t)
  bola.position.x = 3*Math.cos(0.5*t)

  // Jump ball
  bola.position.y = 2+1*Math.cos(t*2)


  // Volumetric spotlights
  spots[0].forEach(spot => {
    spot[0].target.position.set(
      spot[0].target.position.x+Math.sin(0.5*t),
      spot[0].target.position.y,
      spot[0].target.position.z+Math.cos(0.5*t)
    )
    spot[0].target.updateMatrixWorld()
    spot[1].rotateX(-0.07)
    spot[1].rotateZ(0.07)
  })


  spots[1].forEach(spot => {
    spot[0].target.position.set(
      spot[0].target.position.x+-Math.sin(0.5*t),
      spot[0].target.position.y,
      spot[0].target.position.z+Math.cos(0.5*t)
    )
    spot[0].target.updateMatrixWorld()
    spot[1].rotateX(-0.07)
    spot[1].rotateZ(-0.07)
  })

  renderer.render(scene, camera);
}
