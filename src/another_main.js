import CommonGeometryElements from "./geometry";
import { scene, animate } from "./scene";
import Lights from "./lights";

const geo_elements = new CommonGeometryElements(scene)
const ligths = new Lights(scene, true)

const baixo = geo_elements.cube("red", 2, 1, 1, 1.5)
baixo.position.x = 1.5

const lado = geo_elements.cube("lime", 1, 4)
lado.position.x = 0
lado.position.y = 1.5

ligths.directional()

animate()

/* TODO:
 * - [ ] textura
 * - [ ] iluminação
 */
