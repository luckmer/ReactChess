import { KnightMove } from "../hooks/Knight/PossibleMoves";

describe("KnightMove", () => {
  test("expect move for white knight", () => {
    const color = "white";
    const ID = 42;
    const Test = KnightMove(ID, color);
    const moves = [48, 59, 57, 52, 25, 27, 32, 36];
    expect(Test).toEqual(moves);
  });

  test("expect move for black knight", () => {
    const color = "black";
    const ID = 42;
    const Test = KnightMove(ID, color);
    const moves = [48, 59, 57, 52, 25, 27, 32, 36];
    expect(Test).toEqual(moves);
  });

  test("expect different ID for white knight", () => {
    const color = "white";
    const ID = 12;
    const Test = KnightMove(ID, color);
    const moves = [18, 29, 27, 22, -5, -3, 2, 6];

    expect(Test).toEqual(moves);
  });

  test("expect different ID for black knight", () => {
    const color = "black";
    const ID = 24;
    const Test = KnightMove(ID, color);
    const moves = [30, 41, 39, 34, 7, 9, 14, 18];
    expect(Test).toEqual(moves);
  });

  test("expect none empty array for white knight", () => {
    const color = "white";
    const ID = 0;
    const Test = KnightMove(ID, color);
    const moves = [6, 17, 15, 10, -17, -15, -10, -6];

    expect(Test).toEqual(moves);
  });

  test("expect none empty array for black knight", () => {
    const color = "black";
    const ID = 0;
    const Test = KnightMove(ID, color);
    const moves = [6, 17, 15, 10, -17, -15, -10, -6];
    expect(Test).toEqual(moves);
  });

  test("expect data", () => {
    const color = "";
    const ID = 0;
    const Test = KnightMove(ID, color);
    const moves = [];
    expect(Test).not.toEqual(moves);
  });
});
