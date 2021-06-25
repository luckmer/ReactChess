import { KingMove } from "./PossibleMoves";
import { TOTAL_SIZE } from "../Constants";

import {
  WallCreator,
  KingAttack,
  FilterType,
  FindDifferentElement,
  TypeCreator,
} from "../Constants";

const KingHelper = (FindTarget, FindTargetType, ChessData, dropID) => {
  const king = FindTarget;
  const KingLock = KingMove(king.id, FindTargetType);

  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const WallClear = KingLock.filter((val) => val <= TOTAL_SIZE);

  if (
    (dropID % 8 === 1 && Wall2.includes(king.id)) ||
    (dropID % 8 === 0 && Wall1.includes(king.id))
  ) {
    dropID = king.id;
  }

  const existsInBothArrays = ChessData.filter((element1) =>
    WallClear.map((element2) => element2).includes(element1.id)
  );

  const AttackPosFix = KingAttack(existsInBothArrays, dropID);
  const SetMove = FilterType(existsInBothArrays, dropID);

  let PossibleMove = [...new Set([...WallClear, ...AttackPosFix])];

  if (dropID % 8 === 1)
    PossibleMove = PossibleMove.filter((item) => !Wall2.includes(item));

  if (dropID % 8 === 0)
    PossibleMove = PossibleMove.filter((item) => !Wall1.includes(item));

  const Find = FindDifferentElement(ChessData, PossibleMove);

  if (Find.length) {
    const Type = Find.map((el) => {
      const type = TypeCreator(el.type) === TypeCreator(king.Type);
      return type ? el : null;
    }).map((el) => (el === null ? undefined : el.Id));

    PossibleMove = PossibleMove.filter((item) => !Type.includes(item));
  }

  return { SetMove, PossibleMove };
};

export default KingHelper;
