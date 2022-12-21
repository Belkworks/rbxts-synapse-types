interface TextDynamic extends DrawEntryDynamic {
	Text: string;
	readonly TextBounds: Vector2;
	Size: number;
	Position: Point;
	Font: DrawFont;
	XAlignment: XAlignment;
	YAlignment: YAlignment;
	TextXAlignment: XAlignment;
}

interface TextDynamicConstructor {
	new (point?: Point): TextDynamic;
}

declare const TextDynamic: TextDynamicConstructor;
