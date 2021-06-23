import { GRID_SIZE } from "../Constants";

export const PawnMove = (ID, TYPE, obj) => {
  const FirstMove =
    TYPE === "white"
      ? [ID - GRID_SIZE, ID - GRID_SIZE * 2]
      : [Number(ID) + GRID_SIZE, Number(ID) + GRID_SIZE * 2];

  const Move = TYPE === "white" ? [ID - GRID_SIZE] : [Number(ID) + GRID_SIZE];

  return obj.FirstMove === false ? Move : FirstMove;
};
