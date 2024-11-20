/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const ClownFish = (props) => {
  const group = useRef(); // グループ全体の参照
  const fishRef = useRef(); // 魚の移動専用参照
  const { nodes, materials, animations } = useGLTF("./models/clown_fish.glb");
  const { actions } = useAnimations(animations, group);
  const scrollData = useScroll(); // スクロールデータを取得

  useEffect(() => {
    // アニメーションの初期化（任意）
    const action = actions["swim"];
    if (action) {
      action.timeScale = 0.8; // アニメーション速度を調整
      action.play();
    }
  }, [actions]);

  useFrame(() => {
    // スクロールに基づく移動計算
    const pageScroll = scrollData.offset; // 現在のスクロール位置 (0 ~ 1)
    if (fishRef.current) {
      fishRef.current.position.x = Math.sin(pageScroll * Math.PI * -0.5) * 2; // 上下2の範囲

      fishRef.current.position.y = Math.sin(pageScroll * Math.PI * -0.7) * 2; // 上下 2 の範囲で移動
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={fishRef} position={[0, 0, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="de8a6d993d1648139d961f02b30f3fb3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} position={[0, 0, 0]} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.fishclown}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/clown_fish.glb");
