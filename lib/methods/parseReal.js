"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseReal = parseReal;
const error_1 = require("../error");
function parseReal(argument) {
	try {
		const value = Number(argument);
		if (Number.isNaN(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_a_number,
				value: argument,
			});
		}
		if (!Number.isFinite(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_finite,
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
