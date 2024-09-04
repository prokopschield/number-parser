"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpError = exports.ErrorCodeStrings = exports.ErrorCodes = void 0;
exports.formatErrorMessage = formatErrorMessage;
exports.ErrorCodes = {
	not_a_number: Symbol.for("NOT_A_NUMBER"),
	not_finite: Symbol.for("NOT_FINITE"),
	not_an_integer: Symbol.for("NOT_AN_INTEGER"),
	unsafe_integer: Symbol.for("UNSAFE_INTEGER"),
	unknown: Symbol.for("UNKNOWN_ERROR"),
};
exports.ErrorCodeStrings = {
	[exports.ErrorCodes.not_a_number]: "not a number",
	[exports.ErrorCodes.not_finite]: "not a finite number",
	[exports.ErrorCodes.not_an_integer]: "not an integer",
	[exports.ErrorCodes.unsafe_integer]: "not a safe integer",
};
function formatErrorMessage({ code, error, key, value }) {
	if (code in exports.ErrorCodeStrings) {
		const prefix = key
			? `${String(key)} is ${String(value)},`
			: `${String(value)} is`;
		const suffix = error ? ` ${String(error)}` : "";
		return `${prefix} ${exports.ErrorCodeStrings[code]}.${suffix}`;
	}
	return String(error);
}
class NpError extends Error {
	constructor(data) {
		// prevent NpError recursion
		if (data.error instanceof NpError) {
			return data.error;
		}
		super(formatErrorMessage(data));
		const { code = exports.ErrorCodes.unknown, value, parent, key } = data;
		this.code = code;
		this.value = value;
		this.parent = parent;
		this.key = key;
	}
}
exports.NpError = NpError;
