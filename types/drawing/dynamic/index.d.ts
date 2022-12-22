/// <reference path="TextDynamic.d.ts" />
/// <reference path="LineDynamic.d.ts" />
/// <reference path="PolyLineDynamic.d.ts" />
/// <reference path="CircleDynamic.d.ts" />
/// <reference path="rect/index.d.ts" />

interface DrawEntryDynamic {
	Visible: boolean;
	ZIndex: number;
	Opacity: number;
	Color: Color3;
	Outlined: boolean;
	OutlineOpacity: number;
	OutlineThickness: number;
	OutlineColor: Color3;

	MoveToFront(): void;
	MoveToBack(): void;
}
