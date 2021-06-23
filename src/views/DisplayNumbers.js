import { Numbers } from "../css/Chess.Style";
import { numbers } from "../hooks/Constants";

const DisplayNumbers = () => {
  return (
    <Numbers>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </Numbers>
  );
};

export default DisplayNumbers;
