/**
 * Check if passed object is empty
 *
 * ### Example
 * ```js
 * isEmptyObject({})
 * // => true
 * ```
 *
 * @param object - Any JavaScript type
 * @returns if object is empty
 */
export const isEmptyObject = (object): boolean => {
  return Object.keys(object)?.length === 0 && object?.constructor === Object;
};
