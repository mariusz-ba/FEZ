function Player(settings) {

    this.jumpSpeed = settings.jumpSpeed;
    this.moveSpeed = settings.moveSpeed;
    this.gravity = settings.gravity;
    this.isOnGround = false;

    var daeModel = undefined;

    var elapsed = 0;

    this.update = function () {
        if (daeModel == undefined) return;

        elapsed += 0.06;//delta;
        if (!this.isOnGround) // spada
            daeModel.position.y -= elapsed * elapsed * gravity;
        else
            daeModel.position.y += jumpSpeed;
    }

    this.getPosition = function () {
        return daeModel.position;
    }

    this.loadModel = function (url, callback) {

        var loader = new THREE.ColladaLoader();

        var that = this;

        loader.load(url, function (collada) {

            daeModel = collada.scene;
            daeModel.scale.set(12, 12, 12)

            console.log()


            daeModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    // ...               
                }
            });

            // callback czyli zwr�cenie danych modelu na zewn�trz pliku 
            callback(daeModel);
        })
    }

    this.getModel = function () {
        return daeModel;
    }
}