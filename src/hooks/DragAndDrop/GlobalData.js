import { FindTheSameType, TargetType } from "../Constants";

const GlobalData = (
  Target,
  ChessData,
  dropID,
  currentPlayer,
  setChessBoard,
  setCurrentPlayer,
  setMoves
) => {
  const FindTarget = FindTheSameType(Target, ChessData);
  const FindObj = FindTheSameType(dropID, ChessData);

  const FindTargetType = TargetType(FindTarget && FindTarget.Type, 0);
  const FindTargetName = TargetType(FindTarget && FindTarget.Type, 1);
  const FindObjType = TargetType(FindObj.Type, 0);

  const CheckPlayer = FindTargetType === currentPlayer;
  const DifferentColor = FindObjType !== FindTargetType;

  const MOVE = FindTarget && CheckPlayer && DifferentColor;
  const ViewMove = CheckPlayer;

  const PROPS = {
    FindTarget,
    FindTargetType,
    ChessData,
    dropID,
    setChessBoard,
    setCurrentPlayer,
    currentPlayer,
    setMoves,
    FindTargetName,
    MOVE,
    ViewMove,
    CheckPlayer,
  };
  return { FindTargetName, MOVE, PROPS };
};

export default GlobalData;
