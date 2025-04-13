import React from 'react'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball"; // a reusable Ball component without Canvas
// import CanvasLoader from "./Loader";

// const Tech = () => {
//   return (
//     <div className="w-full h-[500px]">
//       <Canvas
//         frameloop="demand"
//         gl={{ preserveDrawingBuffer: true }}
//         dpr={[1, 2]}
//         camera={{ position: [0, 0, 15], fov: 50 }} // Pull camera back!
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[0, 0, 5]} />
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / 4);
//             const col = index % 4;
//             const spacing = 3.2; // Wider spacing
//             return (
//               <Ball
//                 key={tech.name}
//                 position={[col * spacing - 4.5, -row * spacing + 4, 0]} // Adjust Y for neat grid
//                 imgUrl={tech.icon}
//                 scale={0.8} // <<< Make ball smaller
//               />
//             );
//           })}
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
