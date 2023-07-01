import * as THREE from 'three';

export default class Lights {
  constructor(scene, debug=false) {
    this.scene = scene
    this.debug = debug
  }

  ambient(color="#000", intensity=1) {
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);
  }

  directional(color="#FFF", intensity=1, x=0, y=0, z=0) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z)
    light.target.position.set(0, 0, 0)
    light.castShadow = true;
    this.scene.add(light)
    this.scene.add(light.target)
    const lightsHelpers = new THREE.DirectionalLightHelper(light);
    this.debug ? this.scene.add(lightsHelpers) : null
  }

  spot(color="#FFBF00", intensity=1, x=0, y=0, z=0) {
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(x, y, z);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    this.scene.add(light)
    this.scene.add(light.target)
    const lightsHelpers = new THREE.SpotLightHelper(light);
    this.debug ? this.scene.add(lightsHelpers) : null
  }

  point(color="#FFBF00", intensity=1, dist=12, x=0, y=0, z=0) {
    const light = new THREE.PointLight(color, intensity, dist);
    light.position.set(x, y, z);
    light.castShadow = true;
    this.scene.add(light)
    this.scene.add(light.target)
    const lightsHelpers = new THREE.PointLightHelper(light);
    this.debug ? this.scene.add(lightsHelpers) : null
  }
}
