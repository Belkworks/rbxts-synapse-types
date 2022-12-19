declare interface Point {
	readonly ScreenPos: Vector2;
	readonly Visible: boolean;
}

interface Point2D extends Point {
	Point: UDim2;
}

interface Point2DStatic {
	new (): Point2D;
	new (pos: UDim2): Point2D;
	new (x_scale: number, x_offset: number, y_scale: number, y_offset: number): Point2D;
	new (vec: Vector2): Point2D;
	new (x: number, y: number): Point2D;
}

declare const Point2D: Point2DStatic;

interface PointOffset {
	Point: Point;
	Offset: Vector2;
}

interface PointOffsetStatic {
	new (): PointOffset;
	new (point: Point): PointOffset;
	new (point: Point, offset: Vector2): PointOffset;
}

declare const PointOffset: PointOffsetStatic;

interface PointInstance extends Point {
	Offset: CFrame;
	Instance: Instance;
}

interface PointInstanceStatic {
	new (instance?: Instance, offset?: CFrame): PointInstance;
}

declare const PointInstance: PointInstanceStatic;
