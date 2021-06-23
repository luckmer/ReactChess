import {
  XTopPanel,
  YTopPanel,
  YBottomPanel,
  XBottomPanel,
} from "../hooks/Bishop/PossibleMoves";
import WhiteBishop from "../icons/WhiteBishop.png";

const GlobalData = () => {
  const dropID = "45";
  const wall2 = [1, 9, 17, 25, 33, 41, 49, 57];
  const wall1 = [8, 16, 24, 32, 40, 48, 56, 64];
  const Block = {
    ChessImg: WhiteBishop,
    FirstMove: undefined,
    Type: "white, WhiteBishop",
    background: 1,
    id: 59,
    _id: 59,
  };
  return { Block, wall2, dropID, wall1 };
};

describe("XTopPanel", () => {
  const { Block, wall1, dropID } = GlobalData();
  test("expect possible move up", () => {
    const Check = XTopPanel(ChessData, Block, wall1, dropID);
    expect(Check).toEqual([52]);
  });
});

describe("YTopPanel", () => {
  const { Block, wall2, dropID } = GlobalData();
  test("expect no possible move", () => {
    const Check = YTopPanel(ChessData, Block, wall2, dropID);
    expect(Check).toEqual([]);
  });
});

describe("YBottomPanel", () => {
  const { Block, wall2, dropID } = GlobalData();

  test("expect no possible move down", () => {
    const Check = YBottomPanel(ChessData, Block, wall2, dropID);
    expect(Check).toEqual([]);
  });
});

describe("XBottomPanel", () => {
  const { Block, dropID, wall1 } = GlobalData();
  test("XBottomPanel", () => {
    const Check = XBottomPanel(ChessData, Block, wall1, dropID);
    expect(Check).toEqual([]);
  });
});

const ChessData = [
  {
    ChessImg: WhiteBishop,
    Type: "black, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 45,
    _id: 45,
  },
  {
    ChessImg: "Empty",
    FirstMove: false,
    Type: "",
    background: 0,
    id: 53,
    _id: 53,
  },
  {
    ChessImg: WhiteBishop,
    Type: "white, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 27,
    _id: 27,
  },
  {
    ChessImg: WhiteBishop,
    Type: "black, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 52,
    _id: 52,
  },
  {
    ChessImg: WhiteBishop,
    Type: "white, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 36,
    _id: 36,
  },
  {
    ChessImg: WhiteBishop,
    Type: "white, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 9,
    _id: 9,
  },
  {
    ChessImg: WhiteBishop,
    Type: "black, BlackRook",
    background: 0,
    FirstMove: undefined,
    id: 64,
    _id: 64,
  },
];
