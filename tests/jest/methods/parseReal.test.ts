describe("parseReal", () => {
	const { parseReal } = require("../../..");

	test("string", () => {
		// string primitive
		expect(parseReal("42")).toBe(42);
		// string object
		expect(parseReal(new String("42"))).toBe(42);
	});

	test("bigint", () => {
		// bigint primitive
		expect(parseReal(BigInt(42))).toBe(42);
		// bigint object
		expect(parseReal(new Object(BigInt(42)))).toBe(42);
	});

	test("object", () => {
		// valueOf()
		expect(parseReal({ valueOf: () => "42" })).toBe(42);
		// toString()
		expect(parseReal({ toString: () => 42 })).toBe(42);
		// array
		expect(parseReal([42])).toBe(42);
		// ObjectConstructor
		expect(parseReal(new Object({ valueOf: () => 42 }))).toBe(42);
	});

	test("decimals", () => {
		// decimal number
		expect(parseReal(Math.PI)).toBe(Math.PI);
		// decimal number string literal
		expect(parseReal("3.141592653589793")).toBe(Math.PI);
		// exponential notation
		expect(parseReal("10e24")).toBe(10e24);
	});

	test("invalid", () => {
		// Infinity
		expect(() => parseReal(Infinity)).toThrow();
		// NaN
		expect(() => parseReal("cats and dogs")).toThrow();
	});
});
