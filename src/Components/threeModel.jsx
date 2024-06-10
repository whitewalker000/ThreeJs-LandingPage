import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

const ThreeModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 8); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
        directionalLight.position.set(5, 10, 7.5).normalize();
        scene.add(directionalLight);

        // Load 3D model
        const loader = new GLTFLoader();
        loader.load('/assets/scene.gltf', (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Compute the bounding box of the model
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            // Adjust the model position and scale to fit within the camera view
            const maxDimension = Math.max(size.x, size.y, size.z);
            const scaleFactor = 4 / maxDimension; // Adjust this factor as needed

            model.scale.set(scaleFactor, scaleFactor, scaleFactor);
            model.position.set(-center.x * scaleFactor, -center.y * scaleFactor, -center.z * scaleFactor);

            // Animation Mixer
            const mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });

            // Animation loop
            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                const delta = clock.getDelta();
                mixer.update(delta);
                renderer.render(scene, camera);
            };
            animate();
        });

        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableZoom = false;

        // Handle window resize
        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            const aspectRatio = width / height;
            camera.aspect = aspectRatio;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        // Clean up on unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default ThreeModel;