import * as THREE from 'three';

export default class Lights {
  constructor(scene, debug=false) {
    this.scene = scene
    this.debug = debug
  }

  ambient(color="red", intensity=1) {
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);
  }

  directional(color="cyan", intensity=1, x=0, y=0, z=0) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z)
    light.target.position.set(0, 0, 0)
    light.castShadow = true;
    this.scene.add(light)
    this.scene.add(light.target)
    const lightsHelpers = new THREE.DirectionalLightHelper(light);
    this.debug ? this.scene.add(lightsHelpers) : null
  }

  spot(color="purple", intensity=1, x=0, y=0, z=0) {
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(x, y, z);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    this.scene.add(light)
    this.scene.add(light.target)
    const lightsHelpers = new THREE.SpotLightHelper(light);
    this.debug ? this.scene.add(lightsHelpers) : null
  }
}
