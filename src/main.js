// Importando controle de orbitas
// Server para controlar a camera (posição)
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Configurações básicas
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
// var camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/-2, window.innerHeight/2, 1, 1000);
const renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
//
const controlador = new OrbitControls(camera, renderer.domElement);

// Função para criar o cubo
function criarCuboPadrao() {
  const pA = new THREE.Vector3( 0, 0, 2 );
  const pB = new THREE.Vector3( 2, 0, 2 );
  const pC = new THREE.Vector3( 2, 2, 2 );
  const pD = new THREE.Vector3( 0, 2, 2 );
  const pE = new THREE.Vector3( 0, 0, 0 );
  const pF = new THREE.Vector3( 2, 0, 0 );
  const pG = new THREE.Vector3( 2, 2, 0 );
  const pH = new THREE.Vector3( 0, 2, 0 );

  const pontos = [];

  // Face frente
  pontos.push(pA);// A
  pontos.push(pB);// B
  pontos.push(pC);// C
  pontos.push(pD);// D
  pontos.push(pA);// A

  // Face esquerda
  pontos.push(pE);// E
  pontos.push(pH);// H
  pontos.push(pD);// D
  pontos.push(pA);// A
  pontos.push(pE);// E

  // Face fundo
  pontos.push(pF);// F
  pontos.push(pG);// G
  pontos.push(pH);// H
  pontos.push(pE);// E
  pontos.push(pF);// F

  // Face direita
  pontos.push(pB);// B
  pontos.push(pC);// C
  pontos.push(pG);// G
  pontos.push(pF);// F
  pontos.push(pB);// B

  // Criar geometria, esqueleto
  const geometry = new THREE.BufferGeometry().setFromPoints(pontos);

  // Material - cor da linha
  const material = new THREE.LineBasicMaterial({color: 0x00ffff});

  // Malha
  const line = new THREE.Line(geometry, material);
  line.scale.set(1, 1, 1);
  line.position.set(0, 0, 0);

  scene.add(line);
}

// Projeção Obliqua Cabinet -  Poligono Red
function criarCuboPadraoB() {
  const pbA = new THREE.Vector3( 0.86, 0.5, 0 );
  const pbB = new THREE.Vector3( 2.86, 0.5, 0 );
  const pbC = new THREE.Vector3( 2.86, 2.5, 0 );
  const pbD = new THREE.Vector3( 0.86, 2.5, 0 );
  const pbE = new THREE.Vector3( 0, 0, 0 );
  const pbF = new THREE.Vector3( 2, 0, 0 );
  const pbG = new THREE.Vector3( 2, 2, 0 );
  const pbH = new THREE.Vector3( 0, 2, 0 );

  const pontosB = [];

  // Face frente
  pontosB.push(pbA); // A
  pontosB.push(pbB); // B
  pontosB.push(pbC); // C
  pontosB.push(pbD); // D
  pontosB.push(pbA); // A

  // Face esquerda
  pontosB.push(pbE);// E
  pontosB.push(pbH);// H
  pontosB.push(pbD);// D
  pontosB.push(pbA);// A
  pontosB.push(pbE);// E

  // Face fundo
  pontosB.push(pbF);// F
  pontosB.push(pbG);// G
  pontosB.push(pbH);// H
  pontosB.push(pbE);// E
  pontosB.push(pbF);// F

  // Face direita
  pontosB.push(pbB);// B
  pontosB.push(pbC);// C
  pontosB.push(pbG);// G
  pontosB.push(pbF);// F
  pontosB.push(pbB);// B

  // Face inferior
  pontosB.push(pbA);// A
  pontosB.push(pbE);// E
  pontosB.push(pbF);// F
  pontosB.push(pbB);// B
  pontosB.push(pbA);// A

  // Face superior
  pontosB.push(pbD);// D
  pontosB.push(pbH);// H
  pontosB.push(pbG);// G
  pontosB.push(pbC);// C
  pontosB.push(pbD);// D

  const geometryB = new THREE.BufferGeometry().setFromPoints(pontosB);

  const materialB = new THREE.LineBasicMaterial({color: 'red'});

  const lineB = new THREE.Line(geometryB, materialB);
  lineB.scale.set(1, 1, 1);
  lineB.position.set(-10, 0, 0);
  scene.add(lineB);
}

// Projeção Obliqua Cavaleira
function criarCuboPadraoC() {
  const pcA = new THREE.Vector3( 1.72, 1, 0 );
  const pcB = new THREE.Vector3( 3.72, 1, 0 );
  const pcC = new THREE.Vector3( 3.72, 3, 0 );
  const pcD = new THREE.Vector3( 1.72, 3, 0 );
  const pcE = new THREE.Vector3( 0, 0, 0 );
  const pcF = new THREE.Vector3( 2, 0, 0 );
  const pcG = new THREE.Vector3( 2, 2, 0 );
  const pcH = new THREE.Vector3( 0, 2, 0 );

  const pontosC = [];

  // Face frente
  pontosC.push(pcA); // A
  pontosC.push(pcB); // B
  pontosC.push(pcC); // C
  pontosC.push(pcD); // D
  pontosC.push(pcA); // A

  // Face esquerda
  pontosC.push(pcE);// E
  pontosC.push(pcH);// H
  pontosC.push(pcD);// D
  pontosC.push(pcA);// A
  pontosC.push(pcE);// E

  // Face fundo
  pontosC.push(pcF);// F
  pontosC.push(pcG);// G
  pontosC.push(pcH);// H
  pontosC.push(pcE);// E
  pontosC.push(pcF);// F

  // Face direita
  pontosC.push(pcB);// B
  pontosC.push(pcC);// C
  pontosC.push(pcG);// G
  pontosC.push(pcF);// F
  pontosC.push(pcB);// B

  // Face inferior
  pontosC.push(pcA);// A
  pontosC.push(pcE);// E
  pontosC.push(pcF);// F
  pontosC.push(pcB);// B
  pontosC.push(pcA);// A

  // Face superior
  pontosC.push(pcD);// D
  pontosC.push(pcH);// H
  pontosC.push(pcG);// G
  pontosC.push(pcC);// C
  pontosC.push(pcD);// D

  // Criar geometria, esqueleto
  const geometryC = new THREE.BufferGeometry().setFromPoints(pontosC);

  // Material - cor da linha
  const materialC = new THREE.LineBasicMaterial({color: 'green'});

  // Malha
  const lineC = new THREE.Line(geometryC, materialC);
  lineC.scale.set(1, 1, 1);
  lineC.position.set(10, 0, -1);

  scene.add(lineC);
}


// Chamar as funções do cuboi
criarCuboPadrao();
criarCuboPadraoB();
criarCuboPadraoC();

camera.position.z = 5;

// Mover, animar a cena, posição da camera
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
