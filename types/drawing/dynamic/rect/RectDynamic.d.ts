interface RectDynamic extends RectDynamicBase {
	Thickness: number;
	Filled: boolean;
	Rounding: number;
}

interface RectDynamicConstructor {
	new (point?: Point): RectDynamic;
}

declare const RectDynamic: RectDynamicConstructor;
