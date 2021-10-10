import { deepCopy } from "./deepCopy";

describe("deepCopy test suite", () => {
  const item = {
    nestedArray: ["0", 1, 2, [3, 4]]
  };

  const itemCopy = {
    nestedArray: ["0", 1, 2, [3, 4]]
  };

  test("deepCopy is a function", () => {
    expect(typeof deepCopy).toEqual("function");
  });

  test("copy item is the same", () => {
    expect(deepCopy(item)).toEqual(itemCopy);
  });

  test("copy item has no reference", () => {
    expect(deepCopy(item) === itemCopy).toBe(false);
  });
});
