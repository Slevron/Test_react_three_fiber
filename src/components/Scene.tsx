import React from 'react';
import { Canvas } from 'react-three-fiber'
import { Player } from './elements/Player';
import { Tower } from './elements/Tower';
import { Stage } from './Stage';

export const Scene:React.FC<{}> = () => (
	<Canvas
		shadowMap
		sRGB
		gl={{ alpha: false }}
		camera={{ position: [-3, 4, 2], fov: 50 }}
	>
		<color attach='background' args={[0,5,4]} />
		<ambientLight />
		<pointLight position={[10, 10, 10]} />
		<Stage />
	</Canvas>
)
