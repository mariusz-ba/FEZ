function Plane(size, posX, posY, posZ) {
    var container = new THREE.Object3D();

    function init() {
        var plainGeometry = new THREE.PlaneGeometry(size, size, 1);
        var plainMaterial = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
        var plane = new THREE.Mesh(plainGeometry, plainMaterial);
        plane.rotation.x += Math.PI/2
        plane.position.x = posX;
        plane.position.y = posY;
        plane.position.z = posZ;
        plane.name = "plane"
        container.add(plane)

        var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        var geometry = new THREE.Geometry();

        geometry.vertices.push(new THREE.Vector3(posX - size / 2, posY, posZ + size / 2));
        geometry.vertices.push(new THREE.Vector3(posX + size / 2, posY, posZ + size / 2));
        geometry.vertices.push(new THREE.Vector3(posX + size / 2, posY, posZ - size / 2));
        geometry.vertices.push(new THREE.Vector3(posX - size / 2, posY, posZ - size / 2));
        geometry.vertices.push(new THREE.Vector3(posX - size / 2, posY, posZ + size / 2));


        var line = new THREE.Line(geometry, lineMaterial);
        container.add(line)
    }
    init();
    this.getPlane = function () {
        return container
    }
}