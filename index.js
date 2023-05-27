// Include Three.js library

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

// Create a sphere geometry for the globe
const geometry = new THREE.SphereGeometry(2, 32, 32);

// Load the globe texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('globe.webp');

// Apply the texture to a material
const material = new THREE.MeshBasicMaterial({ map: texture });

// Create a mesh and add it to the scene
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the globe
  globe.rotation.y += 0.005;

  renderer.render(scene, camera);
}

// Start the animation
animate();
