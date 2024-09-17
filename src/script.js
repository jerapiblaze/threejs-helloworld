import * as THREE from 'three'

// console.log(THREE)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes = Window size
const sizes = {
    // width: 800,
    width: window.innerWidth,
    // height: 600
    height: window.innerHeight
}

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0
mesh.position.y = 0
mesh.position.z = 0

const geometry2 = new THREE.SphereGeometry(1,128,256)
const material2 = new THREE.MeshBasicMaterial({color: 0xffffff})
const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.x = 3
mesh2.position.y = 2
mesh2.position.z = 0

// Put objects to scene
scene.add(mesh)
scene.add(mesh2)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
camera.position.y = 2
camera.position.x = 1
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Execute the renderer
renderer.render(scene, camera)