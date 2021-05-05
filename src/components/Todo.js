import React from "react";

/* コンポーネントを修正して、コンテナからマッピングされたstate, dispatch用のpropsを参照する */
export default class Todo extends React.Component {
  state = {
    todo: ''
  }
  textInput = React.createRef();

  render() {
    const updateState = el => this.setState({ todo: el.target.value});
    const addTodoHandler = () => {
      if (this.state.todo !== '') {
        console.log(this.textInput);
        this.props.addTodo(this.state.todo);
        // テキストの中身をクリアする
        this.textInput.current.value = '';
      }
    }
    const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>);
    return (
      <div className="App">
        <input type="text" onChange={updateState} ref={this.textInput} />
        <button onClick={addTodoHandler}>追加</button><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}