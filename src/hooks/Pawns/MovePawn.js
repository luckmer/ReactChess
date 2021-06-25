import { updatePosition } from "../DragAndDrop/updatePosition";
import Helpers from "./Helpers";

const MovePawn = ({
  FindTarget,
  FindTargetType,
  ChessData,
  dropID,
  setChessBoard,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const pawn = FindTarget;

  const { Position, Test, PossibleBlock } = Helpers(
    pawn,
    FindTargetType,
    FindTarget,
    ChessData,
    currentPlayer
  );

  if (
    (Position && Position.Type === "" && Test.includes(Number(dropID))) ||
    PossibleBlock.includes(Number(dropID))
  ) {
    const Update = updatePosition(ChessData, dropID, FindTarget);
    setChessBoard(Update);
    setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
  }
};

export default MovePawn;
