import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders a div with some snapshot", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  // expect(output.type).toBe("div"); not required
  expect(output).toMatchSnapshot();
});
