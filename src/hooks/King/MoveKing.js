import { updatePosition } from "..//DragAndDrop/updatePosition";
import KingHelper from "./KingHelper";

const MoveKing = ({
  FindTarget,
  FindTargetType,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const { SetMove, PossibleMove } = KingHelper(
    FindTarget,
    FindTargetType,
    ChessData,
    dropID
  );

  if (SetMove || PossibleMove.includes(Number(dropID))) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }

  return dropID;
};

export default MoveKing;
