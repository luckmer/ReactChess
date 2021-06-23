import { Fragment } from "react";
import { UpperDiv } from "../css/Chess.Style";
import DisplayLetters from "./DisplayLetters";
import DisplayNumbers from "./DisplayNumbers";
import ChessMap from "./ChessMap";

const Chess = () => {
  return (
    <Fragment>
      <UpperDiv>
        <DisplayNumbers />
        <DisplayLetters />
      </UpperDiv>
      <ChessMap />
    </Fragment>
  );
};

export default Chess;
