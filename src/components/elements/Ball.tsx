import React, { useRef, useEffect } from 'react';
import { CameraManager } from '../../managers/CameraManager';
import { Mesh } from 'three';

export const Ball:React.FC<{}> = () => {
	const ref = useRef<Mesh>()
	const camera = new CameraManager()
	useEffect(() => {
		ref.current.scale.set(0.3, 0.3, 0.3);
  });

	return (
		<mesh ref={ref}>
			<sphereGeometry attach='geometry' args={[1, 32, 32]} />
			<meshStandardMaterial attach='material' color={0xfe9966} />
		</mesh>
	);
}
