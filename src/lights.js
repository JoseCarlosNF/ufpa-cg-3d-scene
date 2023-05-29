import * as THREE from 'three';

const loader = new THREE.TextureLoader()
const multi_colors_lights = loader.load("multi_circle_colors.jpg")

export default class Lights {
  constructor(scene, debug=false) {
    this.scene = scene
    this.debug = debug
  }

  ambient(color="black", intensity=1) {
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);
    return light
  }

  directional(color="cyan", intensity=1, x=0, y=0, z=0) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z)
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) {
      const lightsHelpers = new THREE.DirectionalLightHelper(light);
      this.scene.add(lightsHelpers)
    }
    return light
  }

  spot(color="lime", intensity=1, x=0, y=0, z=0, angle) {
    const light = new THREE.SpotLight(color, intensity, 10, angle);
    light.position.set(x, y, z);
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) {
      const lightsHelpers = new THREE.SpotLightHelper(light);
      this.scene.add(lightsHelpers)
    }
    return light
  }

  disco_spot(
    color="white",
    position={x: 0, y: 0, z:0},
    target={x: 0, y: 0, z:0}
  ) {
    const light = new THREE.SpotLight(color, 1, 0, 0.5, 1, 0)
    light.position.set(position.x, position.y, position.z);
    light.target.position.set(target.x, target.y, target.z)
    //light.map = multi_colors_lights
    light.castShadow = true
    light.receiveShadow = true
    this.scene.add(light)
    if (this.debug) this.scene.add(new THREE.SpotLightHelper(light))
    return light
  }

  point(color="lime", intensity=1, dist=12, x=0, y=0, z=0) {
    const light = new THREE.PointLight(color, intensity, dist);
    light.position.set(x, y, z);
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) {
      const lightsHelpers = new THREE.PointLightHelper(light);
      this.scene.add(lightsHelpers)
    }
    return light
  }

  hemisphere() {
    const light = new THREE.HemisphereLight( "#ddd", "grey", 0.03);
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) {
      const lightsHelpers = new THREE.HemisphereLightHelper(light);
      this.scene.add(lightsHelpers)
    }
    return light
  }
}
