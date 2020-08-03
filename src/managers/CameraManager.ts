import { useThree } from 'react-three-fiber';
import { Camera, Vector3 } from 'three';

export class CameraManager {
	private ref: Camera;

	constructor() {
		const {
			camera
		} = useThree();

		this.ref = camera;
	}

	public updatePos(position: Vector3) {
		const { y } = position
		this.ref.position.y = y + 3;
	}
}
