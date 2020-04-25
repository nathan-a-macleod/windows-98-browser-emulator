// Code - mostly for the blender 1.0 simulator

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x737373);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.aspect = window.innerWidth * 0.798, window.innerHeight * 0.865;
camera.position.z = 2;
camera.position.x = 2;
camera.position.y = 2;
camera.lookAt(0, -1, 0);

// Create the cameras origin point: 
var cameraPivot = new THREE.Object3D();
cameraPivot.position.set(0, 0, 0);

// Add the camera to the pivot, so that we can rotate just the pivot:
cameraPivot.add(camera);
scene.add(cameraPivot);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth * 0.798, window.innerHeight * 0.865);
document.getElementById('cadSoftwareWindow').appendChild(renderer.domElement);

// Default cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
var directionalLight = new THREE.DirectionalLight(0xcccccc);
directionalLight.position.set(8, 5, 10);
scene.add(directionalLight);

var ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

// Grid Floor: 
var gridHelper = new THREE.GridHelper(15, 20, 0x62595c, 0x62595c);
gridHelper.position.y += -0.5;
scene.add(gridHelper);

function animate() {
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth * 0.798, window.innerHeight * 0.865;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.798, window.innerHeight * 0.865);
  });
  
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();

// Stuff For The menus and minimising & maximising files:
document.getElementById('readmeFile').addEventListener('click', function(){
  document.getElementById('readmeWindow').style.display = "block";
  document.getElementById('cadSoftwareWindow').style.display = "none";
});

document.getElementById('autocadFile').addEventListener('click', function(){
  document.getElementById('readmeWindow').style.display = "none";
  document.getElementById('cadSoftwareWindow').style.display = "block";
});