import React from 'react';
import { Canvas } from 'react-three-fiber'
import AllObject from './components/AllObject.jsx';

const App = () => {
    
    const Component = () => {
        return (
            <React.Fragment>
                <ambientLight />
                <color attach="background" args={["black"]} />
            </React.Fragment>
        )
    }

    // useFrame(()=> {
                            
    // })
        
    return ( 
        <Canvas 
            camera={ { position:[50, 30, 0] } }
        >
            <Component/>
            <AllObject/>
        </Canvas>
    );
}

export default App;