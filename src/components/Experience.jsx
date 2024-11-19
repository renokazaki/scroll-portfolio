import { Environment, Scroll } from "@react-three/drei";

import { foodItems } from "./foodItems.js";
import { FoodItem } from "../../public/object/FoodItems.jsx";
import { Scene } from "../../public/object/Scene.jsx";
import { ClownFish } from "../../public/object/ClownFish.jsx";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Scroll>
        <Scene />
        <ClownFish scale={5} />

        {foodItems.map((foodItem, idx) => (
          <FoodItem key={idx} {...foodItem} />
        ))}
      </Scroll>
    </>
  );
};
