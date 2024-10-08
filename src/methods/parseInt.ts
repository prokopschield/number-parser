import { ErrorCodes, NpError } from "../error";
import { parseReal } from "./parseReal";

export function parseInt<I>(argument: I, context?: string): number {
	try {
		const value = parseReal(argument);

		if (!Number.isInteger(value)) {
			throw new NpError({
				code: ErrorCodes.not_an_integer,
				value,
				context,
			});
		}

		if (!Number.isSafeInteger(value)) {
			throw new NpError({
				code: ErrorCodes.unsafe_integer,
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
