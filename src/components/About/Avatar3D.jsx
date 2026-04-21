import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

function Avatar() {
    const { scene } = useGLTF("./avatar.glb"); // 👈 tu archivo .glb en public/
    return <primitive object={scene} scale={0.2} position={[0, 0.6, 0]} />;
}

function AvatarCircle() {
    return (
        <mesh position={[0, 0.6, -0.4]}>
            <ringGeometry args={[0.48, 0.57, 64]} />

            <meshBasicMaterial
                color="#e63946"
                transparent
                opacity={0.9}
                side={DoubleSide}
            />
        </mesh>
    );
}

export default function App() {
    return (
        <Canvas camera={{ position: [0, 1.3, 2.5], fov: 28 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[0, 1, 2]} intensity={1.5} />

            <Suspense fallback={null}>
                <Avatar />
                <AvatarCircle />
            </Suspense>


            <OrbitControls
                enableZoom={false}
                enablePan={false}
                target={[0, 0.8, 0]}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>


    );
}
