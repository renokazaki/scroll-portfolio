/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { ClownFish } from "../../public/object/ClownFish.jsx";

export const FoodItem = ({ model, page, scale, rotation }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
  const ref = useRef();
  const scrollData = useScroll();
  const fishRef = useRef();

  useFrame(() => {
    const pages = scrollData.pages - 1;
    const offsetX = 5;

    ref.current.position.x =
      scrollData.curve((page - 1) / pages, 3 / pages) * offsetX;
    // const pageScroll = scrollData.offset;

    // // スクロールに基づくClownFishの上下移動
    // if (fishRef.current) {
    //   // サイン波的な上下移動を設定

    //   fishRef.current.position.y = Math.sin(pageScroll * Math.PI * 2) * 2; // 上下2の範囲
    // }
  });

  return (
    <>
      <group>
        <ClownFish ref={fishRef} scale={5} position={[5, -4, 0]} />
      </group>

      <group ref={ref}>
        <primitive
          object={gltf.scene}
          position={[-viewport.width, -viewport.height * page, 0]}
          scale={scale}
          rotation={rotation}
        />
      </group>
    </>
  );
};
