declare enum CFrameRotationType {
	CameraRelative,
	TargetRelative,
	Ignore,
}

interface PointInstance extends Point {
	readonly WorldPos: Vector3;
	Offset: CFrame;
	Instance: Instance;
	RotationType: CFrameRotationType;
}

interface PointInstanceConstructor {
	new (instance?: Instance, offset?: CFrame): PointInstance;
}

declare const PointInstance: PointInstanceConstructor;
