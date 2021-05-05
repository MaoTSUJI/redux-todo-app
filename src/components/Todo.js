import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <button>追加</button><br />
        <ul>
          <li>TODO1</li>
          <li>TODO2</li>
        </ul>
      </div>
    );
  }
}