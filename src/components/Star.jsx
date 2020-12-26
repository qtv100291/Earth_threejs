import React, { useRef } from 'react';

const Star = ({ position }) => {
    const mesh = useRef()
    return ( 
        <mesh
            ref={mesh}
            position={position}
        >
   
            <meshStandardMaterial side={2} color={'white'}/>
            <sphereBufferGeometry args={[1, 20, 20]}/>
        </mesh>
    );
}

export default Star;