/* reducerにしてほしい処理を伝えるためのメッセージ */

// 単純なオブジェクトを作成する
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',     // typeプロパティを必ず持つ。これが処理のキーになる。
    payload: {todo: todo} // 処理に使うパラメータ。　ここでは追加するTODOをもたせておく。
  }
}