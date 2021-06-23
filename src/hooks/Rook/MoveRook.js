import { updatePosition } from "../DragAndDrop/updatePosition";
import { WallCreator, PrevWallCreator } from "../Constants";
import {
  CreateBottomWall,
  CreateLeftWall,
  CreateRightWall,
  CreateTopWall,
} from "./PossibleMoves";

const MoveRook = ({
  FindTarget,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
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
