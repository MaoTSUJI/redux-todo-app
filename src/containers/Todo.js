import { connect } from "react-redux"

/* コンポーネントとreduxによる状態管理を結びつける */

// コンポーネントで使用するstateを切り出して、コンポーネント内のpropsで参照出来るようにマッピングするための関数
const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

// dispatchするための関数をpropsにマッピングするための関数
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(action.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)