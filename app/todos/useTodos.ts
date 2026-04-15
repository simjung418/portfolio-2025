import { useEffect, useReducer, useState } from "react";
import { Todo } from "@/lib/todos/todos";
import { getCookie, setCookie } from "./cookies";
import todosReducer from "./todos.reducer";
import { selectGetStatus, selectHasEditingTodo } from "./todos.selector";
import { todoList } from "./todos.constant";

export function useTodos() {
  const initialTodos: Todo[] = todoList.map((item) => ({
    ...item,
    status: selectGetStatus(item)
  }));
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // 컴포넌트 마운트되면 쿠키 불러오기
  useEffect(() => {
    const loadTodos = async () => {
      const cookieTodo = await getCookie();

      if (cookieTodo !== "") {
        dispatch({ type: "LOAD", todos: JSON.parse(cookieTodo) });
      }
      setIsLoading(false); // 로딩 끝
    };

    loadTodos();
  }, []); // 빈 배열 = 처음 한 번만 실행

  useEffect(() => {
    if (todos.length > 0 && !isLoading) {
      setCookie(JSON.stringify(todos)); // todos가 변할때 마다 쿠키에 저장
    }
    if (selectHasEditingTodo(todos)) {
      // 에디팅 체크 될때마다 변환
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [todos, isLoading]);

  const addTodo = () => {
    const length = todos.length;
    const initialTodo = {
      id: length + 1,
      label: "",
      isDone: false,
      isRoutine: false,
      isEditing: true
    };
    dispatch({ type: "ADD", initialTodo });
  };
  const toggleDone = (id: number) => dispatch({ type: "TOGGLE_DONE", id });
  const toggleEdit = (id: number) => dispatch({ type: "TOGGLE_EDIT", id });
  const toggleRoutine = (id: number) => dispatch({ type: "TOGGLE_ROUTINE", id });
  const updateLabel = (id: number, label: string) => dispatch({ type: "UPDATE_LABEL", id, label });

  return {
    todos,
    isEditing,
    addTodo,
    toggleDone,
    toggleEdit,
    updateLabel,
    toggleRoutine
  };
}
