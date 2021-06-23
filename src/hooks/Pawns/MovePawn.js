import { PawnMove } from "./PossibleMoves";
import { updatePosition } from "../DragAndDrop/updatePosition";

const MovePawn = ({
  FindTarget,
  ChessData,
  FindTargetType,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const pawn = FindTarget;

  let pawnLock = PawnMove(pawn.id, FindTargetType, FindTarget).filter(
    (el) => el <= 63
  );

  const FindTest = ChessData.filter((el) =>
    pawnLock.length === 2
      ? Number(el.id) === pawnLock[0] || Number(el.id) === pawnLock[1]
      : Number(el.id) === pawnLock[0]
  )
    .map((item) => (item.Type !== "" ? item.id : item))
    .filter((item) => !isNaN(item))[0];

  const Position = ChessData.find((el) => Number(el.id) === pawnLock[0]);
  const Attack = FindTargetType === "white" ? pawnLock[0] + 1 : pawnLock[0] - 1;
  const Increase = FindTargetType === "white" ? Attack - 2 : Attack + 2;

  const AttackPosFix = ChessData.filter(
    (el) =>
      Number(el.id) === Number(Attack) || Number(el.id) === Number(Increase)
  ).map((el) => el.ChessImg !== "Empty" && el.id);

  const PossibleMove = [...pawnLock, ...AttackPosFix];

  const PossibleBlock = PossibleMove.filter(
    (num) => num !== Position.id && !pawnLock.includes(num)
  );

  const Test = pawnLock.filter((item) =>
    !isNaN(FindTest) ? item !== FindTest : item
  );

  if (
    (Position.Type === "" && Test.includes(Number(dropID))) ||
    PossibleBlock.includes(Number(dropID))
  ) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MovePawn;
