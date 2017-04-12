var tmo;

function rotateLeft(camera) {
    if (move_axis >= 3) move_axis = 0;
    else move_axis++
    if ((move_axis == 0 || move_axis == 3) && speed > 0) speed *= -1;
    if ((move_axis == 2 || move_axis == 1) && speed < 0) speed *= -1;
    var it = 0;
    console.log(move_axis, speed)
    tmo = setInterval(function () {
        ++it;
        var tempZ = camera.position.z * Math.cos(Math.PI / 180) - camera.position.x * Math.sin(Math.PI / 180)
        var tempX = camera.position.z * Math.sin(Math.PI / 180) + camera.position.x * Math.cos(Math.PI / 180)
        camera.position.x = tempX;
        camera.position.z = tempZ;
        if (it >= 90) clearInterval(tmo);
    }, 1);
}

function rotateRight(camera) {
    if (move_axis <= 0) move_axis = 3;
    else move_axis--
    if ((move_axis == 0 || move_axis == 3) && speed > 0) speed *= -1;
    if ((move_axis == 2 || move_axis == 1) && speed < 0) speed *= -1;
    var it = 0;

    console.log(move_axis, speed)
    tmo = setInterval(function () {
        ++it;
        var tempZ = camera.position.z * Math.cos(-Math.PI / 180) - camera.position.x * Math.sin(-Math.PI / 180)
        var tempX = camera.position.z * Math.sin(-Math.PI / 180) + camera.position.x * Math.cos(-Math.PI / 180)
        camera.position.x = tempX;
        camera.position.z = tempZ;
        if (it >= 90) clearInterval(tmo);
    }, 1);
}   
