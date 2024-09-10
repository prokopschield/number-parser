import { ErrorCodes, NpError } from "../error";

export function readReal<P extends object, K extends keyof P>(
	parent: P,
	key: K,
	context?: string
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
				context,
			});
		}

		if (!Number.isFinite(value)) {
			throw new NpError({
				code: ErrorCodes.not_finite,
				value,
				parent,
				key,
				context,
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
			context,
		});
	}
}
