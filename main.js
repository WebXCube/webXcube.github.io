import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Import GLTFLoader
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 2000);

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

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    // Rotate the model
    scene.traverse((child) => {
        if (child.isMesh) {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        }
    });

    renderer.render(scene, camera);
}

animate();
