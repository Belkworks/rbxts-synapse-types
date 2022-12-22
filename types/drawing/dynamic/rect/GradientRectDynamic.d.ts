interface GradientRectDynamic extends RectDynamicBase {
	Thickness: number;
	ColorUpperLeft: Color3;
	ColorUpperRight: Color3;
	ColorBottomLeft: Color3;
	ColorBottomRight: Color3;
	OpacityUpperLeft: number;
	OpacityUpperRight: number;
	OpacityBottomLeft: number;
	OpacityBottomRight: number;
	Opacity: number;
}

interface GradientRectDynamicConstructor {
	new (point?: Point): GradientRectDynamic;
}

declare const GradientRectDynamic: GradientRectDynamicConstructor;
