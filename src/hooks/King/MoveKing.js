import { KingMove } from "./PossibleMoves";
import { TOTAL_SIZE } from "../Constants";
import { updatePosition } from "..//DragAndDrop/updatePosition";
import { WallCreator, KingAttack, FilterType } from "../Constants";

const MoveKing = ({
  FindTarget,
  FindTargetType,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
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

  const PossibleMove = [...new Set([...WallClear, ...AttackPosFix])];

  if (SetMove || PossibleMove.includes(Number(dropID))) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }

  return dropID;
};

export default MoveKing;
