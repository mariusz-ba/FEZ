function Helicopter() {

    var daeModel
    var wirnik

    this.velocity_up = 0;
    this.velocity_forward = 0;
    this.rotation = 0;

    this.direction = {
        x: 0,
        z: 1
    };

    var object = new THREE.Object3D();

    this.getObject = function() {
        return object;
    }

    this.cameraPositions = [
        { x: 0, y: 10, z: -20 }, // BACK
        { x: 0, y: 10, z: 20 }, // FRONT
        { x: 20, y: 10, z: 0 }, // LEFT
        { x: -20, y: 10, z: 0 }, // RIGHT
        { x: 0, y: 0.5, z: 2 }, // INSIDE
    ];

    this.setCamera = function(index) {
        this.camera.position.x = this.cameraPositions[index].x;
        this.camera.position.y = this.cameraPositions[index].y;
        this.camera.position.z = this.cameraPositions[index].z;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        if (index == 4)
            this.camera.lookAt(new THREE.Vector3(0, 1, 10));
    }

    // Camera BACK
    this.camera = new THREE.PerspectiveCamera(
        45, // k�t patrzenia kamery (FOV - field of view)
        4 / 3, // proporcje widoku, powinny odpowiada� proporjom naszego ekranu przegl�darki
        0.1, // minimalna renderowana odleg�o��
        10000 // maxymalna renderowana odleg�o��
    );

    this.camera.position.x = 0;
    this.camera.position.y = 20;
    this.camera.position.z = -20;

    this.loadModel = function (url, callback) {

        var loader = new THREE.ColladaLoader();

        var that = this;

        loader.load(url, function (collada) {

            daeModel = collada.scene;
            daeModel.scale.set(1, 1, 1)

            wirnik = daeModel.getObjectByName("main_rotor", true)  // o tym mowa w punkcie 3  
            
            //po za�adowaniu jest mo�liwy dost�p do sk�adnik�w / mesh�w modelu:

            daeModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    // ...               
                }
            });

            // callback czyli zwr�cenie danych modelu na zewn�trz pliku 
            object.add(daeModel);
            object.add(that.camera);
            that.camera.lookAt(daeModel.position);
            callback(object)

        })
    }

    this.getModel = function () {
        return daeModel
    }

    this.update = function () {
        // update rotation to direction
        var x = this.direction.z * Math.sin(object.rotation.y) + this.direction.x * Math.cos(object.rotation.y);
        var z = this.direction.z * Math.cos(object.rotation.y) - this.direction.x * Math.sin(object.rotation.y);

        /*
        // ruch wirnika
        wirnik.rotation.z += 0.16;
        daeModel.position.y += this.velocity_up;
        this.camera.position.y += this.velocity_up;

        daeModel.position.x += x * this.velocity_forward;
        daeModel.position.z += z * this.velocity_forward;
        this.camera.position.x += x * this.velocity_forward;
        this.camera.position.z += z * this.velocity_forward;

        this.camera.lookAt(daeModel.position);

        // set rotation to camera

       // console.log(x, z);

        //daeModel.rotation.y = this.rotation / 10 * Math.PI / 180;
        */
        wirnik.rotation.z += 0.16;
        object.position.y += this.velocity_up;
        //object.position.x += x * this.velocity_forward;
        //object.position.z += z * this.velocity_forward;

        object.translateZ(this.velocity_forward);

        object.rotation.y -= this.rotation / 100 * Math.PI / 180;
    }

    this.getrot = function () {
        return object.rotation.y;
    }

    this.gethi = function () {
        return object.position.y
    }
}