//Morgan Lincicum
//CPSC444 Lab 6

import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

// Renderer
const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// Cube
const geometry =
    new THREE.BoxGeometry();

const material =
    new THREE.MeshPhongMaterial({
        color: 0x888888
    });

const cube =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(cube);

//Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);

scene.add(ambientLight);

// Single Directional Light
const directionalLight =
    new THREE.DirectionalLight(
        0xff00ff,
        1.0
    );

directionalLight.position.set(
    0,
    -1,
    0
);

scene.add(
    directionalLight
);

// Camera Position
camera.position.z = 3;

let theta = 0;
let lastTime = 0;

// Animation Loop
function animate()
{
    requestAnimationFrame(
        animate
    );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    theta += 1;
    lastTime += 1;

    if (lastTime >= 100){
        let r = Math.random();
        let g = Math.random();
        let b = Math.random();

        directionalLight.color.setRGB(r, g, b);

        lastTime = 0;
    }

    renderer.render(
        scene,
        camera
    );
}

animate();

// Resize Handling
window.addEventListener(
    "resize",
    () =>
    {
        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);