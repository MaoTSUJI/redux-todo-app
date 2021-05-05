import React from "react";

/* コンポーネントを修正して、コンテナからマッピングされたstate, dispatch用のpropsを参照する */
export default class Todo extends React.Component {
  state = {
    todo: ''
  }

  render() {
    console.log(this.props);
    const updateState = el => this.setState({ todo: el.target.value});
    const addTodoHandler = () => {
      this.props.addTodo(this.state.todo);
    }
    const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>);
    return (
      <div className="App">
        <input type="text" onChange={updateState} />
        <button onClick={addTodoHandler}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}