import { useState, useEffect, useMemo } from "react";
import { Board } from "./Board";

const ChessCreator = () => {
  const [ChessBoard, setChessBoard] = useState([]);

  useEffect(() => {
    let black = false;
    const ChessBoard = 8;
    let index = 0;

    const box = [];
    for (let i = 1; i <= ChessBoard * ChessBoard; i++) {
      let IdColor = null;
      if (black) {
        IdColor = 1;
        index++;
        black = !black;
      } else {
        IdColor = 0;
        index++;
        black = !black;
      }
      const ChessGrid = {
        id: i,
        _id: i,
        background: IdColor,
        ChessImg: Board[i - 1][0],
        Type: Board[i - 1][1],
        FirstMove: Board[i - 1][2],
      };

      box.push(ChessGrid);
      if (index === 8) {
        black = !black;
        index = 0;
      }
    }
    setChessBoard(box);
  }, []);

  const ChessData = useMemo(() => ChessBoard, [ChessBoard]);

  return { ChessData, setChessBoard };
};

export default ChessCreator;
