import { updatePosition } from "../DragAndDrop/updatePosition";
import { WallCreator } from "../Constants";
import {
  XBottomPanel,
  XTopPanel,
  YBottomPanel,
  YTopPanel,
} from "./PossibleMoves";

const MoveBishop = ({
  FindTarget,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const Bishop = FindTarget;
  const block = Bishop;
  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const XCheckTop = XTopPanel(ChessData, block, Wall2, dropID);
  const YCheckTop = YTopPanel(ChessData, block, Wall1, dropID);
  const XCheckBottom = XBottomPanel(ChessData, Bishop, Wall2, dropID);
  const YCheckBottom = YBottomPanel(ChessData, block, Wall2, dropID);

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
