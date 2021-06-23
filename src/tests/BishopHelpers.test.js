import {
  CreateBottomMovement,
  CreateTopMovement,
} from "../hooks/Bishop/Helpers";
import BlackPawn from "../icons/BlackPawn.png";
import WhitePawn from "../icons/WhitePawn.png";
import WhiteBishop from "../icons/WhiteBishop.png";

describe("CreateBottomMovement", () => {
  test("expect the possibility of downward movement", () => {
    const { YBottom, Wall2 } = Helper();
    const dropID = "44";
    const Check = CreateBottomMovement(YBottom, Wall2, dropID);
    expect(Check).toEqual([44, 53, 62]);
  });

  test("expect different position", () => {
    const { YBottom, Wall2 } = Helper();
    const dropID = "48";
    const Check = CreateBottomMovement(YBottom, Wall2, dropID);
    expect(Check).toEqual([44, 53, 62]);
  });
});

describe("CreateTopMovement", () => {
  test("expect the possibility of upward movement", () => {
    const { Obj, data, wall1 } = TopHelper();
    const DropId = "52";
    const YCheckTop = CreateTopMovement(data, wall1, DropId, Obj, 0);
    expect(YCheckTop).toEqual([52, 45, 38, 36]);
  });

  test("expect Top different position", () => {
    const { Obj2, data, wall1 } = TopHelper();
    const DropId = "38";
    const YCheckTop = CreateTopMovement(data, wall1, DropId, Obj2, 0);
    expect(YCheckTop).toEqual([52, 45, 38, 36]);
  });
});

const Helper = () => {
  const YBottom = [
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 0,
      id: 44,
      _id: 44,
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
      ChessImg: "Empty",
      FirstMove: undefined,
      Type: "",
      background: 0,
      id: 62,
      _id: 62,
    },
  ];
  const Wall2 = [8, 16, 24, 32, 40, 48, 56, 64];
  return { YBottom, Wall2 };
};

const TopHelper = () => {
  const wall1 = [1, 9, 17, 25, 33, 41, 49, 57];
  const createYTop = [
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 25,
      _id: 25,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 34,
      _id: 34,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 43,
      _id: 43,
    },
  ];
  const data = [
    {
      ChessImg: BlackPawn,
      FirstMove: true,
      Type: "black, BlackPawn",
      background: 1,
      id: 24,
      _id: 24,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 18,
      _id: 18,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 52,
      _id: 52,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 45,
      _id: 45,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 38,
      _id: 38,
    },
    {
      ChessImg: "Empty",
      FirstMove: false,
      Type: "",
      background: 1,
      id: 27,
      _id: 27,
    },
    {
      ChessImg: WhitePawn,
      FirstMove: false,
      Type: "white, whitePawn",
      background: 1,
      id: 36,
      _id: 36,
    },
  ];
  const Obj = {
    ChessImg: WhiteBishop,
    FirstMove: false,
    Type: "white, WhiteBishop",
    background: 1,
    id: 45,
    _id: 45,
  };
  const Obj2 = {
    ChessImg: WhiteBishop,
    FirstMove: false,
    Type: "white, WhiteBishop",
    background: 1,
    id: 38,
    _id: 38,
  };

  return { Obj, data, wall1, Obj2, createYTop };
};
