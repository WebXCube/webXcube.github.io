import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Updated import path

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load GLTF model
const loader = new GLTFLoader();
loader.load(
    'models/table_and_chairs.glb',
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();