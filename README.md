# @prokopschield/number-parser

A lightweight utility for parsing integers and real numbers. This module offers a simple way to handle number parsing while enforcing strict type validation by throwing errors when the input is not a valid number.

## Installation

Install via npm:

```
npm install @prokopschield/number-parser
```

## Usage

The module provides four core functions:

-   `parseInt<I>(argument: I): number` - Parses an integer from any input.
-   `parseReal<I>(argument: I): number` - Parses a real (floating-point) number from any input.
-   `readInt<P extends object, K extends keyof P>(parent: P, key: K): number` - Reads an integer from a specified property of an object.
-   `readReal<P extends object, K extends keyof P>(parent: P, key: K): number` - Reads a real number from a specified property of an object.

### Example

```typescript
import {
	parseInt,
	parseReal,
	readInt,
	readReal,
} from "@prokopschield/number-parser";

// Parse an integer
const intVal = parseInt("42"); // returns 42

// Parse a real number
const realVal = parseReal("3.14"); // returns 3.14

// Read an integer from an object property
const myObject = { age: "30", weight: "70.5" };
const age = readInt(myObject, "age"); // returns 30

// Read a real number from an object property
const weight = readReal(myObject, "weight"); // returns 70.5
```

### Handling Errors

All functions will throw an error if the provided input or property is not a valid number. This ensures strict type safety and prevents unexpected behavior.

```typescript
// Will throw an error since "abc" is not a valid integer
parseInt("abc");

// Will throw an error if the specified property is not a valid number
const invalidObject = { age: "thirty" };
readInt(invalidObject, "age");
```

## API

### `parseInt<I>(argument: I): number`

Attempts to parse an integer from the given `argument`. Throws an error if the input is not a valid integer.

-   **Parameters**:
    -   `argument: I` - The input to be parsed as an integer.
-   **Returns**: A number representing the parsed integer.

### `parseReal<I>(argument: I): number`

Attempts to parse a real number (floating-point) from the given `argument`. Throws an error if the input is not a valid number.

-   **Parameters**:
    -   `argument: I` - The input to be parsed as a real number.
-   **Returns**: A number representing the parsed real number.

### `readInt<P extends object, K extends keyof P>(parent: P, key: K): number`

Attempts to read and parse an integer from the specified property `key` of the `parent` object. Throws an error if the value is not a valid integer.

-   **Parameters**:
    -   `parent: P` - The object containing the property.
    -   `key: K` - The key of the property to read and parse.
-   **Returns**: A number representing the parsed integer.

### `readReal<P extends object, K extends keyof P>(parent: P, key: K): number`

Attempts to read and parse a real number from the specified property `key` of the `parent` object. Throws an error if the value is not a valid number.

-   **Parameters**:
    -   `parent: P` - The object containing the property.
    -   `key: K` - The key of the property to read and parse.
-   **Returns**: A number representing the parsed real number.

## Error Handling

These functions strictly enforce the validation of the input data, throwing errors when encountering invalid or non-numeric inputs:

-   **Invalid Integer**: If the input for `parseInt` or `readInt` is not a valid integer (e.g., a string that can't be parsed as an integer), an error will be thrown.
-   **Invalid Real Number**: If the input for `parseReal` or `readReal` is not a valid number (e.g., non-numeric characters), an error will be thrown.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the GNU Lesser General Public License (LGPL).
