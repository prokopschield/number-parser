describe("error", () => {
	const { ErrorCodes, NpError, formatErrorMessage } = require("../..");

	test("context", () => {
		const context = "I like having full test coverage.";

		const anon = new NpError({ context });
		const known = new NpError({ code: ErrorCodes.not_a_number, context });
		const unknown = new NpError({ code: ErrorCodes.unknown, context });
		const with_error = new NpError({
			code: ErrorCodes.not_finite,
			error: context,
		});

		expect(String(anon)).toContain(context);
		expect(String(known)).toContain(context);
		expect(String(unknown)).toContain(context);
		expect(String(with_error)).toContain(context);
	});

	test("formatting", () => {
		const my_str = "Don Salieri said to greet you.";

		expect(formatErrorMessage({ error: my_str })).toBe(my_str);
	});
});
