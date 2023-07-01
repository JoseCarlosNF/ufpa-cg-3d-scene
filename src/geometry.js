import * as THREE from 'three';

const loader = new THREE.TextureLoader
const sand_texture = loader.load("GroundSand006_Floor.png")
const basket_court_texture = loader.load("basket_court.png")
const basketball_texture = loader.load("balldimpled.png")

export default class CommonGeometryElements {
  constructor(scene, helper) {
    this.scene = scene
    this.helper = helper
  }

  sphere(color="orange", radius=1, widthSegments=20, heightSegments=20) {
    const material = new THREE.MeshLambertMaterial({color: color, map: basketball_texture})
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
    const sphere = new THREE.Mesh(geometry, material)
    this.scene.add(sphere)
    return sphere
  }

  floor(width=93, height=50) {
    const material = new THREE.MeshLambertMaterial({color: "white", map: basket_court_texture})
    const geometry = new THREE.PlaneGeometry(width, height)
    const floor = new THREE.Mesh(geometry, material)
    floor.rotation.x = -Math.PI / 2
    this.scene.add(floor)
    return floor
  }
}
