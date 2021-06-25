import { WallCreator, PrevWallCreator } from "../Constants";
import {
  CreateBottomWall,
  CreateLeftWall,
  CreateRightWall,
  CreateTopWall,
} from "./PossibleMoves";

const RookPanel = (FindTarget, ChessData, dropID) => {
  const Rook = FindTarget;
  const block = Rook;

  const Wall4 = PrevWallCreator(ChessData, 57, 63);
  const Wall3 = PrevWallCreator(ChessData, 0, 8);
  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const createBottom = CreateBottomWall(ChessData, block, Wall4, dropID);
  const createRight = CreateRightWall(ChessData, block, Wall2, dropID);
  const createLeft = CreateLeftWall(ChessData, block, Wall1, dropID);
  const createTop = CreateTopWall(ChessData, block, Wall3, dropID);
  return { createRight, createLeft, createBottom, createTop };
};

export default RookPanel;
