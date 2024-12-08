import { Text, useScroll } from "@react-three/drei";
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
      <section
        className="w-screen h-screen flex items-center justify-center"
        ref={introductionRef}
      >
        {/* <div className="text-3xl">Welcome to My Page!</div> */}
      </section>
      {foodItems.map((foodItem, index) => (
        <section key={index} className="w-screen h-screen p-16" ref={itemRef}>
          <div
            className={`flex ${
              index % 2 === 1 ? "justify-end" : "justify-start"
            } `}
          >
            <div>
              <h1 className="text-[14rem]  font-black text-gray-900 dark:text-white">
                {foodItem.name}
              </h1>
              <h2 className="text-xl text-gray-900 dark:text-gray-400">
                {foodItem.description}
              </h2>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
