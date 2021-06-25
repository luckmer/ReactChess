import { BlockTypeFind } from "../Constants";
import { TypeCreator } from "../Constants";

export const BlockLeftWall = (ChessData, block, Result, ClearNumbers) => {
  const PossibleBlocks = ChessData.filter(
    (item) => item.id !== block.id && Result.includes(item.id)
  );
  const { black, white } = BlockTypeFind(PossibleBlocks, block);

  const Data = ChessData.filter((item) => ClearNumbers.includes(item.id));

  if (white && block.Type) {
    const ID = white.pop();
    if (ID) {
      Result = Data.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? Number(road.id > ID.id)
          : Number(road.id >= ID.id)
      ).map(({ id }) => id);
    }
  }

  if (black && block.Type) {
    const ID = black.pop();
    if (ID) {
      ClearNumbers = ClearNumbers.reverse();
      Result = ClearNumbers.filter((item) => item > ID.id);
    }
  }

  return Result;
};

export const BlockRightWall = (right, block, data) => {
  const { black, white } = BlockTypeFind(right, block);

  if (white && block.Type) {
    const ID = white.shift();
    // if (ID) right = RightWallGenerator(right, data, block, ID);
    if (ID)
      right = data.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id < Number(ID.id)
          : road.id <= Number(ID.id)
      );
  }

  if (black && block.Type) {
    const ID = black.shift();
    // if (ID) right = RightWallGenerator(right, data, block, ID);
    if (ID)
      right = data.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id < Number(ID.id)
          : road.id <= Number(ID.id)
      );
  }

  return right;
};

export const BlockTopWall = (rxCreateTop, block, createTop) => {
  const { black, white } = BlockTypeFind(rxCreateTop, block);

  if (black) {
    const ID = black.pop();
    // if (ID) createTop = TopWallGenerator(createTop, block, ID);
    if (ID)
      createTop = createTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id > Number(ID.id) && Number(road.id < block.id)
          : road.id >= Number(ID.id) && Number(road.id < block.id)
      );
  }

  if (white && block.Type) {
    const ID = white.pop();
    // if (ID) createTop = TopWallGenerator(createTop, block, ID);
    if (ID)
      createTop = createTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id > Number(ID.id) && Number(road.id < block.id)
          : road.id >= Number(ID.id) && Number(road.id < block.id)
      );
  }

  return createTop;
};

export const BlockBottomWall = (xrCreateBottom, block, createBottom) => {
  const { black, white } = BlockTypeFind(xrCreateBottom, block);

  if ((black && block.Type) || (white && block.Type)) {
    const ID = black.length >= 1 ? black.shift() : white.shift();
    if (ID)
      createBottom = xrCreateBottom.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id < Number(ID.id)
          : road.id <= Number(ID.id)
      );
  }

  return createBottom;
};
