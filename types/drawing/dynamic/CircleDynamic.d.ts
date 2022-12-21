interface CircleDynamic extends DrawEntryDynamic {
	Thickness: number;
	NumSides: number;
	Radius: number;
	Filled: boolean;
	Position: Point;
	Edge: Point | undefined;
	XAlignment: XAlignment;
	YAlignment: YAlignment;
}

interface CircleDynamicConstructor {
	new (point?: Point): CircleDynamic;
}

declare const CircleDynamic: CircleDynamicConstructor;
