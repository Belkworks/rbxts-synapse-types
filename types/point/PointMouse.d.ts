interface PointMouse extends Point {}

interface PointMouseConstructor {
	new (): PointMouse;
}

declare const PointMouse: PointMouseConstructor;
