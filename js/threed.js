
let threeJs = (sectionId, canvasId) => {
if (sectionId && canvasId) {
  let ww = document.getElementById(sectionId).clientWidth,
      wh = document.getElementById(sectionId).clientHeight;
  
  let canvas = document.getElementsByTagName('canvas')[0];
  let renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setClearColor('rgb(0,0,0)');
  renderer.setSize(ww, wh);

  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(50, ww / wh, 1, 1000);
  camera.position.set(0, 0, 200);

  let sphere = new THREE.SphereBufferGeometry(50,50,50);
  let spherePositions = sphere.attributes.position.array.slice(0);
  let temp = sphere.attributes.position.array;
  let material = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: document.getElementById("wrapVertexShader").textContent,
    fragmentShader: document.getElementById("wrapFragmentShader").textContent
  });
  let colors = new Float32Array(sphere.attributes.position.array.length);

  for(let i=0;i<sphere.attributes.position.array.length;i+=3){

    let perlin = Math.abs(noise.simplex3(sphere.attributes.position.array[i]*0.01, sphere.attributes.position.array[i+1]*0.01, sphere.attributes.position.array[i+2]*0.01));
    let color = new THREE.Vector3(perlin, 0.7, 0.8);
    color.toArray(colors, i);
  }

  sphere.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

  let mesh = new THREE.Mesh(sphere, material);

  scene.add(mesh);

  window.addEventListener("resize", function() {
    if(document.getElementById(sectionId)){
      ww = document.getElementById(sectionId).clientWidth;
      wh = document.getElementById(sectionId).clientHeight;
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, wh);
    }
  });

  function render(a) {
    requestAnimationFrame(render);
    for (let i = 0; i < temp.length; i+=3) {
      let perlin = noise.simplex3(temp[i]*0.008+a*0.0005,temp[i+1]*0.01+a*0.0005, temp[i+2]*0.008);
      temp[i] = spherePositions[i] + (perlin * 10);
      temp[i+1] = spherePositions[i+1] + (perlin * 10);
      temp[i+2] = spherePositions[i+2] + (perlin * 10);
    }
    sphere.addAttribute('position', new THREE.BufferAttribute(temp, 3));
    sphere.applyMatrix(new THREE.Matrix4().makeRotationY(a*0.001));

    renderer.render(scene, camera);
  }

  requestAnimationFrame(render);
  }
};
