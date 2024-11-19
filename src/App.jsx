import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 12], fov: 30 }}>
        <ScrollControls pages={5}>
          {/* オブジェクト */}
          <Experience />
          <Scroll html>
            {/* スクロール可能なHTML要素 */}
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
