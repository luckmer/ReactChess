export const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
export const GRID_SIZE = 8;
export const TOTAL_SIZE = 8 ** 2 - 1;
export const MAX = 8 ** 2;
export const direction = -1;

export const WallCreator = (DATA, POS) =>
  DATA.filter((item) => item.id % 8 === POS).map((el) => el.id);

export const FindTheSameType = (TYPE, ChessData) =>
  ChessData.find((el) => Number(el.id) === Number(TYPE));

export const TargetType = (TYPE, POS) =>
  TYPE && TYPE.split(" ")[POS].replace(/[,]/g, "");

export const FilterType = (data, DROP) =>
  data
    .filter((el) => Number(el.id) === Number(DROP))
    .map(({ Type }) => Type === "")[0];

export const KingAttack = (attack, DROP) =>
  attack
    .filter((el) => Number(el.id) === Number(DROP))
    .map((el) => el.ChessImg !== "Empty" && el.id);

export const PrevWallCreator = (data, from, to) =>
  data.filter((item) => item.id >= from && item.id <= to).map(({ id }) => id);

export const BlockTypeFind = (xrCreateBottom, block) => {
  const black = xrCreateBottom.filter(
    (item) => item.Type.match(/black/) && item.id !== block.id
  );

  const white = xrCreateBottom.filter(
    (item) => item.Type.match(/white/) && item.id !== block.id
  );

  return { black, white };
};
