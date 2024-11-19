import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { foodItems } from "./foodItems";

export const Interface = () => {
  const introductionRef = useRef();
  const itemRef = useRef();

  const scrollData = useScroll();

  useFrame(() => {
    introductionRef.current.style.opacity = 1 - scrollData.range(0, 0.1);
  });

  return (
    <>
      <section className="w-screen h-screen" ref={introductionRef}>
        <div className="introduction ">
          <p className="introduction__label ">
            スクロールしてください
            <br />
            👇
          </p>
        </div>
      </section>
      {foodItems.map((foodItem, index) => (
        <section key={index} className="w-screen h-screen" ref={itemRef}>
          <div>
            <h2 className="font-extrabold">{foodItem.name}</h2>
            <p>{foodItem.description}</p>
          </div>
        </section>
      ))}
    </>
  );
};
