import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Decal,
  Float,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
           />

           <Decal
           position={[0, 0, 1]}
           rotation={[2 * Math.PI, 0, 6.25]}
           flatShading
           map={decal} 
           />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        {/* <Environment preset="city" /> */}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
// import React, { Suspense } from "react";
// import { useTexture } from "@react-three/drei";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// const Ball = ({ imgUrl, position = [0, 0, 0], scale = 0.75 }) => {
//   const texture = useTexture(imgUrl);
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <mesh position={position} scale={scale} ref={meshRef}>
//       <icosahedronGeometry args={[1, 1]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// export default Ball;

