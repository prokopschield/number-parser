"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInt = parseInt;
const error_1 = require("../error");
const parseReal_1 = require("./parseReal");
function parseInt(argument) {
	try {
		const value = (0, parseReal_1.parseReal)(argument);
		if (!Number.isInteger(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_an_integer,
				value,
			});
		}
		if (!Number.isSafeInteger(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.unsafe_integer,
				value,
			});
		}
		return value;
	} catch (error) {
		throw new error_1.NpError({
			code: error_1.ErrorCodes.unknown,
			error,
			value: argument,
		});
	}
}
