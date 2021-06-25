import { WallCreator } from "../Constants";

import {
  XBottomPanel,
  XTopPanel,
  YBottomPanel,
  YTopPanel,
} from "./PossibleMoves";

const BishopPanel = (FindTarget, ChessData, dropID) => {
  const Bishop = FindTarget;
  const block = Bishop;
  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const XCheckTop = XTopPanel(ChessData, block, Wall2, dropID);
  const YCheckTop = YTopPanel(ChessData, block, Wall1, dropID);
  const XCheckBottom = XBottomPanel(ChessData, Bishop, Wall2, dropID);
  const YCheckBottom = YBottomPanel(ChessData, block, Wall2, dropID);

  return { XCheckBottom, XCheckTop, YCheckTop, YCheckBottom };
};

export default BishopPanel;
