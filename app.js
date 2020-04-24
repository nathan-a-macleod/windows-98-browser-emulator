var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.aspect = window.innerWidth * 0.785, window.innerHeight * 0.85;
camera.position.z = 2;

// Create the cameras origin point: 
var cameraPivot = new THREE.Object3D();
cameraPivot.position.set(0, 0, 0);

// Add the camera to the pivot, so that we can rotate just the pivot:
cameraPivot.add(camera);
scene.add(cameraPivot);

var renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize(window.innerWidth * 0.785, window.innerHeight * 0.85);
renderer.setPixelRatio(0.8)
document.getElementById('autoCadWindow').appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
cube.rotation.y += 0.5;
scene.add(cube);

var directionalLight = new THREE.DirectionalLight(0xcccccc);
directionalLight.position.set(8, 5, 10);
scene.add(directionalLight);

var ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

function animate() {
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth * 0.785, window.innerHeight * 0.85;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.785, window.innerHeight * 0.85);
  });
  
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();