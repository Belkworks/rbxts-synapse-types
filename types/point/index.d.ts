/// <reference path="Point2D.d.ts" />
/// <reference path="PointInstance.d.ts" />
/// <reference path="PointOffset.d.ts" />
/// <reference path="PointMouse.d.ts" />

interface Point {
	readonly ScreenPos: Vector2;
	readonly Visible: boolean;
	HasColorOverride: boolean;
	ColorOverride: Color3;
	ColorOverrideOpacity: number;

	/**
	 * Write-only.
	 */
	ColorOverrideVec3: Vector3;
}
