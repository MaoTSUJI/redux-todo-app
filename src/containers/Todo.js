import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';

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
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);