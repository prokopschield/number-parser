describe("readReal", () => {
	const { ErrorCodes, readReal } = require("../../..");

	test("object", () => {
		const person = {
			name: "Jaroslav Cimrman",
			age: "42",
			country: "Österreich-Ungarn",
			wisdom: "Infinity",
		};

		expect(() => readReal(person, "name")).toThrow();
		expect(readReal(person, "age")).toBe(42);
		expect(() => readReal(person, "country")).toThrow();
		expect(() => readReal(person, "non_existant_property")).toThrow();

		// test error code
		expect(() => readReal(person, "wisdom")).toThrow(
			expect.objectContaining({ code: ErrorCodes.not_finite })
		);

		// test non-whole constants
		expect(readReal(Math, "E")).toEqual(Math.E);
		expect(readReal(Math, "PI")).toEqual(Math.PI);
	});
});
