import { KnightMove } from "../Knight/PossibleMoves";
import { TOTAL_SIZE, GRID_SIZE } from "../Constants";
import { updatePosition } from "../DragAndDrop/updatePosition";
import { WallCreator } from "../Constants";

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

  const Wall1 = WallCreator(ChessData, 1);
  const Wall2 = WallCreator(ChessData, 0);

  const KnightLock = KnightMove(knight.id, FindTargetType).filter(
    (el) => el <= TOTAL_SIZE && el >= 0
  );

  const ClearDataForWalls = KnightLock.filter((val) =>
    dropID % 8 === 7 || dropID % 8 === 0
      ? !Wall1.includes(val)
      : dropID % 8 === 1 || dropID % 8 === 2
      ? !Wall2.includes(val)
      : val
  );

  const JumpFix = ClearDataForWalls.filter((val) =>
    dropID % GRID_SIZE === 7 || dropID % GRID_SIZE === 0
      ? val !== 48
      : dropID % 8 === 1 || dropID % 8 === 2
      ? val !== 17
      : val
  );

  if (JumpFix.includes(Number(dropID))) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MoveKnight;
