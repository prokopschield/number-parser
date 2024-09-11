describe("readInt", () => {
	const { ErrorCodes, NpError, parseReal, readInt } = require("../../..");

	test("object", () => {
		const player = {
			id: "182079436",
			username: "pepicek",
			password: "heslo123",
			score: "515.1578",
			games: "90",
		};

		expect(readInt(player, "id")).toBe(182079436);

		expect(() => readInt(player, "username")).toThrow(
			expect.objectContaining(
				new NpError({
					code: ErrorCodes.not_a_number,
					key: "username",
					value: player.username,
					parent: player,
				})
			)
		);

		expect(() => readInt(player, "score")).toThrow(
			expect.objectContaining(
				new NpError({
					code: ErrorCodes.not_an_integer,
					key: "score",
					value: parseReal(player.score),
					parent: player,
				})
			)
		);

		const parent = {
			p: {
				valueOf() {
					return 10e42;
				},
			},
		};

		expect(() => readInt(parent, "p")).toThrow(
			expect.objectContaining(
				new NpError({
					code: ErrorCodes.unsafe_integer,
					key: "p",
					value: 10e42,
					parent,
				})
			)
		);
	});
});
