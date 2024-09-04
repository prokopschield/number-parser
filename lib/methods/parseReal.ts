import { ErrorCodes, NpError } from "../error";

export function parseReal<I>(argument: I): number {
	try {
		const value = Number(argument);

		if (Number.isNaN(value)) {
			throw new NpError({
				code: ErrorCodes.not_a_number,
				value: argument,
			});
		}

		if (!Number.isFinite(value)) {
			throw new NpError({
				code: ErrorCodes.not_finite,
				value,
			});
		}

		return value;
	} catch (error) {
		throw new NpError({
			code: ErrorCodes.unknown,
			error,
			value: argument,
		});
	}
}
