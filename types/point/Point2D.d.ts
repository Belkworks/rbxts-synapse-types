interface Point2D extends Point {
	Point: UDim2;
	PointVec2: Vector2;
}

interface Point2DConstructor {
	new (): Point2D;
	new (pos: UDim2): Point2D;
	new (x_scale: number, x_offset: number, y_scale: number, y_offset: number): Point2D;
	new (vec: Vector2): Point2D;
	new (x: number, y: number): Point2D;
}

declare const Point2D: Point2DConstructor;
