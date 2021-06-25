import { GRID_SIZE, direction, TOTAL_SIZE, MAX } from "../Constants";
import { CreateTopMovement, CreateBottomMovement } from "./Helpers";

export const XTopPanel = (ChessData, Block, Wall2, dropID) => {
  const XTop = ChessData.filter((item) => {
    const block = Block.id;
    const Item = parseFloat(item.id);
    return (
      Item % 7 === (block % 7) - direction - 1 &&
      block % GRID_SIZE >= 0 &&
      Item <= block
    );
  });

  const XCheckTop = CreateTopMovement(XTop, Wall2, dropID, Block, 1);

  return XCheckTop;
};

export const YTopPanel = (ChessData, block, Wall1, dropID) => {
  const YTop = ChessData.filter(
    (item) =>
      parseFloat(item.id) % 9 === (block.id % 9) - direction - 1 &&
      parseFloat(item.id) < block.id
  );

  const YCheckTop = CreateTopMovement(YTop, Wall1, dropID, block, 0);

  return YCheckTop;
};

export const YBottomPanel = (ChessData, block, Wall2, dropID) => {
  const YBottom = ChessData.filter(
    (item) =>
      parseFloat(item.id) % 9 === (block.id % 9) - direction - 1 &&
      parseFloat(item.id) > parseFloat(block.id) &&
      item.id
  );

  const YCheckBottom = CreateBottomMovement(
    YBottom,
    Wall2,
    block,
    dropID,
    ChessData
  );

  return YCheckBottom;
};

export const XBottomPanel = (ChessData, Bishop, Wall2, dropID) => {
  const XBottom = ChessData.filter((item) => {
    const bishop = Number(Bishop.id);
    const block = item.id;
    return (
      bishop % 7 === (block % 7) - direction - 1 &&
      block % GRID_SIZE <= TOTAL_SIZE &&
      bishop < block &&
      item.id !== MAX
    );
  });

  const XCheckBottom = CreateBottomMovement(
    XBottom,
    Wall2,
    Bishop,
    dropID,
    ChessData
  );

  const Way = XCheckBottom.filter((item) => !Wall2.includes(item));

  return Way;
};
