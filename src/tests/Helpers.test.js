import {
  BlockLeftWall,
  BlockRightWall,
  BlockTopWall,
  BlockBottomWall,
} from "../hooks/Rook/Helpers";
import WhiteRook from "../icons/WhiteRook.png";
import BlackRook from "../icons/BlackRook.png";

const Data = () => {
  const blockRightWall = {};
  const blockTopWall = {};
  const blockBottomWall = {};
  const ChessData = [
    {
      ChessImg: BlackRook,
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
      ChessImg: BlackRook,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 27,
      _id: 27,
    },
    {
      ChessImg: BlackRook,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 52,
      _id: 52,
    },
    {
      ChessImg: BlackRook,
      Type: "white, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 36,
      _id: 36,
    },
    {
      ChessImg: BlackRook,
      Type: "white, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 9,
      _id: 9,
    },
    {
      ChessImg: BlackRook,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 64,
      _id: 64,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 1,
      _id: 1,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 9,
      _id: 9,
    },
    {
      ChessImg: BlackRook,
      Type: "black, BlackRook",
      background: 0,
      FirstMove: undefined,
      id: 17,
      _id: 17,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 25,
      _id: 25,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 33,
      _id: 33,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 34,
      _id: 34,
    },
  ];
  return {
    ChessData,
    blockBottomWall,
    blockTopWall,
    blockRightWall,
  };
};

describe("BlockLeftWall", () => {
  test("expect only one move", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 57,
      _id: 57,
    };
    const Result = [57];
    const ClearNumbers = [57];

    const check = BlockLeftWall(ChessData, block, Result, ClearNumbers);
    expect(check).toEqual([57]);
  });

  test("expect new obj position", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 46,
      _id: 46,
    };
    const Result = [41, 42, 43, 44, 45];
    const ClearNumbers = [41, 42, 43, 44, 45];

    const check = BlockLeftWall(ChessData, block, Result, ClearNumbers);
    expect(check).toEqual([45]);
  });
});

describe("BlockRightWall", () => {
  test("expect possible move on right side", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 41,
      _id: 41,
    };
    const check = BlockRightWall(ChessData, block, ChessData);
    const result = [
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "white, BlackRook",
        _id: 9,
        background: 0,
        id: 9,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 1,
        background: 0,
        id: 1,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 9,
        background: 0,
        id: 9,
      },
    ];
    expect(check).toEqual(result);
  });

  test("expect new position on right side", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 52,
      _id: 52,
    };
    const check = BlockRightWall(ChessData, block, ChessData);
    const result = [
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "white, BlackRook",
        _id: 9,
        background: 0,
        id: 9,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 1,
        background: 0,
        id: 1,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 9,
        background: 0,
        id: 9,
      },
    ];
    expect(check).toEqual(result);
  });
});

describe("BlockTopWall", () => {
  test("expect possible move up", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 57,
      _id: 57,
    };
    const result = [
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 45,
        background: 0,
        id: 45,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 53,
        background: 0,
        id: 53,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 27,
        background: 0,
        id: 27,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 52,
        background: 0,
        id: 52,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "white, BlackRook",
        _id: 36,
        background: 0,
        id: 36,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 64,
        background: 0,
        id: 64,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 17,
        background: 0,
        id: 17,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 25,
        background: 0,
        id: 25,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 33,
        background: 0,
        id: 33,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 34,
        background: 0,
        id: 34,
      },
    ];
    const blockTopWall = BlockTopWall(ChessData, block, ChessData);
    expect(blockTopWall).toEqual(result);
  });
});

describe("BlockBottomWall", () => {
  test("expect possible move down", () => {
    const { ChessData } = Data();
    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 57,
      _id: 57,
    };

    const blockBottomWall = BlockBottomWall(ChessData, block, ChessData);
    const result = [
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 45,
        background: 0,
        id: 45,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 27,
        background: 0,
        id: 27,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "white, BlackRook",
        _id: 36,
        background: 0,
        id: 36,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "white, BlackRook",
        _id: 9,
        background: 0,
        id: 9,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 1,
        background: 0,
        id: 1,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 9,
        background: 0,
        id: 9,
      },
      {
        ChessImg: "BlackRook.png",
        FirstMove: undefined,
        Type: "black, BlackRook",
        _id: 17,
        background: 0,
        id: 17,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 25,
        background: 0,
        id: 25,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 33,
        background: 0,
        id: 33,
      },
      {
        ChessImg: "Empty",
        FirstMove: false,
        Type: "",
        _id: 34,
        background: 0,
        id: 34,
      },
    ];
    expect(blockBottomWall).toEqual(result);
  });
});
