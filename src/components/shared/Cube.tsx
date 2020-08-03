import React, { useRef, useEffect } from 'react'
import { Mesh, Vector3 } from 'three'
import { ICubeProps } from './ICube';

export const Cube:React.FC<ICubeProps> = ({
	scale,
	position,
	color
}) => {
	const mesh = useRef<Mesh>();
	useEffect(() => {
		mesh.current.position.set(
			position.x,
			position.y,
			position.z
		);
		mesh.current.scale.set(
			scale.x,
			scale.y,
			scale.z
		);
	});

  return (
    <mesh
			receiveShadow
			castShadow
      ref={mesh}
		>
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
	)
}
