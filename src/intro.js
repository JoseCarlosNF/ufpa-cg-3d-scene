import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Iluminação
CriarLuzAmbiente('white', 1);
CriarLuzDirecional('orange', 1, 2, 2, 2);
CriarLuzSpot('cyan', 1, 3, 2, 1);

// TODO:
// - [ ] textura
// - [ ] iluminação
