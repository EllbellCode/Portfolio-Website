import * as THREE from 'three'
// '/node_modules/three/build/three.module.js';
import { GLTFLoader } from 'GLTF'
// '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha: true,});// alpha sets the background to be transparent
const container = document.getElementById('three__container');

// Add Renderer to container
container.appendChild( renderer.domElement );

// Renderer Ratio
renderer.setPixelRatio( container.clientWidth / container.clientHeight );
renderer.setSize(container.clientWidth, container.clientHeight);


// Light
// Ambient Light did not work so had to use multiple directional lights
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight1.position.set(0, 1, 0);
scene.add(directionalLight1);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(1, 0, 0);
scene.add(directionalLight2);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight3.position.set(0, 0, 1); 
scene.add(directionalLight3);

// Load 3d Object
const loader = new GLTFLoader();
let model;
loader.load( '3D/computer2.glb', 
function ( gltf ) {
	model = gltf.scene;
	scene.add(model);
},
function (xhr) {
    // Called while loading is progressing
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, 
function ( error ) {
	console.error('An error happened', error );
} );

// Camera Position
camera.position.z = 0.7;
camera.position.y = 0.4;

// Dynamic Container Resixing
// Update camera aspect ratio and renderer size
function onContainerResize() {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(container.clientWidth, container.clientHeight);
  }
window.addEventListener('resize', onContainerResize, false);

// Animate Object
function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	if (model) {
		model.rotation.y += 0.02;
	}
}
animate();