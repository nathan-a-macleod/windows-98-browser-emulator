var speed = 0.2;
var isWindowClicked = false;
var mouseXBefore;
var mouseYBefore;
var mouseXNow;
var mouseYNow; 
var rotateCameraLeft;
var rotateCameraRight;

// *** Make the speed smaller if the camera is closer to the default cube. ***

if (document.addEventListener) {
	// IE9, Chrome, Safari, Opera
	document.addEventListener("mousewheel", mouseScroll, false);
	// Firefox
	document.addEventListener("DOMMouseScroll", mouseScroll, false);
}
// IE 6/7/8
else document.attachEvent("onmousewheel", MouseWheelHandler);

function mouseScroll(e){
  if (scrolling == true){
    var e = window.event || e; // old IE support
  	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  	// delta returns a value of 1 (scroll up), 0 (not scrolling) or -1 (scrolling down)
  	
  	if (delta == 1){
  	  // User is scrolling up
      camera.translateZ(-speed);
  	} else if (delta == -1){
  	  // User is scrolling up
      camera.translateZ(speed);
  	}
  }
}

// For orbiting the scene:
window.addEventListener('mousedown', ()=> {
    
  isWindowClicked = true;
  
  mouseXBefore = event.clientX;
  mouseYBefore = event.clientY;
});

window.addEventListener('mouseup', ()=> {
  isWindowClicked = false;
});

window.addEventListener('mousemove', ()=> {
  if ((isWindowClicked === true)){
    mouseXNow = event.clientX;
    mouseYNow = event.clientY;
    
    cameraOrbitY()
    cameraOrbitX()
  }
});

function cameraOrbitY(){
  if (((mouseXNow - mouseXBefore)/2000 <= 0.05) && ((mouseXNow - mouseXBefore)/4000 >= -0.05)){
    cameraPivot.rotation.y -= (mouseXNow - mouseXBefore)/2000;
  } else if ((mouseXNow - mouseXBefore)/2000 > 0){
    cameraPivot.rotation.y -= 0.05;
  } else {
    cameraPivot.rotation.y += 0.05;
  }
}

function cameraOrbitX(){
  if (cameraPivot.position.y >= 5){
    cameraPivot.position.y = 5;
  } else if (cameraPivot.position.y <= -10){
    cameraPivot.position.y = -10;
  }
  
  cameraPivot.position.y += (mouseYNow - mouseYBefore)/1000;
  camera.lookAt(0, 0, 0);
}