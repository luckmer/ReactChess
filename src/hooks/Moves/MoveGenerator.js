import Helpers from "../Pawns/Helpers";
import KnightHelpers from "../Knight/KnightHelpers";
import KingHelper from "../King/KingHelper";
import RookPanel from "../Rook/RookPanel";
import BishopPanel from "../Bishop/BishopPanel";

const MoveGenerator = (props) => {
  const {
    FindTargetName,
    ViewMove,
    FindTargetType,
    FindTarget,
    ChessData,
    setMoves,
  } = props;
  if (
    (FindTargetName === "whitePawn" && ViewMove) ||
    (FindTargetName === "BlackPawn" && ViewMove)
  ) {
    const { Test, PossibleBlock } = Helpers(
      FindTarget,
      FindTargetType,
      FindTarget,
      ChessData
    );
    const Move = FilterNumbers(Test);
    const Attack = FilterNumbers(PossibleBlock);
    setMoves([...Move, ...Attack]);
  } else if (
    (FindTargetName === "WhiteKing" && ViewMove) ||
    (FindTargetName === "BlackKing" && ViewMove)
  ) {
    let dropID = FindTarget.id;

    const { SetMove, PossibleMove } = KingHelper(
      FindTarget,
      FindTargetType,
      ChessData,
      dropID
    );

    setMoves([...PossibleMove, SetMove]);
  } else if (
    (FindTargetName === "WhiteKnight" && ViewMove) ||
    (FindTargetName === "BlackKnight" && ViewMove)
  ) {
    const dropID = FindTarget.id;

    const JumpFix = KnightHelpers(
      ChessData,
      FindTarget,
      FindTargetType,
      dropID
    );
    setMoves([...JumpFix]);
  } else if (
    (FindTargetName === "WhiteBishop" && ViewMove) ||
    (FindTargetName === "BlackBishop" && ViewMove)
  ) {
    const dropID = FindTarget;

    const { XCheckBottom, XCheckTop, YCheckTop, YCheckBottom } = BishopPanel(
      FindTarget,
      ChessData,
      dropID
    );

    setMoves([...XCheckTop, ...YCheckTop, ...XCheckBottom, ...YCheckBottom]);
  } else if (
    (FindTargetName === "WhiteRook" && ViewMove) ||
    (FindTargetName === "BlackRook" && ViewMove)
  ) {
    const dropID = FindTarget.id;
    const { createRight, createLeft, createBottom, createTop } = RookPanel(
      FindTarget,
      ChessData,
      dropID
    );

    setMoves([...createBottom, ...createTop, ...createLeft, ...createRight]);
  } else if (
    (FindTargetName === "WhiteQueen" && ViewMove) ||
    (FindTargetName === "BlackQueen" && ViewMove)
  ) {
    let dropID = FindTarget.id;

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

    const { XCheckBottom, XCheckTop, YCheckTop, YCheckBottom } = BishopPanel(
      FindTarget,
      ChessData,
      dropID
    );

    setMoves([
      SetMove,
      ...PossibleMove,
      ...createRight,
      ...createLeft,
      ...createBottom,
      ...createTop,
      ...XCheckBottom,
      ...XCheckTop,
      ...YCheckTop,
      ...YCheckBottom,
    ]);
  }
};

export default MoveGenerator;

const FilterNumbers = (arr) =>
  arr.filter((item) => item !== true && item !== false);
