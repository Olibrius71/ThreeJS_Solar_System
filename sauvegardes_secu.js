//console.log(earth.position.x + "   "+ earth.position.y + "   " + earth.positionY);
//addPosition(earth, 0.03, 0.03, 0.1);
//console.log(earth.position.x + "   "+ earth.position.y + "   " + earth.positionY);

//addRotation(earth, Math.PI / 4, 0, 11);

//addPosition(sun,0.2,0.2,3);
//addRotation(sun, 0.1, 0.1, 0.2)
/*
if (sun.position.y < 5) {
    sun.position.x += 0.1;
    sun.position.y += 0.2;
    showPosition(sun);
}
 */








/*
earth.position.x = sun.position.x + 1;
earth.rotation.y += 0.1;

 */

/*
if (camera.position.z >3) {
camera.position.x -= 0.2;
camera.position.z -= 0.2;
}
*/




function setPosition(element, x, y, z = 0) {
    element.position.set(x,y,z);
    element.position.y = y;
    element.position.y = z;
}
function addPosition(element, x, y, z = 0) {
    element.position.x += x;
    element.position.y += y;
    element.position.y += z;
}

function setRotation(element, x, y, z = 0) {
    element.rotation.x = x;
    element.rotation.y = y;
    element.rotation.y = z;
}
function addRotation(element, x, y, z = 0) {
    element.rotation.x += x;
    element.rotation.y += y;
    element.rotation.y += z;
}


function showPosition(element) {
    setInterval(() => {
        console.log(element.position.x + "    " + element.position.y + "   " + element.position.z);
    }, 300);
}
function showRotation(element) {
    setInterval(() => {
        console.log(element.rotation.x + "    " + element.rotation.y + "   " + element.rotation.z);
    }, 300);
}
