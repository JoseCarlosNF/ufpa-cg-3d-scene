import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const texture_loader = new THREE.TextureLoader
const basket_court_texture = texture_loader.load("basket_court.png")
const basketball_texture = texture_loader.load("balldimpled.png")
const basketball_normal = texture_loader.load("balldimpled_normal.png")

const models_3d_loader = new GLTFLoader();

export default class CommonGeometryElements {
  constructor(scene, helper) {
    this.scene = scene
    this.helper = helper
  }

  basketball(){
    models_3d_loader.load('models/basketball.glb', (gltf) => {
       this.scene.add(gltf.scene)
    })
  }

  bastket_ball() {
    const material = new THREE.MeshStandardMaterial(
      {
        map: basketball_texture,
        normalMap: basketball_normal,
      }
    )
    const geometry = new THREE.SphereGeometry()
    const sphere = new THREE.Mesh(geometry, material)
    sphere.castShadow = true
    this.scene.add(sphere)
    return sphere
  }

  sphere(color="orange", radius=1, widthSegments=20, heightSegments=20) {
    const material = new THREE.MeshLambertMaterial({color: color, map: basketball_texture})
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
    const sphere = new THREE.Mesh(geometry, material)
    sphere.castShadow = true
    this.scene.add(sphere)
    return sphere
  }

  floor(width=93, height=50) {
    const material = new THREE.MeshLambertMaterial({color: "white", map: basket_court_texture})
    const geometry = new THREE.PlaneGeometry(width, height)
    const floor = new THREE.Mesh(geometry, material)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow=true
    this.scene.add(floor)
    return floor
  }
}
