"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInt = readInt;
const error_1 = require("../error");
const readReal_1 = require("./readReal");
function readInt(parent, key) {
	let value;
	try {
		value = (0, readReal_1.readReal)(parent, key);
		if (!Number.isInteger(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.not_a_number,
				value,
				parent,
				key,
			});
		}
		if (!Number.isSafeInteger(value)) {
			throw new error_1.NpError({
				code: error_1.ErrorCodes.unsafe_integer,
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
			value: value,
			parent,
			key,
		});
	}
}
