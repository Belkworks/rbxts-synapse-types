interface PointInstance extends Point {
	Offset: CFrame;
	Instance: Instance;
}

interface PointInstanceConstructor {
	new (instance?: Instance, offset?: CFrame): PointInstance;
}

declare const PointInstance: PointInstanceConstructor;
