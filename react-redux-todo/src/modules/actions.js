/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE = 'todos/DELETE';

/* 액션 생성함수 선언 */
let nextId = 2; // todo 데이터에서 사용 할 고유 id

export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE,
  id,
});

const initialState = [
  {
    id: 1,
    text: '화분에 물 주기',
    done: false,
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    case DELETE:
      return {
        ...state,
        todos: state.todos.fillter(todo => todo.id !== action.id),
      }
    default:
      return state;
  }
}