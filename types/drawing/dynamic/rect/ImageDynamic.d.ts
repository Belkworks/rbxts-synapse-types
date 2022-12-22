interface ImageDynamic extends RectDynamicBase {
	/**
	 * Write-only.
	 */
	Image: string;
	readonly ImageSize: Vector2;
	Rounding: number;
}

interface ImageDynamicConstructor {
	new (point?: Point): ImageDynamic;
}

declare const ImageDynamic: ImageDynamicConstructor;
