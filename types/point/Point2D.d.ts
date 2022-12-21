interface Point2D extends Point {
	Point: UDim2;

	/**
	 * Write-only.
	 */
	PointVec2: Vector2;
}

interface Point2DConstructor {
	new (): Point2D;
	new (point: UDim2): Point2D;
	new (point: Vector2): Point2D;
	new (x: number, y: number): Point2D;
	new (x_scale: number, x_offset: number, y_scale: number, y_offset: number): Point2D;
}

declare const Point2D: Point2DConstructor;
