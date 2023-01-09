import React from "react";
import ReactDOM from "react-dom/client";
/*
const header = React.createElement(
  "div",
  {
    id: "container",
    key: "container",
  },
  [
    React.createElement(
      "h1",
      {
        id: "h1Tag",
        key: "h1",
      },
      "this is h1 tag from react"
    ),
    React.createElement(
      "h2",
      {
        id: "h2Tag",
        key: "h2",
      },
      "this is h2 tag from react"
    ),
    React.createElement(
      "h3",
      {
        id: "h3Tag",
        key: "h3",
      },
      "this is h3 tag from react"
    ),
  ]
);
*/
/*
const headerJSX = (
  <div title="headerJSX">
    <h1 id="h1jsx">h1 tag from jsx</h1>
    <h2 id="h2jsx">h2 tag from jsx</h2>
    <h3 id="h2jsx">h3 tag from jsx</h3>
  </div>
);*/

const HeaderElement = (
  <div title="headerJSX">
    <h1 id="h1jsx">h1 tag from Component</h1>
    <h2 id="h2jsx">h2 tag from Component</h2>
    <h3 id="h2jsx">h3 tag from Component</h3>
  </div>
);

const HeaderComponent = () => {
  return (
    <div title="headerJSX">
      {HeaderElement}
      <h1 id="h1jsx">h1 tag from Component</h1>
      <h2 id="h2jsx">h2 tag from Component</h2>
      <h3 id="h2jsx">h3 tag from Component</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(header);
//root.render(headerJSX);
//root.render(<HeaderComponent />);
root.render(<HeaderComponent />);
