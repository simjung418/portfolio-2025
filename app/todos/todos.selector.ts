import { Todo, TodoStatus, TodoStatusSource } from "@/lib/types";

export function selectGetStatus(source: TodoStatusSource): TodoStatus {
  if (source.isDone) return "green";           // 완료됨 → 항상 초록
  if (source.isRoutine) return "yellow";       // 루틴인데 미완료 → 노랑
  return "stone";                       // 일반 할일 미완료 → 회색
};

export function selectHasEditingTodo(todos: Todo[]) {
  return todos.some(todo => todo.isEditing);
}