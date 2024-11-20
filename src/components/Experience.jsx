import { Environment, Scroll } from "@react-three/drei";

import { foodItems } from "./foodItems.js";
import { FoodItem } from "../../public/object/FoodItems.jsx";
import { Scene } from "../../public/object/Scene.jsx";
// import { ClownFish } from "../../public/object/ClownFish.jsx";
import { Seagulls } from "../../public/object/Seagulls.jsx";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Scroll>
        <Seagulls scale={0.2} position-x={-3} position-y={1} />
        <Scene position-y={-10} />
        {foodItems.map((foodItem, idx) => (
          <FoodItem key={idx} {...foodItem} />
        ))}
      </Scroll>
    </>
  );
};
