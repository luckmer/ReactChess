import { GRID_SIZE } from "../Constants";

export const KnightMove = (ID, TYPE) => {
  const Move =
    TYPE === "white"
      ? [
          ID - GRID_SIZE + 14,
          ID - GRID_SIZE + 14 + 11,
          ID - GRID_SIZE + 14 + 9,
          ID - GRID_SIZE + 18,
          ID - GRID_SIZE - 9,
          ID - GRID_SIZE - 7,
          ID - GRID_SIZE - 2,
          ID - GRID_SIZE + 2,
        ]
      : [
          ID - GRID_SIZE + 14,
          ID - GRID_SIZE + 14 + 11,
          ID - GRID_SIZE + 14 + 9,
          ID - GRID_SIZE + 18,
          ID - GRID_SIZE - 9,
          ID - GRID_SIZE - 7,
          ID - GRID_SIZE - 2,
          ID - GRID_SIZE + 2,
        ];

  return Move;
};
