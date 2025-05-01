import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import styled from "styled-components";

const Instructions = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  @media (max-width: 768px) {
    font-size: 1rem;
    bottom: 10px;
  }
`;

const Computers = ({ windowSize }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // Responsive scale calculation
  const calculateScale = () => {
    const baseWidth = 1200; // Reference desktop width
    const mobileBaseWidth = 375; // Reference mobile width (iPhone SE)

    if (windowSize.width <= 768) {
      // Mobile scale range: 0.6-0.8 based on screen width
      return Math.min(0.6 + (windowSize.width - mobileBaseWidth) * 0.002, 0.8);
    }

    // Desktop scale range: 0.7-0.9 based on screen width
    return Math.min(0.7 + (windowSize.width - baseWidth) * 0.0005, 0.9);
  };

  // Adaptive position calculation
  const calculatePosition = () => {
    const isMobile = windowSize.width <= 768;
    const aspectRatio = windowSize.width / windowSize.height;

    const verticalPosition = isMobile
      ? -3.5 + (aspectRatio > 0.5 ? -0.5 : 0)
      : -3.25;

    const depthPosition = isMobile
      ? -2.2 + (windowSize.height < 600 ? 0.5 : 0)
      : -1.5;

    return [0, verticalPosition, depthPosition];
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={calculateScale()}
        position={calculatePosition()}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const ComputersCanvas = () => {
  const windowSize = useWindowSize();
  const canvasRef = useRef();
  const [controlsEnabled, setControlsEnabled] = useState(true);
  let touchStartX = 0;
  let touchStartY = 0;
  const moveThreshold = 5; // Adjust this value to control sensitivity

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      setControlsEnabled(true);
    } else {
      setControlsEnabled(false); // Disable controls for multi-touch (potential zoom/scroll)
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && controlsEnabled) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY);

      // If the movement is primarily vertical, disable controls to allow scrolling
      if (deltaY > deltaX && deltaY > moveThreshold) {
        setControlsEnabled(false);
      }
      // If there's significant movement, update the start position
      if (deltaX > moveThreshold || deltaY > moveThreshold) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    } else if (e.touches.length > 1) {
      setControlsEnabled(false); // Ensure controls are disabled for multi-touch
    }
  };

  const handleTouchEnd = () => {
    // Optionally re-enable controls after touch ends if needed
    setControlsEnabled(true);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        ref={canvasRef}
        frameloop="demand"
        shadows
        dpr={Math.min(window.devicePixelRatio, 2)}
        camera={{
          position: [
            Math.max(10, windowSize.width * 0.015),
            3,
            Math.max(4, 5 - windowSize.width / 100),
          ],
          fov: 25 + (windowSize.height / windowSize.width) * 10,
        }}
        gl={{ preserveDrawingBuffer: true }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enabled={controlsEnabled}
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / (windowSize.width <= 768 ? 3.2 : 2.5)}
            enableDamping={true}
            dampingFactor={0.05}
          />
          <Computers windowSize={windowSize} />
        </Suspense>
        <Preload all />
      </Canvas>
      <Instructions>
        {windowSize.width <= 768 ? "Swipe to rotate" : "Click & drag to rotate"}
      </Instructions>
    </div>
  );
};

export default ComputersCanvas;