import CommonGeometryElements from "./geometry";
import { scene, animate } from "./scene";
import Lights from "./lights";

const geo_elements = new CommonGeometryElements(scene)
const lights = new Lights(scene, true)
geo_elements.floor()

const cilindro = geo_elements.cylinder("white")
cilindro.position.y = 1

export const bola = geo_elements.sphere()
bola.position.x = 3
bola.position.y = 1

lights.ambient()
lights.point("red", 5, 50, 0, 1, -5)
lights.point("purple", 50, 10, 5, 1, 0)
lights.point("lime", 5, 10, -5, 1, 0)
lights.point("cyan", 5, 50, 0, 1, 5)

animate()

/* TODO:
 * - [ ] textura
 * - [ ] iluminação
 */
