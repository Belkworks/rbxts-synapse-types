interface DrawFont {
	GetTextBounds(font: this, text: string): Vector2;
}

// @hidden
interface DrawFontConstructor {
	Register: (font_data: string, options: object) => void;
	RegisterDefault: (font_family_name: string, options: object) => Font;
	ListDefault: () => string[];
}

declare const DrawFont: DrawFontConstructor;
