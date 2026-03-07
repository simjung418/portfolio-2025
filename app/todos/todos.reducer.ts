import { Todo, TodoActions } from "@/lib/portfolio/todos";

export default function todosReducer(state: Todo[], action: TodoActions): Todo[] {
  /* Reducer
  “현재 상태(state)와
  어떤 사건(action)이 주어지면
  다음 상태를 계산해서 반환하는 계산기” */
  let updater: ((todo: Todo) => Todo) | null = null; // updater initalize

  switch (action.type) { // (updater에 식 집어넣어주기 / 식 없으면 고대로 switch에서 리듀서 탈출) / 데이터 아예 덮어씌우기 load
    case "LOAD":
      return action.todos;
    case "ADD":
      return [
        ...state,
        action.initialTodo
      ]
    case "TOGGLE_DONE":
      updater = todo => {
        const updated = { ...todo, isDone: !todo.isDone }
        return { ...updated }
      }
      break;
    case "TOGGLE_EDIT":
      updater = todo => ({
        ...todo,
        isEditing: !todo.isEditing
      })
      break;
    case "TOGGLE_ROUTINE":
      updater = todo => ({
        ...todo,
        isRoutine: !todo.isRoutine
      })
      break;
    case "UPDATE_LABEL":
      updater = todo => ({ ...todo, label: todo.label, isEditing: false })
      break;
    default: return state;
  }

  return state.map(todo => (
    todo.id === action.id ? updater!(todo) : todo
  ))
}