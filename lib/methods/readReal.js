"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readReal = readReal;
const error_1 = require("../error");
function readReal(parent, key) {
	let argument, value;
	try {
		argument = parent[key];
		value = Number(argument);
		if (Number.isNaN(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_a_number,
				value: argument,
				parent,
				key,
			});
		}
		if (!Number.isFinite(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_finite,
				value,
				parent,
				key,
			});
		}
		return value;
	} catch (error) {
		throw new error_1.NpError({
			code: error_1.ErrorCodes.unknown,
			error,
			value: value || argument,
			parent,
			key,
		});
	}
}
