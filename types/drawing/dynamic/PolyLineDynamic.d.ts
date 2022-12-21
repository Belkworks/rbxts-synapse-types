interface PolyLineDynamic extends DrawEntryDynamic {
	Thickness: number;
	// FillType: PolyLineFillType;
	Points: Point[];

	ReTriangulate(): void;
	SetPoints(points: Point[]): void;
}

interface PolyLineDynamicConstructor {
	new (points?: Point[]): PolyLineDynamic;
}

declare const PolyLineDynamic: PolyLineDynamicConstructor;
