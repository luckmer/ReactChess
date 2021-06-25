import { updatePosition } from "../DragAndDrop/updatePosition";
import KnightHelpers from "./KnightHelpers";

const MoveKnight = ({
  FindTarget,
  ChessData,
  FindTargetType,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const knight = FindTarget;

  const JumpFix = KnightHelpers(ChessData, knight, FindTargetType, dropID);

  if (JumpFix.includes(Number(dropID))) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MoveKnight;
