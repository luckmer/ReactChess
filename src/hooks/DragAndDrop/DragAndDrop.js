import { useState, useContext } from "react";
import MoveGenerator from "../Moves/MoveGenerator";
import { DataContext } from "../../utils/Store";
import DetectPawn from "./DetectPawn";
import GlobalData from "./GlobalData";

const DragAndDrop = (ChessData, setChessBoard) => {
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const { MOVES } = useContext(DataContext);
  const { setMoves } = MOVES;

  const handleDragStart = (e, obj) => {
    const targetId = e.target.id;
    e.dataTransfer.setData("id", targetId);

    const { PROPS } = GlobalData(
      targetId,
      ChessData,
      targetId,
      currentPlayer,
      setChessBoard,
      setCurrentPlayer,
      setMoves
    );

    MoveGenerator(PROPS);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const Target = e.dataTransfer.getData("id");
    let dropID = e.target.id;

    const { FindTargetName, MOVE, PROPS } = GlobalData(
      Target,
      ChessData,
      dropID,
      currentPlayer,
      setChessBoard,
      setCurrentPlayer,
      setMoves
    );
    dropID = DetectPawn(FindTargetName, MOVE, PROPS, dropID);
    setMoves([]);
  };

  return { handleDragStart, handleDragOver, handleDrop };
};

export default DragAndDrop;
