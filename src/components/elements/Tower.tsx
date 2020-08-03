import React, { useRef, useEffect } from 'react'
import { Mesh, Vector3 } from 'three'
import { Cube } from '../shared/Cube'
import { ICubeProps } from '../shared/ICube'

export const Tower:React.FC<{}> = () => {
	const height = 50;
	const params: ICubeProps = {
		position: new Vector3(2 , height / 2, 0),
		scale: new Vector3(1 , height, 1),
		color: 'grey',
	}

  return (<Cube {...params} />)
}
