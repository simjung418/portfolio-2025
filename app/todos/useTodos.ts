import { useEffect, useState } from "react";
import { Todo } from "@/types";
import { getCookie, setCookie } from "./cookies";

const getStatus = (isDone: boolean, isRoutine: boolean) => {
  if (isDone) return "green";           // 완료됨 → 항상 초록
  if (isRoutine) return "yellow";       // 루틴인데 미완료 → 노랑
  return "stone";                       // 일반 할일 미완료 → 회색
};

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 컴포넌트 마운트되면 쿠키 불러오기
  useEffect(() => {
    const loadTodos = async () => {
      const cookieTodo = await getCookie();

      if (cookieTodo !== '') {
        setTodos(JSON.parse(cookieTodo));
      } else {
        // 쿠키 없으면 기본값
        const initialTodos = todoList.map((item) => ({
          ...item,
          status: getStatus(item.isDone, item.isRoutine)
        }));
        setTodos(initialTodos);
      }
      setIsLoading(false); // 로딩 끝
    };

    loadTodos();
  }, []); // 빈 배열 = 처음 한 번만 실행

  useEffect(() => {
    if (todos.length > 0 && !isLoading) {
      setCookie(JSON.stringify(todos));
    }
  }, [todos, isLoading])

  const addTodo = () => {
    const length = todos.length;
    setTodos([
      ...todos,
      {
        id: length + 1,
        label: "",
        isDone: false,
        isRoutine: false,
        isEditing: true,
        status: "stone",
      },
    ]);
  };
  const handleIsDone = (id: number) => {
    updateTodo(id, (item) => ({ ...item, isDone: !item.isDone, status: getStatus(!item.isDone, item.isRoutine) }));
  };
  const handleIsEdit = (id: number) => {
    updateTodo(id, (item) => ({ ...item, isEditing: !item.isEditing }));
  };
  const handleIsRoutine = (id: number) => {
    updateTodo(id, (item) => ({ ...item, isRoutine: !item.isRoutine, status: getStatus(item.isDone, !item.isRoutine) }));
  };
  const handleLabel = (id: number, label: string) => {
    updateTodo(id, (item) => ({ ...item, label: label, isEditing: !item.isEditing }));
  };
  const updateTodo = (id: number, updater: (item: Todo) => Todo) => {
    setTodos(todos.map((item) => (item.id === id ? updater(item) : item)));
  };

  return { todos, addTodo, handleIsDone, handleIsEdit, handleLabel, handleIsRoutine }
}

const todoList = [
  {
    id: 1,
    label: "컴퓨터 켜기",
    isDone: true,
    isRoutine: true,
    isEditing: false,
  },
  {
    id: 2,
    label: "헬스장 가기",
    isDone: false,
    isRoutine: true,
    isEditing: false,
  },
  {
    id: 3,
    label: "공부하기",
    isDone: false,
    isRoutine: true,
    isEditing: false,
  },
  {
    id: 4,
    label: "영양제 먹기",
    isDone: false,
    isRoutine: true,
    isEditing: false,
  },
  {
    id: 5,
    label: "빨래하기",
    isDone: false,
    isRoutine: false,
    isEditing: false,
  },
];