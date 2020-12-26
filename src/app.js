import React from 'react';
import Earth from './asset/earth.jpg'
import Moon from './asset/moon.jpg'
import Planet from './components/Planet.jsx'
import Belt from './components/Belt.jsx'
import Star from './components/Star.jsx'
import { Canvas, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Component = () => {
    const {
        camera,
        gl: { domElement }
      } = useThree()
      return (
        <React.Fragment>
            <ambientLight />
            <color attach="background" args={["black"]} />
            <orbitControls args={[camera, domElement]} />
        </React.Fragment>
    )
}

const StarPosition = () => {
    for( let i = 1 ; i < 100; i++){
        const x = Math.floor(Math.random()*30 - 15)
        const y = Math.floor(Math.random()*30 - 15)
        return (
            <Star position={[x, y, -80]}/>
        )
    }
}

const App = () => {
    return ( 
        <Canvas 
            camera={ { aspect: window.innerWidth/ window.innerHeight, 
            position:[50, 30, 0]} }
        >
            <Component />
            <Planet surface={Earth} radius={10} position={[0, 0, 0]} orbit={false}/>
            <Planet surface={Moon} radius={2.7} position={[25, 0, 0]} orbit={true}/>
            <Belt radius={25} rotation = {Math.PI/2}/>
            {/* {StarPosition()} */}
        </Canvas>
    );
}

export default App;