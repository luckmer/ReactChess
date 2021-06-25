import { useContext } from "react";
import { DataContext } from "../utils/Store";
import { BoardStyle, Div } from "../css/Chess.Style";
import ChessCreator from "../hooks/Board/ChessGrid";
import DragAndDrop from "../hooks/DragAndDrop/DragAndDrop";

const ChessMap = () => {
  const { ChessData, setChessBoard } = ChessCreator();
  const { handleDragStart, handleDragOver, handleDrop } = DragAndDrop(
    ChessData,
    setChessBoard
  );
  const { MOVES } = useContext(DataContext);
  console.log();

  return (
    <BoardStyle>
      {ChessData.map((el, i) => {
        const Check = el.ChessImg === "Empty";

        return (
          <Div
            Test={MOVES.moves.includes(el.id)}
            key={i}
            id={el.id}
            onDragOver={(e) => handleDragOver(e)}
            onDragStart={(e) => (Check ? null : handleDragStart(e, el))}
            onDrop={(e) => handleDrop(e)}
            Design={el.background}
            IMG={el.ChessImg}
            draggable={el.ChessImg === "Empty" ? false : true}
          ></Div>
        );
      })}
    </BoardStyle>
  );
};

export default ChessMap;
