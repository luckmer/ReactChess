import ChessMap from "../views/Chess";
import ReactDOM from "react-dom";

describe("ChessMap", () => {
  test("load ChessMap without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ChessMap />, div);
  });
});
