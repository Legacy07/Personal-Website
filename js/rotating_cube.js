// once everything is loaded, we run our Three.js stuff.
$(function() {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(200, 180);

    var mesh = createMesh(new THREE.CubeGeometry(10, 10, 10));
    // add the mesh to the scene
    scene.add(mesh);

    // position and point the camera to the center of the scene
    camera.position.x = 20;
    camera.position.y = 70;
    camera.position.z = 100;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // add the output of the renderer to the html element
    $("#WebGL-output").append(renderer.domElement);

    // call the render function
    var step = 0;
    var step2 = 0;
    render();

    function createMesh(geom) {

        // assign two materials
        var meshMaterial = new THREE.MeshNormalMaterial();
        meshMaterial.side = THREE.DoubleSide;
        var wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = true;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

        return mesh;
    }

    function render() {

        if(renderer.domElement.width !== window.innerWidth || renderer.domElement.height !== window.innerHeight) {
            renderer.setSize(window.innerWidth, window.innerHeight,false); 
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        step += 0.01;
        step2 += 0.015;
        mesh.rotation.y = step;
        mesh.rotation.z = step2;

        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }


});