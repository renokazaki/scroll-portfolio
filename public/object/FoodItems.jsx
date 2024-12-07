/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Float, useGLTF, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const FoodItem = ({ model, page, scale, rotation }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
  const ref = useRef();
  const scrollData = useScroll();
  const pages = scrollData.pages - 1;
  const direction = page % 2 === 0 ? 1 : -1;

  useFrame(() => {
    const offsetX = 20;

    // ref.current.position.x =
    //   scrollData.curve((page - 1) / pages, 3 / pages) * offsetX;

    // 偶数ページは右側、奇数ページは左側から出る
    ref.current.position.x =
      scrollData.curve((page - 1) / pages, 4 / pages) * offsetX * direction;

    // const pageScroll = scrollData.offset;

    // // スクロールに基づくClownFishの上下移動
    // if (fishRef.current) {
    //   // サイン波的な上下移動を設定

    //   fishRef.current.position.y = Math.sin(pageScroll * Math.PI * 2) * 2; // 上下2の範囲
    // }
  });

  return (
    <>
      <Float floatSpeed={0.5}>
        <group ref={ref}>
          <primitive
            object={gltf.scene}
            position={[
              -viewport.width * direction,
              -viewport.height * page,
              -2,
            ]}
            scale={scale}
            rotation={rotation}
          />
        </group>
      </Float>
    </>
  );
};
