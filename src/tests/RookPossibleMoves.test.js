import {
  CreateRightWall,
  CreateLeftWall,
  CreateBottomWall,
  CreateTopWall,
} from "../hooks/Rook/PossibleMoves";
import WhiteRook from "../icons/WhiteRook.png";
import BlackRook from "../icons/BlackRook.png";

describe("CreateTopWall", () => {
  test("expect possible move up", () => {
    const { ChessData, block, Wall3, dropID } = Data();
    const crateTop = CreateTopWall(ChessData, block, Wall3, dropID);
    expect(crateTop).toEqual([17, 25, 33]);
  });

  test("expect different id Up", () => {
    const { ChessData, Wall3 } = Data();
    const dropID = "17";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 25,
      _id: 25,
    };
    const crateTop = CreateTopWall(ChessData, block, Wall3, dropID);
    expect(crateTop).toEqual([17]);
  });

  test("in the event of a collision, do not expect possible move", () => {
    const { ChessData, Wall3 } = Data();
    const dropID = "17";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 17,
      _id: 17,
    };
    const crateTop = CreateTopWall(ChessData, block, Wall3, dropID);
    expect(crateTop).toEqual([]);
  });
});

describe("CreateRightWall", () => {
  test("expect possible right wall move", () => {
    const { ChessData, Wall2 } = Data();
    const dropID = "49";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 57,
      _id: 57,
    };
    const createRight = CreateRightWall(ChessData, block, Wall2, dropID);
    expect(createRight).toEqual([64]);
  });
  test("in the event of a collision, do not expect possible move", () => {
    const { ChessData, Wall2 } = Data();
    const dropID = "46";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 42,
      _id: 42,
    };
    const createRight = CreateRightWall(ChessData, block, Wall2, dropID);
    expect(createRight).toEqual([45]);
  });
});

describe("CreateLeftWall", () => {
  test("expect possible left wall move", () => {
    const { ChessData, Wall1 } = Data();
    const dropID = "44";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 45,
      _id: 45,
    };
    const createLeft = CreateLeftWall(ChessData, block, Wall1, dropID);
    expect(createLeft).toEqual([41, 42, 43, 44, 45]);
  });

  test("expect more moves", () => {
    const { ChessData, Wall1 } = Data();
    const dropID = "47";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 48,
      _id: 48,
    };
    const createLeft = CreateLeftWall(ChessData, block, Wall1, dropID);
    expect(createLeft).toEqual([45, 46, 47, 48]);
  });

  test("expect no move if collision", () => {
    const { ChessData, Wall1 } = Data();
    const dropID = "41";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 42,
      _id: 42,
    };
    const createLeft = CreateLeftWall(ChessData, block, Wall1, dropID);
    expect(createLeft).toEqual([41, 42]);
  });
});

describe("CreateBottomWall", () => {
  test("expect moves", () => {
    const { ChessData, Wall4 } = Data();
    const dropID = "33";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 25,
      _id: 25,
    };
    const createBottom = CreateBottomWall(ChessData, block, Wall4, dropID);
    expect(createBottom).toEqual([33]);
  });

  test("expect collision white white block", () => {
    const { ChessData, Wall4 } = Data();
    const dropID = "41";

    const block = {
      ChessImg: WhiteRook,
      FirstMove: undefined,
      Type: "white, WhiteRook",
      background: 1,
      id: 33,
      _id: 33,
    };
    const createBottom = CreateBottomWall(ChessData, block, Wall4, dropID);
    expect(createBottom).toEqual([]);
  });
});

const Data = () => {
  const Wall1 = [1, 9, 17, 25, 33, 41, 49, 57];
  const Wall2 = [8, 16, 24, 32, 40, 48, 56, 64];
  const Wall3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const Wall4 = [57, 58, 59, 60, 61, 62, 63];

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

  const block = {
    ChessImg: WhiteRook,
    FirstMove: undefined,
    Type: "white, WhiteRook",
    background: 1,
    id: 41,
    _id: 41,
  };
  const dropID = "49";

  return { ChessData, block, Wall1, Wall2, Wall3, Wall4, dropID };
};
