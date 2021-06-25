import { BlockTypeFind, TypeCreator, WallCreator } from "../Constants";

export const CreateBottomMovement = (obj, wall, block, id, ChessData) => {
  const Wall1 = WallCreator(ChessData, 1);

  const FindYTop = obj.find(({ id }) => wall.includes(id));

  let bottom = obj.filter((item) =>
    Number(item.id) < FindYTop ? FindYTop.id : Number(id)
  );

  if (FindYTop) {
    bottom = obj.filter((item) => item.id <= FindYTop.id);
  }

  bottom = SetBottomSpacer(bottom, obj, block);

  let YCheckTop = bottom.map(({ id }) => id);

  if (id % 8 === 0) {
  }

  const Blocker = obj.find(({ id }) => Wall1.includes(id));

  if (Blocker && id % 8 === 0) {
    YCheckTop = YCheckTop.filter((item) => item < Blocker.id);
  }

  return YCheckTop;
};

export const CreateTopMovement = (YTop, Wall1, dropID, obj, pos) => {
  const FindYTop = YTop.find(({ id }) => Wall1.includes(id));

  let createYTop = YTop.filter((item) =>
    Number(item.id) <= FindYTop ? FindYTop.id : Number(dropID)
  );

  if (FindYTop) createYTop = YTop.filter((item) => item.id >= FindYTop.id);
  createYTop = setTopSpacer(createYTop, obj, pos, YTop);

  const YCheckTop = createYTop.map(({ id }) => id);
  return YCheckTop;
};

const SetBottomSpacer = (createYTop, obj, block) => {
  const { black, white } = BlockTypeFind(createYTop, obj);

  if (white) {
    const ID = white.shift();
    if (ID)
      createYTop = createYTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id < Number(ID.id)
          : road.id <= Number(ID.id)
      );
  }

  if (black) {
    const ID = black.shift();
    if (ID)
      createYTop = createYTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id < Number(ID.id)
          : road.id <= Number(ID.id)
      );
  }

  return createYTop;
};

const setTopSpacer = (top, block, pos, YTop) => {
  const { black, white } = BlockTypeFind(top, block);

  if (black && top && block.Type) {
    const GetID = black.pop();
    if (GetID)
      top = YTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? road.id > Number(GetID.id) && Number(road.id < block.id)
          : road.id >= Number(GetID.id) && Number(road.id < block.id)
      );
  }

  if (white && block.Type) {
    const id = white.pop();
    if (id)
      top = YTop.filter((road) =>
        TypeCreator(road.Type) === TypeCreator(block.Type)
          ? Number(road.id > id.id)
          : Number(road.id >= id.id)
      ).map(({ id }) => id);
  }

  return top;
};
