import { updatePosition } from "../DragAndDrop/updatePosition";
import RookPanel from "./RookPanel";

const MoveRook = ({
  FindTarget,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const { createRight, createLeft, createBottom, createTop } = RookPanel(
    FindTarget,
    ChessData,
    dropID
  );

  if (
    createRight.includes(Number(dropID)) ||
    createLeft.includes(Number(dropID)) ||
    createBottom.includes(Number(dropID)) ||
    createTop.includes(Number(dropID))
  ) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MoveRook;
