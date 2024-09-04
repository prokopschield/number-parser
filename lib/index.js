"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readReal =
	exports.readInt =
	exports.parseReal =
	exports.formatErrorMessage =
	exports.NpError =
	exports.ErrorCodes =
		void 0;
var error_1 = require("./error");
Object.defineProperty(exports, "ErrorCodes", {
	enumerable: true,
	get: function () {
		return error_1.ErrorCodes;
	},
});
Object.defineProperty(exports, "NpError", {
	enumerable: true,
	get: function () {
		return error_1.NpError;
	},
});
Object.defineProperty(exports, "formatErrorMessage", {
	enumerable: true,
	get: function () {
		return error_1.formatErrorMessage;
	},
});
var parseInt_1 = require("./methods/parseInt");
Object.defineProperty(exports, "parseInt", {
	enumerable: true,
	get: function () {
		return parseInt_1.parseInt;
	},
});
var parseReal_1 = require("./methods/parseReal");
Object.defineProperty(exports, "parseReal", {
	enumerable: true,
	get: function () {
		return parseReal_1.parseReal;
	},
});
var readInt_1 = require("./methods/readInt");
Object.defineProperty(exports, "readInt", {
	enumerable: true,
	get: function () {
		return readInt_1.readInt;
	},
});
var readReal_1 = require("./methods/readReal");
Object.defineProperty(exports, "readReal", {
	enumerable: true,
	get: function () {
		return readReal_1.readReal;
	},
});
