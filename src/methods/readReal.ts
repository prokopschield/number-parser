import { ErrorCodes, NpError } from "../error";

export function readReal<P extends object, K extends keyof P>(
	parent: P,
	key: K
): number {
	let argument, value;

	try {
		argument = parent[key];
		value = Number(argument);

		if (Number.isNaN(value)) {
			throw new NpError({
				code: ErrorCodes.not_a_number,
				value: argument,
				parent,
				key,
			});
		}

		if (!Number.isFinite(value)) {
			throw new NpError({
				code: ErrorCodes.not_finite,
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
			value: value || argument,
			parent,
			key,
		});
	}
}
