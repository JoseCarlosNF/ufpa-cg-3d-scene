import CommonGeometryElements from "./geometry";
import { scene, animate } from "./scene";
import Lights from "./lights";

const geo_elements = new CommonGeometryElements(scene)
geo_elements.floor()

export const bola = geo_elements.sphere()
bola.position.x = 3
bola.position.y = 1


// --------------------------------- Lights ------------------------------------
const lights = new Lights(scene, true)
lights.ambient()

const spot1 = lights.spot("lime", {x: -30, y:10, z: 0}, {x: -30, y: 0, z: 0})
const spot2 = lights.spot("purple", {x: -15, y:10, z: 0}, {x: -15, y: 0, z: 0})
const spot3 = lights.spot("red", {x: 15, y:10, z: 0}, {x: 15, y: 0, z: 0})
const spot4 = lights.spot("cyan", {x: 30, y:10, z: 0}, {x: 30, y: 0, z: 0})
const spots = [ [spot1, spot2], [spot3, spot4] ]

// ------------------------------- Main run ----------------------------------
animate()
