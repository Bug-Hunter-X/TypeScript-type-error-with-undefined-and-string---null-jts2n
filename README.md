# TypeScript Type Error with undefined and string | null

This example demonstrates a common type error in TypeScript when dealing with optional parameters that might be undefined.  The function `printName` expects a parameter of type `string | null`.  However, when `undefined` is passed, TypeScript correctly flags this as an error, as `undefined` is not included in the `string | null` type union.