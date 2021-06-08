let scene , camera,renderer,cube;
function init(){
   scene = new THREE.Scene()
   camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  //创建黑色场景-默认
   renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // const geometry = new THREE.ParametricBufferGeometry( 3,3,3 );
  // const material = new THREE.MeshBasicMaterial( { color: "white" } );
  // const klein = new THREE.Mesh( ginit()eometry, material );
  const geometry1 = new THREE.BoxGeometry(2,2,2)
  //const material1 = new THREE.MeshBasicMaterial({color:'red'})
  const texture = new THREE.TextureLoader().load('./Rf6206ca11e4b8609d195c80751ab00d1.jpg')
  const material1 = new THREE.MeshBasicMaterial({map:texture})
  cube = new THREE.Mesh(geometry1,material1);
  scene.add( cube );
  camera.position.z = 5;
 
}
const onWindowResize = () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
}
const animate = ()=>{
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene,camera);
}
window.addEventListener('resize',onWindowResize,false);
init()
animate()

