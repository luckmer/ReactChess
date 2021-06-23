import { PawnMove } from "../hooks/Pawns/PossibleMoves";
import WhitePawn from "../icons/WhitePawn.png";
import BlackPawn from "../icons/BlackPawn.png";

const White = {
  ChessImg: WhitePawn,
  FirstMove: true,
  Type: "white, whitePawn",
  background: 1,
  id: 52,
  _id: 52,
};
const BackWhite = {
  ChessImg: WhitePawn,
  FirstMove: false,
  Type: "white, whitePawn",
  background: 1,
  id: 52,
  _id: 52,
};

const Black = {
  ChessImg: BlackPawn,
  FirstMove: true,
  Type: "black, BlackPawn",
  background: 0,
  id: 12,
  _id: 12,
};

const BackBlack = {
  ChessImg: BlackPawn,
  FirstMove: false,
  Type: "black, BlackPawn",
  background: 0,
  id: 12,
  _id: 12,
};

describe("PawnMove", () => {
  test("expect double move for White pawn", () => {
    const ID = 52;
    const TYPE = "white";
    const Test = PawnMove(ID, TYPE, White);
    expect(Test).toEqual([44, 36]);
  });

  test("expect pawn without first move", () => {
    const ID = 52;
    const TYPE = "white";
    const Test = PawnMove(ID, TYPE, BackWhite);
    expect(Test).toEqual([44]);
  });

  test("expect different ID for white pawn", () => {
    const ID = 21;
    const TYPE = "white";
    const Test = PawnMove(ID, TYPE, White);
    expect(Test).toEqual([13, 5]);
  });

  test("expect white pawn without first move", () => {
    const ID = 21;
    const TYPE = "white";
    const Test = PawnMove(ID, TYPE, BackWhite);
    expect(Test).toEqual([13]);
  });

  test("expect different ID for white pawn without first move", () => {
    const ID = 41;
    const TYPE = "white";
    const Test = PawnMove(ID, TYPE, BackWhite);
    expect(Test).toEqual([33]);
  });

  test("expect double move for Black pawn", () => {
    const ID = 22;
    const TYPE = "black";
    const Test = PawnMove(ID, TYPE, Black);
    expect(Test).toEqual([30, 38]);
  });

  test("expect black pawn without first move", () => {
    const ID = 52;
    const TYPE = "black";
    const Test = PawnMove(ID, TYPE, BackBlack);
    expect(Test).toEqual([60]);
  });

  test("expect different ID for black pawn", () => {
    const ID = 11;
    const TYPE = "black";
    const Test = PawnMove(ID, TYPE, Black);
    expect(Test).toEqual([19, 27]);
  });

  test("expect different ID for black pawn without first move", () => {
    const ID = 41;
    const TYPE = "black";
    const Test = PawnMove(ID, TYPE, BackWhite);
    expect(Test).toEqual([49]);
  });
});
