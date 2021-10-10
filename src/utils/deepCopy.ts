/**
 * Does deep copy of passed item using JSON parsing.
 *
 * ### Example
 * ```js
 * deepCopy({a: "b"})
 * // => {a: "b"}
 * ```
 *
 * @param item - Any TS type or object containing primitive types
 * @returns Copy without reference
 */
export const deepCopy = item => JSON.parse(JSON.stringify(item));
