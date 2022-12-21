interface PointOffset {
	Point: Point;
	Offset: Vector2;
}

interface PointOffsetConstructor {
	new (): PointOffset;
	new (point: Point): PointOffset;
	new (point: Point, offset: Vector2): PointOffset;
}

declare const PointOffset: PointOffsetConstructor;
