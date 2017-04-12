﻿function ConturedBlock(_sizeX,_sizeZ,_sizeY,_texture, _contureColor) {
    var m_sizeX = _sizeX;
    var m_sizeZ = _sizeZ;
    var m_sizeY = _sizeY;
    var m_texture = _texture;
    var m_contureColor = _contureColor;

    var m_line;
    var m_mesh;

    var container = new THREE.Object3D();

    function init() {

        var cubeGeometry = new THREE.CubeGeometry(m_sizeX, m_sizeY, m_sizeZ);

        var cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff, side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture(m_texture)
        })

        m_mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

        container.add(m_mesh);

        var lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, -m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));
        
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));

        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, -m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, m_sizeY / 2, -m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, -m_sizeY / 2, -m_sizeZ / 2));

        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, -m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, -m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(-m_sizeX / 2, m_sizeY / 2, m_sizeZ / 2));
        lineGeometry.vertices.push(new THREE.Vector3(m_sizeX / 2, m_sizeY / 2, m_sizeZ / 2));

        m_line = new THREE.Line(lineGeometry, lineMaterial);

        container.add(m_line)

    }

    this.getBlock = function () {
        return container;
    }

    this.setContureColor = function(color){
        m_contureColor = color;
        m_line.material.color.setHex(m_contureColor);
    }

    init();
}