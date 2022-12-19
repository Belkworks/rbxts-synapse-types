// Enums

declare enum XAlignment {
	Left,
	Right,
	Center,
}

declare enum YAlignment {
	Top,
	Bottom,
	Center,
}

// Drawing Classes

interface DrawEntryDynamic {
	Visible: boolean;
	ZIndex: number;
	Opacity: number;
	Color: Color3;
	Outlined: boolean;
	OutlineColor: Color3;
	OutlineOpacity: number;
}

interface TextDynamic extends DrawEntryDynamic {
	Text: string;
	readonly TextBounds: Vector2;
	Size: number;
	Position: Point;
	Font: Font;
	XAlignment: XAlignment;
	YAlignment: YAlignment;
}

interface TextDynamicStatic {
	new (): TextDynamic;
}

declare const TextDynamic: TextDynamicStatic;
