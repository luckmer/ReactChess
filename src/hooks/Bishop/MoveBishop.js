import { updatePosition } from "../DragAndDrop/updatePosition";
import BishopPanel from "./BishopPanel";

const MoveBishop = ({
  FindTarget,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const { XCheckBottom, XCheckTop, YCheckTop, YCheckBottom } = BishopPanel(
    FindTarget,
    ChessData,
    dropID
  );

  if (
    XCheckBottom.includes(Number(dropID)) ||
    XCheckTop.includes(Number(dropID)) ||
    YCheckTop.includes(Number(dropID)) ||
    YCheckBottom.includes(Number(dropID))
  ) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MoveBishop;
