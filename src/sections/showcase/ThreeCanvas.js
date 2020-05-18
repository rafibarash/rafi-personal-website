// Heavily based off https://codesandbox.io/embed/r3f-bones-3i7iu

import React, { useRef, Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Rafi from './Rafi';
import { getMousePos } from './utils';

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
      <meshLambertMaterial
        attach="material"
        color="#9b9b9b"
        transparent
        opacity={0.2}
      />
    </mesh>
  );
};

const Lights = () => {
  const d = 8.25;
  return (
    <>
      <fog attach="fog" args={[0xdfdfdf, 35, 65]} />
      <hemisphereLight
        skyColor={0xffffff}
        groundColor={0xffffff}
        intensity={0.68}
        position={[0, 50, 0]}
      />
      <directionalLight
        skyColor={0xffffff}
        position={[-3, 4, 4]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        intensity={0.8}
        castShadow
      />
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
    </>
  );
};

const RafiModel = ({ mouse }) => {
  return (
    <>
      <Floor rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -5, 0]} />
      <Suspense fallback={null}>
        <Rafi mouse={mouse} position={[0, -5, 0]} scale={[7, 7, 7]} />
      </Suspense>
    </>
  );
};

const MyCanvas = () => {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      onMouseMove={(e) => {
        mouse.current = getMousePos(e);
      }}
      shadowMap
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 4, 18] }}
    >
      <Lights />
      <RafiModel mouse={mouse} />
    </Canvas>
  );
};

export default MyCanvas;
