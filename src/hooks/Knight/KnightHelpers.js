import { KnightMove } from "../Knight/PossibleMoves";
import { TOTAL_SIZE, GRID_SIZE } from "../Constants";
import { WallCreator, FindDifferentElement, TypeCreator } from "../Constants";

const KnightHelpers = (ChessData, knight, FindTargetType, dropID) => {
  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const KnightLock = KnightMove(knight.id, FindTargetType).filter(
    (el) => el <= TOTAL_SIZE && el >= 0
  );

  const ClearDataForWalls = KnightLock.filter((val) =>
    dropID % 8 === 7 || dropID % 8 === 0
      ? !Wall1.includes(val)
      : dropID % 8 === 1
      ? !Wall2.includes(val)
      : val
  );

  const Block = [34, 18, 50, 26, 42, 58];
  const Block2 = [24, 16, 32, 40, 48, 56];
  const Block3 = [23, 31, 39, 47, 55, 63];

  let JumpFix = ClearDataForWalls.filter((val) =>
    dropID % GRID_SIZE === 7 || dropID % GRID_SIZE === 0
      ? !Block.includes(val)
      : dropID % 8 === 2
      ? !Block2.includes(val)
      : dropID % 8 === 1
      ? !Block3.includes(val)
      : val
  );

  const Find = FindDifferentElement(ChessData, ClearDataForWalls);

  if (Find.length) {
    const Type = Find.map((el) => {
      const type = TypeCreator(el.type) === TypeCreator(knight.Type);
      return type ? el : null;
    }).map((el) => (el === null ? undefined : el.Id));

    JumpFix = JumpFix.filter((item) => !Type.includes(item));
  }

  return JumpFix;
};

export default KnightHelpers;
