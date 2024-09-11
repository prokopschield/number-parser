describe("parseInt", () => {
	const { parseInt } = require("../../..");

	test("string", () => {
		// string primitive
		expect(parseInt("42")).toBe(42);
		// string object
		expect(parseInt(new String("42"))).toBe(42);
	});

	test("bigint", () => {
		// bigint primitive
		expect(parseInt(BigInt(42))).toBe(42);
		// bigint object
		expect(parseInt(new Object(BigInt(42)))).toBe(42);
	});

	test("object", () => {
		// valueOf()
		expect(parseInt({ valueOf: () => "42" })).toBe(42);
		// toString()
		expect(parseInt({ toString: () => 42 })).toBe(42);
		// array
		expect(parseInt([42])).toBe(42);
		// ObjectConstructor
		expect(parseInt(new Object({ valueOf: () => 42 }))).toBe(42);
	});

	test("invalid", () => {
		// decimal number
		expect(() => parseInt(Math.PI)).toThrow();
		// decimal number string literal
		expect(() => parseInt("3.141592653589793")).toThrow();
		// Infinity
		expect(() => parseInt(Infinity)).toThrow();
		// NaN
		expect(() => parseInt("cats and dogs")).toThrow();
		// too large
		expect(() => parseInt(10e24)).toThrow();
	});
});
