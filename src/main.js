import CommonGeometryElements from "./geometry";
import { scene, animate } from "./scene";
import Lights from "./lights";

const geo_elements = new CommonGeometryElements(scene)
geo_elements.floor();

//geo_elements.basketball();

export const bola = geo_elements.bastket_ball()
bola.position.x = 3
bola.position.y = 1


// --------------------------------- Lights ------------------------------------
const lights = new Lights(scene, false)
lights.ambient()
lights.hemisphere()

const spot1 = lights.spot_volumetric("lime", {x: -30, y:10, z: 0}, {x: -30, y: 0, z: 0})
const spot2 = lights.spot_volumetric("yellow", {x: -15, y:10, z: 0}, {x: -15, y: 0, z: 0})
const spot3 = lights.spot_volumetric("red", {x: 15, y:10, z: 0}, {x: 15, y: 0, z: 0})
const spot4 = lights.spot_volumetric("cyan", {x: 30, y:10, z: 0}, {x: 30, y: 0, z: 0})
const spot5 = lights.spot_volumetric("white", {x: 0, y:10, z: 0}, {x: 0, y: 0, z: 0})
export const spots = [ [spot1, spot3], [spot2, spot4] ]

// ------------------------------- Main run ----------------------------------
animate()
