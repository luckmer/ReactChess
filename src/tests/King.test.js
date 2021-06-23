import { KingMove } from "../hooks/King/PossibleMoves";

describe("KingMove", () => {
  test("expect move for white king", () => {
    const color = "white";
    const ID = 42;
    const Test = KingMove(ID, color);
    const moves = [34, 50, 33, 35, 43, 41, 49, 51];
    expect(Test).toEqual(moves);
  });

  test("expect move for black king", () => {
    const color = "black";
    const ID = 42;
    const Test = KingMove(ID, color);
    const moves = [34, 50, 49, 51, 35, 33, 41, 43];
    expect(Test).toEqual(moves);
  });

  test("expect different ID for white king", () => {
    const color = "white";
    const ID = 12;
    const Test = KingMove(ID, color);
    const moves = [4, 20, 3, 5, 13, 11, 19, 21];

    expect(Test).toEqual(moves);
  });

  test("expect different ID for black king", () => {
    const color = "black";
    const ID = 24;
    const Test = KingMove(ID, color);
    const moves = [16, 32, 31, 33, 17, 15, 23, 25];
    expect(Test).toEqual(moves);
  });

  test("expect none empty array for white king", () => {
    const color = "white";
    const ID = 0;
    const Test = KingMove(ID, color);
    const moves = [-8, 8, -9, -7, 1, -1, 7, 9];

    expect(Test).toEqual(moves);
  });

  test("expect none empty array for black king", () => {
    const color = "black";
    const ID = 0;
    const Test = KingMove(ID, color);
    const moves = [-8, 8, 7, 9, -7, -9, -1, 1];
    expect(Test).toEqual(moves);
  });

  test("expect data", () => {
    const color = "";
    const ID = 0;
    const Test = KingMove(ID, color);
    const moves = [];
    expect(Test).not.toEqual(moves);
  });
});
