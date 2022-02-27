/**
 * threejs-header.js
 */
// Import dependencies
import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// Import fonts
import Unna from "../styles/fonts/Unna_Regular.json";

extend({ TextGeometry });

const ThreeJSHeader = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  const font = new FontLoader().parse(Unna);
  const textOptions = {
    font,
    size: 1,
    height: 1,
  };

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      visible
      userData={{ hello: "world" }}
      position={[1, 2, 3]}
    >
      <textGeometry attach="geometry" args={["three.js", textOptions]} />
      <meshStandardMaterial attach="material" color={"hotpink"} />
    </mesh>
  );
};

export default ThreeJSHeader;
