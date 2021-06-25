import { GRID_SIZE, direction } from "../Constants";
import {
  BlockLeftWall,
  BlockRightWall,
  BlockBottomWall,
  BlockTopWall,
} from "./Helpers";

export const CreateRightWall = (ChessData, block, Wall2, dropID) => {
  let rxCheckRight = ChessData.filter(
    (item) =>
      parseFloat(item.id) % GRID_SIZE >= 0 && parseFloat(item.id) >= block.id
  );
  const findRight = rxCheckRight.find(({ id }) => Wall2.includes(id));

  let createRight = rxCheckRight.filter((item) =>
    Number(item.id) <= findRight ? findRight.id : Number(dropID)
  );

  if (findRight)
    createRight = rxCheckRight.filter((item) => item.id <= findRight.id);

  createRight = BlockRightWall(createRight, block, rxCheckRight);

  const RCheckR = createRight.map(({ id }) => id);

  return RCheckR;
};

export const CreateLeftWall = (ChessData, block, Wall1, dropID) => {
  const values = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE + 4; i++) {
    const row = Array(i)
      .fill(1)
      .map((_, i) => i + 1);
    const ceil = Math.ceil(i / GRID_SIZE);
    const TheSameHeight = ceil * GRID_SIZE;
    const Divisible = i % GRID_SIZE === 0;
    if (!Divisible && i > TheSameHeight - GRID_SIZE) continue;
    values.push(row);
  }

  const calcSum = (arr) =>
    arr.reduce((acc, currentVal) => {
      const isArray = Array.isArray(currentVal);
      if (isArray) {
        return acc.concat(calcSum(currentVal));
      } else {
        return acc.concat(currentVal);
      }
    }, []);

  const connect = calcSum(values);
  let FindWall = connect.filter((value) => value <= Number(block.id)).reverse();

  const WallDetector = FindWall.find((id) => Wall1.includes(id));

  if (WallDetector) {
    FindWall = connect.filter(
      (item) => item >= WallDetector && item <= block.id
    );
  }

  const ClearNumbers = [...new Set(FindWall)];
  let Result = ClearNumbers;

  Result = BlockLeftWall(ChessData, block, Result, ClearNumbers);

  let RCheckL = Result;

  return RCheckL;
};

export const CreateBottomWall = (ChessData, block, Wall4, dropID) => {
  const xrCreateBottom = ChessData.filter((item) => {
    const Item = parseFloat(item.id);
    const Block = Number(block.id);
    return (
      Item % GRID_SIZE === (Block % GRID_SIZE) + direction + 1 && Item > Block
    );
  });

  const FindBottom = xrCreateBottom.find(({ id }) => Wall4.includes(id));

  let createBottom = xrCreateBottom.filter((item) =>
    Number(item.id) <= FindBottom ? FindBottom.id : Number(dropID)
  );

  if (FindBottom) {
    createBottom = xrCreateBottom.filter((item) => item.id <= FindBottom.id);
  }

  createBottom = BlockBottomWall(xrCreateBottom, block, createBottom);

  const RCheckB = createBottom.map(({ id }) => id);
  return RCheckB;
};

export const CreateTopWall = (ChessData, block, Wall3, dropID) => {
  const rxCreateTop = ChessData.filter((item) => {
    let Item = Number(item.id);
    let Block = Number(block.id);
    return (
      Item % GRID_SIZE === (Block % GRID_SIZE) + direction + 1 && Item < Block
    );
  });

  const findTop = rxCreateTop.find(({ id }) => Wall3.includes(id));

  let createTop = rxCreateTop.filter((item) =>
    Number(item.id) <= findTop ? findTop.id : Number(dropID)
  );

  if (findTop) {
    createTop = rxCreateTop.filter(
      (item) => item.id >= findTop.id && item.id < block.id
    );
  }

  createTop = BlockTopWall(rxCreateTop, block, createTop);

  const RCheckT = createTop.map(({ id }) => id);
  return RCheckT;
};
