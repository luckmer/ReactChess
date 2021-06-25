import { WallCreator } from "../Constants";
import { updatePosition } from "../DragAndDrop/updatePosition";
import KingHelper from "../King/KingHelper";
import RookPanel from "../Rook/RookPanel";

import {
  XBottomPanel,
  XTopPanel,
  YBottomPanel,
  YTopPanel,
} from "../Bishop/PossibleMoves";

const MoveQueen = ({
  FindTarget,
  ChessData,
  FindTargetType,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const queen = FindTarget;
  const block = queen;

  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const { SetMove, PossibleMove } = KingHelper(
    FindTarget,
    FindTargetType,
    ChessData,
    dropID
  );

  const { createRight, createLeft, createBottom, createTop } = RookPanel(
    FindTarget,
    ChessData,
    dropID
  );

  const XCheckTop = XTopPanel(ChessData, block, Wall2, dropID);
  const YCheckTop = YTopPanel(ChessData, block, Wall1, dropID);
  const XCheckBottom = XBottomPanel(ChessData, queen, Wall2, dropID);
  const YCheckBottom = YBottomPanel(ChessData, block, Wall2, dropID);

  if (
    SetMove ||
    PossibleMove.includes(Number(dropID)) ||
    createRight.includes(Number(dropID)) ||
    createLeft.includes(Number(dropID)) ||
    createBottom.includes(Number(dropID)) ||
    createTop.includes(Number(dropID)) ||
    XCheckBottom.includes(Number(dropID)) ||
    XCheckTop.includes(Number(dropID)) ||
    YCheckTop.includes(Number(dropID)) ||
    YCheckBottom.includes(Number(dropID))
  ) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }

  return dropID;
};

export default MoveQueen;
