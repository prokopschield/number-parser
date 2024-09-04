import { ErrorCodes, NpError } from "../error";
import { readReal } from "./readReal";

export function readInt<P extends object, K extends keyof P>(
	parent: P,
	key: K
): number {
	let value;

	try {
		value = readReal(parent, key);

		if (!Number.isInteger(value)) {
			throw new NpError({
				code: ErrorCodes.not_a_number,
				value,
				parent,
				key,
			});
		}

		if (!Number.isSafeInteger(value)) {
			throw new NpError({
				code: ErrorCodes.unsafe_integer,
				value,
				parent,
				key,
			});
		}

		return value;
	} catch (error) {
		throw new NpError({
			code: ErrorCodes.unknown,
			error,
			value: value,
			parent,
			key,
		});
	}
}
