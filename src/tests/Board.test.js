import { Board } from "../hooks/Board/Board";

describe("board", () => {
  test("board can't be empty", () => {
    expect(Board).not.toBe(undefined);
  });

  test("expect board length", () => {
    expect(Board).toHaveLength(64);
  });
});
