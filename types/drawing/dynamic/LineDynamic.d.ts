interface LineDynamic extends DrawEntryDynamic {
	Thickness: number;
	From: Point;
	To: Point;
}

interface LineDynamicConstructor {
	new (): LineDynamic;
	new (p1: Point, p2: Point): LineDynamic;
}

declare const LineDynamic: LineDynamicConstructor;
