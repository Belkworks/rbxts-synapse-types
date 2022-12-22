/// <reference path="RectDynamic.d.ts" />
/// <reference path="GradientRectDynamic.d.ts" />
/// <reference path="ImageDynamic.d.ts" />

interface RectDynamicBase extends DrawEntryDynamic {
	Size: Vector2;
	Position: Point;
	BottomRight?: Point;
	XAlignment: XAlignment;
	YAlignment: YAlignment;
}
