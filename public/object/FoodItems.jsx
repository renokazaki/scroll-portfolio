/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const FoodItem = ({ model, page, scale, rotation }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
  const ref = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    const pages = scrollData.pages - 1;
    const offsetX = 5;

    ref.current.position.x =
      scrollData.curve((page - 1) / pages, 3 / pages) * offsetX;
  });

  return (
    <group ref={ref}>
      <primitive
        object={gltf.scene}
        position={[-viewport.width, -viewport.height * page, 0]}
        scale={scale}
        rotation={rotation}
      />
    </group>
  );
};
