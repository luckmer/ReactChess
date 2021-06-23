import { BlockTypeFind } from "../Constants";

export const CreateBottomMovement = (obj, wall, id) => {
  const FindYTop = obj.find(({ id }) => wall.includes(id));

  let createYTop = obj.filter((item) =>
    Number(item.id) <= FindYTop ? FindYTop.id : Number(id)
  );

  if (FindYTop) {
    createYTop = obj.filter((item) => item.id <= FindYTop.id);
  }

  createYTop = SetBottomSpacer(createYTop, obj);

  const YCheckTop = createYTop.map(({ id }) => id);

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

const SetBottomSpacer = (createYTop, obj) => {
  const { black, white } = BlockTypeFind(createYTop, obj);

  if (white || black) {
    const ID = white.length >= 1 ? white.shift() : black.shift();
    if (ID) createYTop = obj.filter((item) => item.id <= Number(ID.id));
  }

  return createYTop;
};

const setTopSpacer = (createYTop, obj, pos, YTop) => {
  const { black, white } = BlockTypeFind(createYTop, obj);

  if (black) {
    const GetID = pos === 0 ? black.shift() : black.pop();
    if (GetID) createYTop = YTop.filter((item) => item.id >= GetID.id);
  }

  if (white) {
    const id = white.shift();
    if (id) createYTop = YTop.filter((item) => item.id >= id.id);
  }

  return createYTop;
};
