/**
 * @file hero.js
 */
// Import dependencies
import { Typography } from "@mui/material";
import { Canvas, useFrame, pointLight, ambientLight } from '@react-three/fiber'

// Import components
import ThreeJSBox from './threejs-hero';

// Import styles
import { heroContainer } from '../styles/Home.module.css';

const Hero = () => {
  return (
    <div className={heroContainer} id="main">
        <Typography 
            variant={`h1`}
        >
            Epidemiologic Research & Methods, LLC
        </Typography>
        <Typography 
            variant={`h2`}
        >
            Expidemiology expert consulting
        </Typography>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeJSBox key={1} position={[-1.2, 0, 0]} />
            <ThreeJSBox key={2} position={[1.2, 0, 0]} />
        </Canvas>
    </div>
  );
};

export default Hero;
