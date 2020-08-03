import React, { useRef, useEffect } from 'react'
import { Mesh, Vector3, Object3D } from 'three'
import { Cube } from '../shared/Cube'
import { ICubeProps } from '../shared/ICube'
import { useFrame } from 'react-three-fiber'

export const Stick:React.FC<{}> = () => {
	const ref = useRef<Object3D>();
	const params: ICubeProps = {
		position: new Vector3(0.8, 0 ,0),
		scale: new Vector3(1.4, 0.1 ,0.1),
		color: 'orange',
	}
	useEffect(() => {
		ref.current.scale.set(0, 1, 1);
	})
	useFrame(() => {
		if(ref.current.scale.x <= 1) {
			ref.current.scale.x += 0.1;
		}
	})

  return (
		<mesh ref={ref} >
			<Cube {...params} />
		</mesh>
	)
}
