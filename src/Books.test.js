import React from "react";
import Books from "./Books";
global.fetch = require('jest-fetch-mock');
import ShallowRenderer from "react-test-renderer/shallow";

it("test title is returned when render is called first ", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Books />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

it("test title and booklist after component mounted ", async() => {
  fetch.mockResponseOnce(JSON.stringify([
      {
        title:"Harry Potter",
        _id:"wfwef23244"
      },
      {
        title:"Jungle Book",
        _id:"asdqd324"
      }
  ]));
 const renderer = new ShallowRenderer();
  renderer.render(<Books />);

  const instance = renderer.getMountedInstance();
  await instance.componentDidMount();

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
