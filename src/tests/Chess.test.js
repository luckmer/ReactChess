import Chess from "../views/Chess";
import ReactDOM from "react-dom";

describe("Chess", () => {
  test("load Chess without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chess />, div);
  });
});
