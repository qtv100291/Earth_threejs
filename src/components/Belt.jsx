import React, { useEffect, useRef } from 'react'

const Belt = ({ radius, rotation, visible, name }) => {
    const mesh = useRef()
    useEffect(()=> {
        mesh.current.rotation.x = rotation
    },[mesh])
    
    return ( 
        <mesh
            ref={mesh}
            rotateZ={rotation}
            visible={visible}
            name={name}
        >
            <meshStandardMaterial side={2}/>
            <ringBufferGeometry  args={[radius - 0.15, radius + 0.15 , 60, 60]}/>
        </mesh>
    );
}

export default Belt;