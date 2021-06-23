import DisplayLetters from "../views/DisplayLetters";
import ReactDOM from "react-dom";

describe("DisplayLetters", () => {
  test("load DisplayLetters without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DisplayLetters />, div);
  });
});
