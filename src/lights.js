import * as THREE from 'three';

export default class Lights {
  constructor(scene, debug=false) {
    this.scene = scene
    this.debug = debug
  }

  ambient(color="grey", intensity=0.5) {
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);
    return light
  }

  directional(
    color="cyan",
    intensity=1,
    position={x: 0, y: 0, z:0},
    target={x: 0, y: 0, z:0}
  ) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(position.x, position.y, position.z);
    light.target.position.set(target.x, target.y, target.z)
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) this.scene.add(new THREE.DirectionalLightHelper(light))
    return light
  }

  spot(
    color="white",
    position={x: 0, y: 0, z:0},
    target={x: 0, y: 0, z:0}
  ) {
    const light = new THREE.SpotLight(color, 1, 0, 0.5, 1, 0)
    light.position.set(position.x, position.y, position.z);
    light.target.position.set(target.x, target.y, target.z)
    light.castShadow = true
    light.receiveShadow = true
    this.scene.add(light)
    if (this.debug) this.scene.add(new THREE.SpotLightHelper(light))
    return light
  }

  spot_volumetric(
    color="white",
    position={x: 0, y: 0, z:0},
    target={x: 0, y: 0, z:0}
  ){
    // Luz
    const light = new THREE.SpotLight(color, 1, 0, 0.5, 1, 0)
    light.position.set(position.x, position.y, position.z);
    light.target.position.set(target.x, target.y, target.z)
    light.castShadow = true
    this.scene.add(light)
    if (this.debug) this.scene.add(new THREE.SpotLightHelper(light))

    // Cone
    const geometry = new THREE.ConeGeometry(5, 10);
    geometry.translate(0, -5, 0);
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
    const cone = new THREE.Mesh(geometry, material);
    cone.position.set(position.x, position.y, position.z);
    cone.castShadow = true
    let vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    let fragmentShader = `
      varying vec2 vUv;
      uniform vec3 color;

      void main() {
        float intensity = vUv.y; // efeito de degradê no cone
        gl_FragColor = vec4(color, intensity);
      }
    `;
    material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      uniforms: {
        color: { value: new THREE.Color(color) }
      },
    });
    cone.material = material;
    this.scene.add(cone)
    return [light, geometry]
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
