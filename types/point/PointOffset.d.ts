interface PointOffset extends Point {
	Point: Point;
	Offset: Vector2;
}

interface PointOffsetConstructor {
	new (): PointOffset;
	new (point: Point): PointOffset;
	new (point: Point, offset: Vector2): PointOffset;
	new (point: Point, x_offset: number, y_offset: number): PointOffset;
}

declare const PointOffset: PointOffsetConstructor;
