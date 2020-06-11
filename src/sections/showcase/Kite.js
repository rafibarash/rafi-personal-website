import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSphere, useSpring, usePlane, useBox } from 'use-cannon';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      position={[1, 0, 0]}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}

const KiteAnimation = () => {
  const [kiteRef] = useSphere(() => ({ mass: 1, position: [0, 5, 0] }));
  const Kite = () => (
    <mesh ref={kiteRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );

  const [holdRef] = useSphere(() => ({ mass: 100, position: [-10, 0, 0] }));
  const Hold = () => (
    <mesh ref={holdRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );

  useSpring(() => ({
    bodyA: holdRef,
    bodyB: kiteRef,
    optns: { restLength: 1, stiffness: 100, damping: 10 },
  }));

  return (
    <>
      <Kite />
      <Hold />
    </>
  );
};

export default KiteAnimation;
