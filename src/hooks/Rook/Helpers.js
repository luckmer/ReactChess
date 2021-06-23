import { BlockTypeFind } from "../Constants";

export const BlockLeftWall = (ChessData, block, Result, ClearNumbers) => {
  const PossibleBlocks = ChessData.filter(
    (item) => item.id !== block.id && Result.includes(item.id)
  );
  const { black, white } = BlockTypeFind(PossibleBlocks, block);

  if (white || black) {
    const ID = white.length >= 1 ? white.pop() : black.pop();
    if (ID) Result = ClearNumbers.filter((item) => item >= ID.id);
  }
  return Result;
};

export const BlockRightWall = (createRight, block, rxCheckRight) => {
  const { black, white } = BlockTypeFind(createRight, block);

  if (white || black) {
    const ID = white.length >= 1 ? white.pop() : black.shift();
    if (ID) createRight = rxCheckRight.filter((item) => item.id <= ID.id);
  }
  return createRight;
};

export const BlockTopWall = (rxCreateTop, block, createTop) => {
  const { black, white } = BlockTypeFind(rxCreateTop, block);

  if (black) {
    const ID = black.pop();
    if (ID) {
      createTop = rxCreateTop.filter((item) => item.id >= ID.id);
    }
  }

  if (white) {
    const ID = white.pop();
    if (ID) {
      createTop = rxCreateTop.filter((item) => item.id > ID.id);
    }
  }

  return createTop;
};

export const BlockBottomWall = (xrCreateBottom, block, createBottom) => {
  const { black, white } = BlockTypeFind(xrCreateBottom, block);

  if (black || white) {
    const ID = black.length >= 1 ? black.shift() : white.shift();
    if (ID) {
      createBottom = xrCreateBottom.filter((item) => item.id <= ID.id);
    }
  }
  return createBottom;
};
