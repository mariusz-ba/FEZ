function LevelLoader() {
    var container = new THREE.Object3D();
    var blockArray = []


    for (var i = 0; i < LevelData.length; i++)
    {
        var Block = Blocks[LevelData[i].type];
        var tempCube = new ConturedBlock(Block.width, Block.deep, Block.height, Block.texture, Block.conture, i)
        tempCube.getBlock().position.x = LevelData[i].x
        tempCube.getBlock().position.z = LevelData[i].z
        tempCube.getBlock().position.y = LevelData[i].y 
        tempCube.getBlock().activable = Block.activable;
        tempCube.getBlock().moveable = Block.movable
        tempCube.getBlock().name = "cube";
        blockArray.push(tempCube);
        container.add(tempCube.getBlock());
    }
    return {
        contaier: container,
        array: blockArray,
        source: LevelData
    };
}