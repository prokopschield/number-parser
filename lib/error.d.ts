export declare const ErrorCodes: {
	not_a_number: symbol;
	not_finite: symbol;
	not_an_integer: symbol;
	unsafe_integer: symbol;
	unknown: symbol;
};
export declare const ErrorCodeStrings: {
	[x: symbol]: string;
};
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
export type NpErrorCtorData = {
	code: ErrorCode;
	value: any;
	parent?: any;
	key?: keyof any;
	error?: unknown;
};
export declare function formatErrorMessage({
	code,
	error,
	key,
	value,
}: NpErrorCtorData): string;
export declare class NpError extends Error {
	code: symbol | undefined;
	value: any;
	parent: any;
	key: string | number | symbol | undefined;
	constructor(data: NpErrorCtorData);
}
