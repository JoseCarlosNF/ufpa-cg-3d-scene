import CommonGeometryElements from "./geometry";
import { renderer, camera, scene, axesHelper} from "./scene";
import Lights from "./lights";

// Enable/Disable Helpers
const helpers = false
if (helpers) scene.add(axesHelper)

// --------------------------- Geometry elements ------------------------------
const geo_elements = new CommonGeometryElements(scene)
geo_elements.floor()

const bola = geo_elements.bastket_ball()

const disco_ball = geo_elements.disco_ball()
disco_ball.position.y = 7.5

// --------------------------------- Lights ------------------------------------
const lights = new Lights(scene, helpers)
lights.ambient()
lights.hemisphere()

const disco_spot1 = lights.disco_spot("lime", {x: -30, y:10, z: 0}, {x: -30, y: 0, z: 0})
const disco_spot2 = lights.disco_spot("purple", {x: -15, y:10, z: 0}, {x: -15, y: 0, z: 0})
const disco_spot3 = lights.disco_spot("red", {x: 15, y:10, z: 0}, {x: 15, y: 0, z: 0})
const disco_spot4 = lights.disco_spot("cyan", {x: 30, y:10, z: 0}, {x: 30, y: 0, z: 0})

const disco_point1 = lights.point("lime", 5, 10, -30, 5, 0)
const disco_point2 = lights.point("purple", 10, 10, -15, 5, 0)
const disco_point3 = lights.point("red", 5, 10, 15, 5, 0)
const disco_point4 = lights.point("cyan", 5, 10, 30, 5, 0)

const spots1 = [
  [disco_spot1,disco_point1],
  [disco_spot3,disco_point3],
]

const spots2 = [
  [disco_spot2,disco_point2],
  [disco_spot4,disco_point4],
]

spots1.forEach(spot => console.log(spot[1]))

// ------------------------------- Main loop ----------------------------------
let t = 0

// Every reload to load new scene after camera chage
const animate = () => {
  requestAnimationFrame(animate);

  t += 0.07 // velocity of moviment

  spots1.forEach(spot => {
    spot[0].target.position.set(
      spot[0].target.position.x+Math.sin(0.5*t),
      spot[0].target.position.y,
      spot[0].target.position.z+Math.cos(0.5*t)
    )
    spot[0].target.updateMatrixWorld()
  })

  spots2.forEach(spot => {
    spot[0].target.position.set(
      spot[0].target.position.x+-Math.sin(0.5*t),
      spot[0].target.position.y,
      spot[0].target.position.z+Math.cos(0.5*t)
    )
    spot[0].target.updateMatrixWorld()
  })

  // Rotation around axis
  bola.rotation.x = 3*Math.sin(0.5*t)*Math.cos(0)
  bola.rotation.z = 3*Math.cos(0.5*t)

  // Orbit the cylinder
  bola.position.z = 3*Math.sin(0.5*t)
  bola.position.x = 3*Math.cos(0.5*t)

  // Jump ball
  bola.position.y = 2+1*Math.cos(t*2)

  renderer.render(scene, camera);
}

animate()
