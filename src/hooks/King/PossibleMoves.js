import { GRID_SIZE } from "../Constants";

export const KingMove = (ID, TYPE) => {
  const Move =
    TYPE === "white"
      ? [
          ID - GRID_SIZE,
          ID + GRID_SIZE,
          ID - GRID_SIZE - 1,
          ID - GRID_SIZE + 1,
          ID - GRID_SIZE + 1 + 8,
          ID - GRID_SIZE + 8 - 1,
          ID - GRID_SIZE + 16 - 1,
          ID - GRID_SIZE + 16 + 1,
        ]
      : [
          ID - GRID_SIZE,
          ID + GRID_SIZE,
          ID + GRID_SIZE - 1,
          ID + GRID_SIZE + 1,
          ID - GRID_SIZE + 1,
          ID - GRID_SIZE - 1,
          ID - GRID_SIZE - 1 + 8,
          ID - GRID_SIZE + 1 + 8,
        ];

  return Move;
};
