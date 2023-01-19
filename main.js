import './style.css'
import * as THREE from 'three';
import {GLTFLoder} from 'three/examples/jsm/loaders/GLTFLoader';
const canvas = document.querySelector('.webg')
const scene = new THREE.Scene()

const loader = new GLTFLoder()
loader.load('pen/scene.gltf',function(gltf){
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(0.1,0.1,0.1)
},function (error){
    console.log('an error accure')
})

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(2,2,5)
scene.add(light)

const size  = {
    Width: window.innerWidth,
    height: window.innerHeight
}

const camera= new THREE.PerspectiveCamera(75,size.Width/size.height,0.1,100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(size.Width,size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled=true
renderer.render(scene,camera)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()