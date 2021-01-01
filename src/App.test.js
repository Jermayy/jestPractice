import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';

test('Title Text', () => {

  const root = document.createElement("div");
  
  
  ReactDOM.render(<App />, root);
  
  expect(root.querySelector("h1").textContent).toBe("TODOs")
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
    );
    expect(root.querySelector("button").textContent).toBe("Add #1")

});