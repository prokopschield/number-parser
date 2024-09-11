module.exports = function run_jest() {
	return new Promise((resolve, reject) => {
		try {
			const { exec } = require("child_process");
			const child = exec("yarn jest", {}, resolve);

			child.stdout.pipe(process.stdout);
			child.stderr.pipe(process.stdout);
		} catch (error) {
			reject(error);
		}
	});
};
