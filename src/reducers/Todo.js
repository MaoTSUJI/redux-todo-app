// 初期値に保持するオブジェクトとして定義する。todoListの型は配列
const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // 新しく追加するTODO
      const todo = action.payload.todo;
      // stateを複製して追加
      const newState = Object.assign({}, state);  // 複製（ディープコピー）
      newState.todoList.push(todo);
      return newState;   // 新しいstateを返す
    default:
      return state;
  }
};