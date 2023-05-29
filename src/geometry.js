import * as THREE from 'three';

const loader = new THREE.TextureLoader
const basket_court_texture = loader.load("basket_court.png")
const basketball_texture = loader.load("balldimpled.png")
const basketball_normal = loader.load("balldimpled_normal.png")

const texture_disco_ball_base = loader.load("Discoball_mat_BaseColor.jpg")
const texture_disco_ball_normal = loader.load("Discoball_mat_Normal.png")
const texture_disco_ball_roughness = loader.load("Discoball_mat_Roughness.jpg")
const texture_disco_ball_envmap = loader.load("disco_envmap.png")

// // Shadow Round
// const shadow_round = loader.load("roundshadow.png")
// const shadowMat = new THREE.MeshBasicMaterial({
//     map: shadow_round,
//     transparent: true,
//     depthWrite: false,
//   })
// const shadowGeo = (size=1) => new THREE.PlaneGeometry(size, size);
// const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat)


export default class CommonGeometryElements {
  constructor(scene, helper) {
    this.scene = scene
    this.helper = helper
  }

  cylinder (color="cyan", radiusTop=1, radiusBottom=1, height=2) {
    const material = new THREE.MeshLambertMaterial({color: color});
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height);
    const cilynder = new THREE.Mesh(geometry, material);
    this.scene.add(cilynder)
    return cilynder
  }

  cube(color="green", width=1, height=1, depth=1) {
    const material = new THREE.MeshBasicMaterial({color: color});
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    return cube
  }

  disco_ball() {
    const material = new THREE.MeshStandardMaterial(
      {
        color: "grey",
        flatShading: true,
        map: texture_disco_ball_base,
        normalMap: texture_disco_ball_normal,
        envMap: texture_disco_ball_envmap,
        envMapIntensity: 1,
        roughness: 1,
        metalness: 1,
        roughnessMap: texture_disco_ball_roughness,
      }
    )
    const geometry = new THREE.SphereGeometry()
    const sphere = new THREE.Mesh(geometry, material)
    sphere.castShadow = true
    sphere.receiveShadow = true
    this.scene.add(sphere)
    return sphere
  }

  bastket_ball() {
    const material = new THREE.MeshStandardMaterial(
      {
        map: basketball_texture,
        normalMap: basketball_normal
      }
    )
    const geometry = new THREE.SphereGeometry()
    const sphere = new THREE.Mesh(geometry, material)
    sphere.castShadow = true
    sphere.receiveShadow = true
    this.scene.add(sphere)
    return sphere
  }

  floor(width=93, height=50) {
    const material = new THREE.MeshStandardMaterial({color: "white", map: basket_court_texture, side: THREE.DoubleSide})
    const geometry = new THREE.PlaneGeometry(width, height)
    const floor = new THREE.Mesh(geometry, material)
    floor.receiveShadow = true
    floor.rotation.x = -Math.PI / 2
    this.scene.add(floor)
    return floor
  }
}
