import React from 'react';
import { Vector3 } from 'three';
import { Player } from './elements/Player';
import { Tower } from './elements/Tower';

export const Stage:React.FC<{}> = () => {

	return (
		<mesh position={new Vector3(-0.2, -2, 0)} >
			<Player />
			<Tower />
		</mesh>
	)
}
