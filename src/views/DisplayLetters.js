import { Letters } from "../css/Chess.Style";
import { letters } from "../hooks/Constants";

const DisplayLetters = () => {
  return (
    <Letters>
      {letters.map((letter) => (
        <p key={letter}>{letter}</p>
      ))}
    </Letters>
  );
};

export default DisplayLetters;
