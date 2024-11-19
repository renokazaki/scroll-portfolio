/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: The WarVet (https://sketchfab.com/TheWidowedWarVet)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hungry-shark-world-collection-b343825896874174b16646166c18b2af
Title: Hungry Shark World Collection
*/

import React, { useRef } from "react";
import { Float, Scroll, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export const Scene = (props) => {
  const viewport = useThree((state) => state.viewport);
  const { nodes, materials } = useGLTF("/models/Scene.glb");
  const ref = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    const pageScroll = scrollData.offset;

    //潜ってるアニメーション
    ref.current.rotation.x = pageScroll * Math.PI * 0.5;
  });

  return (
    <group {...props} dispose={null} scale={3} ref={ref}>
      <Float
        floatIntensity={0.2} // 揺れの強さを減少
        speed={0.5} // 揺れの速度を減少
        floatingRange={[-0.09, 0.09]} // 揺れ幅を減少
      >
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.ocean_surface}
          position={[-9.485, -viewport.height, 23.668]}
          scale={[2.548, 1, 1.276]}
        />
      </Float>
    </group>
  );
};

useGLTF.preload("/models/Scene.glb");