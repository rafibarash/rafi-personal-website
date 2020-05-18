// Heavily based off https://codesandbox.io/embed/r3f-bones-3i7iu

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import lerp from 'lerp';
import { getMouseDegrees } from './utils';

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit);
  joint.rotation.xD = lerp(joint.rotation.xD || 0, degrees.y, 0.1);
  joint.rotation.yD = lerp(joint.rotation.yD || 0, degrees.x, 0.1);
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD);
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD);
}

export default function Model({ mouse, ...props }) {
  const group = useRef();
  const { nodes, animations } = useLoader(GLTFLoader, '/stacy.glb');
  const texture = useLoader(THREE.TextureLoader, '/stacy.jpg');

  const [curAnimation, setCurAnimation] = useState(8); // 8th is idle

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      idle: mixer.clipAction(animations[curAnimation], group.current),
    };
    actions.current.idle.play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, [curAnimation]);

  useFrame((state, delta) => {
    mixer.update(delta * 0.1);
    moveJoint(mouse, nodes.mixamorigNeck);
    moveJoint(mouse, nodes.mixamorigSpine);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes['mixamorigHips']} />
        <skinnedMesh
          geometry={nodes['stacy'].geometry}
          skeleton={nodes['stacy'].skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}
          castShadow
          receiveShadow
          onClick={() => {
            setCurAnimation((curAnimation + 1) % animations.length);
          }}
        >
          <meshPhongMaterial
            attach="material"
            map={texture}
            map-flipY={false}
            skinning
          />
        </skinnedMesh>
      </group>
    </group>
  );
}
