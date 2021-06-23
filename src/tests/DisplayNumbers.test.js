import DisplayNumbers from "../views/DisplayNumbers";
import ReactDOM from "react-dom";

describe("DisplayNumbers", () => {
  test("load DisplayNumbers without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DisplayNumbers />, div);
  });
});
