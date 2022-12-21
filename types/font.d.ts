interface DrawFont {
	GetTextBounds(size: number, text: string): Vector2;
}

interface DrawFontConstructor {
	Register: (font_data: string, options: object) => void;
	RegisterDefault: (font_family_name: string, options: object) => DrawFont;
	ListDefault: () => string[];
}

declare const DrawFont: DrawFontConstructor;
