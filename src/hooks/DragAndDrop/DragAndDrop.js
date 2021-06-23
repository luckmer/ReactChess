import { useState } from "react";
import { FindTheSameType, TargetType } from "../Constants";
import MoveKnight from "../Knight/MoveKnight";
import MoveBishop from "../Bishop/MoveBishop";
import MovePawn from "../Pawns/MovePawn";
import MoveKing from "../King/MoveKing";
import MoveRook from "../Rook/MoveRook";
import MoveQueen from "../queen/MoveQueen";

const DragAndDrop = (ChessData, setChessBoard) => {
  const [currentPlayer, setCurrentPlayer] = useState("white");

  const handleDragStart = (e, obj) => {
    const targetId = e.target.id;
    e.dataTransfer.setData("id", targetId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const Target = e.dataTransfer.getData("id");
    let dropID = e.target.id;

    const FindTarget = FindTheSameType(Target, ChessData);
    const FindObj = FindTheSameType(dropID, ChessData);

    const FindTargetType = TargetType(FindTarget && FindTarget.Type, 0);
    const FindTargetName = TargetType(FindTarget && FindTarget.Type, 1);
    const FindObjType = TargetType(FindObj.Type, 0);

    const CheckPlayer = FindTargetType === currentPlayer;
    const DifferentColor = FindObjType !== FindTargetType;

    const MOVE = FindTarget && CheckPlayer && DifferentColor;

    const PROPS = {
      FindTarget,
      FindTargetType,
      ChessData,
      dropID,
      setChessBoard,
      setCurrentPlayer,
      currentPlayer,
    };
    //update use switch
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
  };

  return { handleDragStart, handleDragOver, handleDrop };
};

export default DragAndDrop;
