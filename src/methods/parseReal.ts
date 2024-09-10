import { ErrorCodes, NpError } from "../error";

export function parseReal<I>(argument: I, context?: string): number {
	try {
		const value = Number(argument);

		if (Number.isNaN(value)) {
			throw new NpError({
				code: ErrorCodes.not_a_number,
				value: argument,
				context,
			});
		}

		if (!Number.isFinite(value)) {
			throw new NpError({
				code: ErrorCodes.not_finite,
				value,
				context,
			});
		}

		return value;
	} catch (error) {
		throw new NpError({
			code: ErrorCodes.unknown,
			error,
			value: argument,
			context,
		});
	}
}
