"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useTodos } from "./useTodos";
import { TodoItem } from "@/components/todos/TodoItem";
import { selectGetStatus } from "./todos.selector";

export default function Todos() {
  const {
    todos,
    isEditing,
    addTodo,
    toggleDone,
    toggleEdit,
    updateLabel,
    toggleRoutine,
  } = useTodos();
  return (
    <div className="mx-auto my-2 flex max-w-md flex-col gap-3">
      <h2 className="text-2xl font-bold">Todos!</h2>
      <p className="">오늘 당신의 todo를 입력하세요.</p>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          const status = selectGetStatus(item);
          return (
            <TodoItem
              key={item.id}
              item={item}
              handlers={{
                toggleDone,
                toggleEdit,
                updateLabel,
                toggleRoutine,
              }}
              status={status}
            />
          );
        })}
      </ul>
      <button
        className="flex h-9 w-full cursor-pointer items-center justify-center rounded-md transition-colors ease-in hover:bg-neutral-200"
        onClick={isEditing ? () => false : addTodo}
      >
        <PlusIcon className="size-6" />
      </button>
    </div>
  );
}
