import React, { useRef, useEffect } from 'react';
import Earth from '../asset/earth.jpg'
import Moon from '../asset/moon.jpg'
import Planet from './Planet.jsx'
import Belt from './Belt.jsx'
import { useThree } from 'react-three-fiber'
import * as THREE from 'three'

const AllObject = () => {
    const groupMesh = useRef()
    const { camera, raycaster } = useThree()
    const { camera: camera_1, raycaster_1 } = useThree()

    const onMouseClick = event => {
        const mouse = {}
        mouse.x = (event.clientX / window.innerWidth)*2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        console.log(raycaster, raycaster_1)
    }

    useEffect(() => {
        document.addEventListener('click', onMouseClick)
    },[])

    return ( 
        <group ref={groupMesh}>
            <Planet surface={Earth} radius={10} position={[0, 0, 0]} orbit={false}/>
            <Planet surface={Moon} radius={2.7} position={[25, 0, 0]} orbit={true}/>
            <Belt radius={25} rotation = {Math.PI/2}/>
        </group>
    );
}

export default AllObject;
