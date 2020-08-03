import React, { useState, useRef, useEffect } from 'react';
import { Ball } from './Ball';
import { Stick } from './Stick';
import { Object3D, Mesh } from 'three';
import { CameraManager } from '../../managers/CameraManager';

export const Player:React.FC<{}> = () => {
	const camera = new CameraManager();
	const container = useRef<Object3D>();
	const pivot = useRef<Object3D>();

	const [show, setShow] = useState(false);
	const click: () => void = () => {
		setShow(true);
	}
	useEffect(() => {
		pivot.current.position.set(2, 0, 0);
		container.current.position.set(-2, 1, 0);
	})

	return (
		<mesh
			ref={pivot}
		>
			<mesh
				onClick={click}
				ref={container}
			>
				<Ball />
				{show && <Stick />}
			</mesh>
		</mesh>
	);
}
