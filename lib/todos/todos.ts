export interface Todo {
  id: number;
  label: string;
  isDone: boolean;
  isRoutine: boolean;
  isEditing: boolean;
}

export type TodoActions =
  | { type: "LOAD"; todos: Todo[] }
  | { type: "ADD"; initialTodo: Todo }
  | { type: "TOGGLE_DONE"; id: number }
  | { type: "TOGGLE_EDIT"; id: number }
  | { type: "TOGGLE_ROUTINE"; id: number }
  | { type: "UPDATE_LABEL"; id: number; label: string };

export type TodoStatusSource = Pick<Todo, "isDone" | "isRoutine">;

export type TodoStatus = "green" | "yellow" | "stone";
