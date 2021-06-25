import MoveKnight from "../Knight/MoveKnight";
import MoveBishop from "../Bishop/MoveBishop";
import MovePawn from "../Pawns/MovePawn";
import MoveKing from "../King/MoveKing";
import MoveRook from "../Rook/MoveRook";
import MoveQueen from "../queen/MoveQueen";

const DetectPawn = (FindTargetName, MOVE, PROPS, dropID) => {
  if (
    (FindTargetName === "whitePawn" && MOVE) ||
    (FindTargetName === "BlackPawn" && MOVE)
  ) {
    MovePawn({ ...PROPS });
  } else if (
    (FindTargetName === "WhiteKing" && MOVE) ||
    (FindTargetName === "BlackKing" && MOVE)
  ) {
    dropID = MoveKing({ ...PROPS });
  } else if (
    (FindTargetName === "WhiteKnight" && MOVE) ||
    (FindTargetName === "BlackKnight" && MOVE)
  ) {
    MoveKnight({ ...PROPS });
  } else if (
    (FindTargetName === "WhiteBishop" && MOVE) ||
    (FindTargetName === "BlackBishop" && MOVE)
  ) {
    MoveBishop({ ...PROPS });
  } else if (
    (FindTargetName === "WhiteRook" && MOVE) ||
    (FindTargetName === "BlackRook" && MOVE)
  ) {
    MoveRook({ ...PROPS });
  } else if (
    (FindTargetName === "WhiteQueen" && MOVE) ||
    (FindTargetName === "BlackQueen" && MOVE)
  ) {
    dropID = MoveQueen({ ...PROPS });
  }
  return dropID;
};

export default DetectPawn;
