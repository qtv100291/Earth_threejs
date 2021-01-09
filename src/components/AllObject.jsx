import React, { useRef, useEffect, useState } from 'react'
import Earth from '../asset/earth.jpg'
import Moon from '../asset/moon.jpg'
import Planet from './Planet.jsx'
import Belt from './Belt.jsx'
import { useThree } from 'react-three-fiber'

const AllObject = () => {
    const groupMesh = useRef()
    const { camera, raycaster } = useThree()
    const [visible, setVisible] = useState({
        earth: true,
        moon: true,
        belt: true
    })

    const onMouseClick = event => {
        const mouse = {}
        mouse.x = (event.clientX / window.innerWidth)*2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersect = raycaster.intersectObjects(groupMesh.current.children)[0].object
        const intersectName = intersect.name
        const intersectPosition = intersect.position
        const intersectRadius = intersect.geometry.parameters.radius
        console.log(raycaster.intersectObjects(groupMesh.current.children)[0].object)
        if (intersectName === 'belt') return
        const newVisible = {...visible}
        for (let planet in newVisible){
            if (planet === intersectName){
                newVisible[planet] = true
            }
            else newVisible[planet] = false
        }
        setVisible(newVisible)
        changeCameraView(intersectPosition, intersectRadius)
    }

    // const changeCameraView = (intersectPosition, intersectRadius) => {
    //     requestAnimationFrame(() => {changeCameraView(intersectPosition, intersectRadius)})
    // }

    const changeCameraView = () => {
        requestAnimationFrame(() => {changeCameraView(intersectPosition, intersectRadius)})
    }

    useEffect(() => {
        document.addEventListener('click', onMouseClick)
    },[])

    return ( 
        <group ref={groupMesh}>
            <Planet 
                surface={Earth} 
                radius={10} 
                position={[0, 0, 0]} 
                orbit={false} 
                visible={visible.earth}
                name={'earth'}
            />
            <Planet 
                surface={Moon} 
                radius={2.7} 
                position={[25, 0, 0]} 
                orbit={true} 
                visible={visible.moon}
                name={'moon'}
            />
            <Belt 
                radius={25} 
                rotation = {Math.PI/2} 
                visible={visible.belt}
                name={'belt'}
            />
        </group>
    );
}

export default AllObject;


