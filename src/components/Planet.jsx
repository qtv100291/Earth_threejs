import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import './Planet.css'

const Planet = ({ surface, radius, position, orbit, visible, name }) => {
    const imageSurface = new THREE.TextureLoader().load(surface)
    const mesh = useRef()
    let omega = 0
    let i = 0

    useFrame(() => {
        if (orbit){
            omega = omega > 2*Math.PI ? (omega - 2*Math.PI + 0.1*Math.PI/60) : (omega + 0.1*Math.PI/60)
            mesh.current.position.x = position[0]*(Math.cos(omega))
            mesh.current.position.z = position[0]*(Math.sin(omega))
        }
    })

    return ( 
        <mesh
            ref={mesh}
            position={position}
            visible={visible}
            name={name}
        >
            <meshStandardMaterial map={imageSurface} side={2}/>
            <sphereBufferGeometry  args={[radius, 60, 60]}/>
        </mesh>
    );
}

export default Planet;

// const bookName = "thamdinhtienganh6";
// const passowrd = "tienganh";
// ​
// for (let i = 1; i <= 13; i++) {
//   const username = `${bookName}${String("000" + i).slice(-3)}`
//   const data = {
//     address: "Hanoi, Viet Nam",
//     callback_url: "https://cloudbook.vn/xac-nhan-email/",
//     email: `${username}@gmail.com`,
//     name: bookName,
//     password: `${passowrd}${Math.floor(1 + Math.random() * 10000)}`,
//     phone: null,
//     school: "",
//     username: username,
//   };
//   await fetch("https://api.cloudbook.vn/api/v1/auth/sign-up", {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data.data);
//       console.log(i);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
