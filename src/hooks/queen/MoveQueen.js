import { WallCreator, KingAttack, FilterType } from "../Constants";
import { updatePosition } from "../DragAndDrop/updatePosition";
import { TOTAL_SIZE, PrevWallCreator } from "../Constants";
import { KingMove } from "../King/PossibleMoves";
import {
  CreateBottomWall,
  CreateLeftWall,
  CreateRightWall,
  CreateTopWall,
} from "../Rook/PossibleMoves";
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
  const KingLock = KingMove(queen.id, FindTargetType);
  const block = queen;

  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);
  const Wall3 = PrevWallCreator(ChessData, 0, 8);
  const Wall4 = PrevWallCreator(ChessData, 57, 63);

  const WallClear = KingLock.filter((val) => val <= TOTAL_SIZE);

  if (
    (dropID % 8 === 1 && Wall2.includes(queen.id)) ||
    (dropID % 8 === 0 && Wall1.includes(queen.id))
  ) {
    dropID = queen.id;
  }

  const existsInBothArrays = ChessData.filter((element1) =>
    WallClear.map((element2) => element2).includes(element1.id)
  );

  const AttackPosFix = KingAttack(existsInBothArrays, dropID);
  const SetMove = FilterType(existsInBothArrays, dropID);
  const PossibleMove = [...new Set([...WallClear, ...AttackPosFix])];

  const crateBottom = CreateBottomWall(ChessData, block, Wall4, dropID);
  const createRight = CreateRightWall(ChessData, block, Wall2, dropID);
  const createLeft = CreateLeftWall(ChessData, block, Wall1, dropID);
  const crateTop = CreateTopWall(ChessData, block, Wall3, dropID);

  const XCheckTop = XTopPanel(ChessData, block, Wall2, dropID);
  const YCheckTop = YTopPanel(ChessData, block, Wall1, dropID);
  const XCheckBottom = XBottomPanel(ChessData, queen, Wall2, dropID);
  const YCheckBottom = YBottomPanel(ChessData, block, Wall2, dropID);

  if (
    SetMove ||
    PossibleMove.includes(Number(dropID)) ||
    createRight.includes(Number(dropID)) ||
    createLeft.includes(Number(dropID)) ||
    crateBottom.includes(Number(dropID)) ||
    crateTop.includes(Number(dropID)) ||
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
