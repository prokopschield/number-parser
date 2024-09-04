export const ErrorCodes = {
	not_a_number: Symbol.for("NOT_A_NUMBER"),
	not_finite: Symbol.for("NOT_FINITE"),
	not_an_integer: Symbol.for("NOT_AN_INTEGER"),
	unsafe_integer: Symbol.for("UNSAFE_INTEGER"),
	unknown: Symbol.for("UNKNOWN_ERROR"),
};

export const ErrorCodeStrings = {
	[ErrorCodes.not_a_number]: "not a number",
	[ErrorCodes.not_finite]: "not a finite number",
	[ErrorCodes.not_an_integer]: "not an integer",
	[ErrorCodes.unsafe_integer]: "not a safe integer",
};

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export type NpErrorCtorData = {
	code: ErrorCode;
	value: any;
	parent?: any;
	key?: keyof any;
	error?: unknown;
};

export function formatErrorMessage({
	code,
	error,
	key,
	value,
}: NpErrorCtorData): string {
	if (code in ErrorCodeStrings) {
		const prefix = key
			? `${String(key)} is ${String(value)},`
			: `${String(value)} is`;

		const suffix = error ? ` ${String(error)}` : "";

		return `${prefix} ${ErrorCodeStrings[code]}.${suffix}`;
	}

	return String(error);
}

export class NpError extends Error {
	code;
	value;
	parent;
	key;

	constructor(data: NpErrorCtorData) {
		// prevent NpError recursion
		if (data.error instanceof NpError) {
			return data.error;
		}

		super(formatErrorMessage(data));

		const { code = ErrorCodes.unknown, value, parent, key } = data;

		this.code = code;
		this.value = value;
		this.parent = parent;
		this.key = key;
	}
}
