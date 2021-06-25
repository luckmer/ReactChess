import { PawnMove } from "./PossibleMoves";
import { WallCreator, FindDifferentElement, TypeCreator } from "../Constants";

const Helpers = (pawn, FindTargetType, FindTarget, ChessData) => {
  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  let pawnLock = PawnMove(pawn && pawn.id, FindTargetType, FindTarget).filter(
    (el) => el <= 63 && el >= 0
  );

  const FindObj = ChessData.filter((el) =>
    pawnLock.length === 2
      ? Number(el.id) === pawnLock[0] || Number(el.id) === pawnLock[1]
      : Number(el.id) === pawnLock[0]
  )
    .map((item) => (item.Type !== "" ? item.id : item))
    .filter((item) => !isNaN(item))[0];

  const FindTest = FindObj ? FindObj : [];

  const Position = ChessData.find((el) => Number(el.id) === pawnLock[0]);
  const Attack = FindTargetType === "white" ? pawnLock[0] + 1 : pawnLock[0] - 1;
  const Increase = FindTargetType === "white" ? Attack - 2 : Attack + 2;

  const AttackPosFix = ChessData.filter(
    (el) =>
      Number(el.id) === Number(Attack) || Number(el.id) === Number(Increase)
  ).map((el) => el.ChessImg !== "Empty" && el.id);

  const Find = FindDifferentElement(ChessData, AttackPosFix);

  const PossibleMove = [...pawnLock, ...AttackPosFix];

  let PossibleBlock = PossibleMove.filter(
    (num) => num !== Position.id && !pawnLock.includes(num)
  );

  if (pawn.id % 8 === 0) {
    PossibleBlock = PossibleMove.filter((item) => !Wall1.includes(item));
  }

  if (Find.length) {
    const Type = Find.map((el) => {
      const type = TypeCreator(el.type) === TypeCreator(pawn.Type);
      return type ? el : null;
    }).map((el) => (el === null ? undefined : el.Id));

    PossibleBlock = PossibleMove.filter(
      (item) =>
        !Type.includes(item) && item !== Position.id && !pawnLock.includes(item)
    );
  }

  const TestAttack = PossibleBlock.filter((item) =>
    pawn.id % 8 === 1 ? !Wall2.includes(item) : item !== FindTest
  );

  PossibleBlock = TestAttack;

  const Test = pawnLock.filter((item) =>
    !isNaN(FindTest) ? item > FindTest : item
  );

  return { Position, Test, PossibleBlock };
};

export default Helpers;
