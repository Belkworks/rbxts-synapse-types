type HttpRequest = {
	Url: string;
	Method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	Headers?: { [key: string]: string | number };
	Cookies?: { [key: string]: string | number };
	Body?: string | undefined;
};

type HttpResponse = {
	Success: boolean;
	StatusCode: number;
	StatusMessage: string;
	Headers: { [key: string]: string };
	Cookies: { [key: string]: string };
	Body: string;
};

declare namespace syn {
	function request(params: HttpRequest): HttpResponse;
}
