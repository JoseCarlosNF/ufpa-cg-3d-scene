import * as THREE from 'three';

export default class CommonGeometryElements {
  constructor(scene) {
    this.scene = scene
  }

  cylinder (color="cyan", radiusTop=1, radiusBottom=1, height=2) {
    const material = new THREE.MeshBasicMaterial({color: color});
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height);
    const cilynder = new THREE.Mesh(geometry, material);
    this.scene.add(cilynder)
    return cilynder
  }

  cube(color="green", width=1, height=1, depth=1) {
    const material = new THREE.MeshBasicMaterial({color: color});
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const cube = new THREE.Mesh(geometry, material)
    this.scene.add(cube)
    return cube
  }

  sphere(color="orange", radius=5, widthSegments=null, heightSegments=null) {
    const material = new THREE.MeshBasicMaterial({color: color});
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
    const sphere = new THREE.Mesh(geometry, material)
    this.scene.add(sphere)
    return sphere
  }
}
