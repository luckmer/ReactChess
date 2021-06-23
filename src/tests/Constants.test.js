import WhiteBishop from "../icons/WhiteBishop.png";

import {
  letters,
  numbers,
  GRID_SIZE,
  TOTAL_SIZE,
  MAX,
  direction,
  WallCreator,
  FindTheSameType,
  TargetType,
  FilterType,
  KingAttack,
  PrevWallCreator,
  BlockTypeFind,
} from "../hooks/Constants";

describe("Letters", () => {
  test("expect the array with letters", () => {
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"];
    expect(letters).toEqual(letter);
  });

  test("the array cannot be empty", () => {
    const letter = [];
    expect(letters).not.toEqual(letter);
  });
});

describe("numbers", () => {
  test("expect the array with numbers", () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(numbers).toEqual(number);
  });

  test("the array can't be empty", () => {
    const letter = [];
    expect(letters).not.toEqual(letter);
  });
});

describe("GRID_SIZE", () => {
  test("should return 8", () => {
    expect(GRID_SIZE).toBe(8);
  });
  test("the GRID_SIZE can't be equal 0", () => {
    expect(GRID_SIZE).not.toBe(0);
  });
});

describe("TOTAL_SIZE", () => {
  test("expect TOTAL_SIZE of a chess board smaller by 1", () => {
    expect(TOTAL_SIZE).toBe(63);
  });

  test("the number can't be less than 63", () => {
    expect(TOTAL_SIZE).not.toBe(62);
  });

  test("the number can't be equal 0", () => {
    expect(TOTAL_SIZE).not.toBe(0);
  });
});

describe("MAX", () => {
  test("expect TOTAL_SIZE of a chess", () => {
    expect(MAX).toBe(64);
  });

  test("the number can't be less than 64", () => {
    expect(MAX).not.toBe(63);
  });

  test("the number can't be equal 0", () => {
    expect(MAX).not.toBe(0);
  });
});

describe("direction", () => {
  test("direction always have to be less than 0", () => {
    expect(direction).toBe(-1);
  });
  test("direction can't be less than -1 or higher than 0", () => {
    expect(direction).not.toBe(-2);
    expect(direction).not.toBe(0);
  });
});

describe("WallCreator", () => {
  test("should return an array of possible moves", () => {
    const pos = 1;
    expect(WallCreator(ChessData, pos)).toEqual([9]);
  });

  test("expect black player", () => {
    const pos = 0;
    expect(WallCreator(ChessData, pos)).toEqual([64]);
  });
});

describe("FindTheSameType", () => {
  test("expect only one object with data", () => {
    const Target = 64;
    const result = {
      ChessImg: WhiteBishop,
      FirstMove: undefined,
      Type: "black, BlackRook",
      _id: 64,
      background: 0,
      id: 64,
    };
    expect(FindTheSameType(Target, ChessData)).toEqual(result);
  });

  test("expect different target", () => {
    const Target = 45;
    const result = {
      ChessImg: WhiteBishop,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 45,
      _id: 45,
    };
    expect(FindTheSameType(Target, ChessData)).toEqual(result);
  });
  test("have to be target", () => {
    const Target = 0;
    expect(FindTheSameType(Target, ChessData)).toEqual(undefined);
  });
});

describe("TargetType", () => {
  test("should return  pawn type", () => {
    const Target = 45;
    const FindTarget = FindTheSameType(Target, ChessData);
    const FindTargetType = TargetType(FindTarget && FindTarget.Type, 0);
    expect(FindTargetType).toBe("black");
  });

  test("expect different ID", () => {
    const Target = 36;
    const FindTarget = FindTheSameType(Target, ChessData);
    const FindTargetType = TargetType(FindTarget && FindTarget.Type, 0);
    expect(FindTargetType).toBe("white");
  });
});

describe("FilterType", () => {
  test("expect empty space", () => {
    const filter = FilterType(ChessData, "53");
    expect(filter).toBe(true);
  });

  test("expect pawn", () => {
    const filter = FilterType(ChessData, "27");
    expect(filter).toBe(false);
  });
});

describe("KingAttack", () => {
  test("expect that the king has no enemy", () => {
    const AttackPosFix = KingAttack(ChessData, "53");
    expect(AttackPosFix).toEqual([false]);
  });

  test("expect that the king has enemy", () => {
    const AttackPosFix = KingAttack(ChessData, "27");
    expect(AttackPosFix).toEqual([27]);
  });
});

describe("PrevWallCreator", () => {
  test("expect data from to", () => {
    const Data = PrevWallCreator(ChessData, 27, 53);
    const result = [45, 53, 27, 52, 36];
    expect(Data).toEqual(result);
  });

  test("expect different from to", () => {
    const Data = PrevWallCreator(ChessData, 9, 64);
    const result = [45, 53, 27, 52, 36, 9, 64];
    expect(Data).toEqual(result);
  });
});

describe("BlockTypeFind", () => {
  test("expect array with color collision", () => {
    const block = {
      ChessImg: WhiteBishop,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 52,
      _id: 52,
    };
    const Data = BlockTypeFind(ChessData, block);

    const result = {
      black: [
        {
          ChessImg: "WhiteBishop.png",
          FirstMove: undefined,
          Type: "black, BlackRook",
          _id: 45,
          background: 0,
          id: 45,
        },
        {
          ChessImg: "WhiteBishop.png",
          FirstMove: undefined,
          Type: "black, BlackRook",
          _id: 64,
          background: 0,
          id: 64,
        },
      ],
      white: [
        {
          ChessImg: "WhiteBishop.png",
          FirstMove: undefined,
          Type: "white, BlackRook",
          _id: 27,
          background: 0,
          id: 27,
        },
        {
          ChessImg: "WhiteBishop.png",
          FirstMove: undefined,
          Type: "white, BlackRook",
          _id: 36,
          background: 0,
          id: 36,
        },
        {
          ChessImg: "WhiteBishop.png",
          FirstMove: undefined,
          Type: "white, BlackRook",
          _id: 9,
          background: 0,
          id: 9,
        },
      ],
    };
    expect(Data).toEqual(result);
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
