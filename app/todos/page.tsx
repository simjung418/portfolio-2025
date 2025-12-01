"use client";
import Input from "@/components/todoInput";
import { PlusIcon, SparklesIcon, CheckIcon } from "@heroicons/react/16/solid";
import { useTodos } from "./useTodos";

export default function Todos() {
  const { todos, addTodo, handleIsDone, handleIsEdit, handleLabel, handleIsRoutine } = useTodos();
  return (
    <div className="flex flex-col max-w-md gap-3 mx-auto my-2">
      <h1 className="text-2xl font-bold">Todos!</h1>
      <p className="">오늘 당신의 todo를 입력하세요.</p>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          const { id, label, isDone, isRoutine, isEditing, status } = item;
          return (
            <li
              key={id}
              className={`flex items-center justify-between gap-3 px-2 py-1 border-solid border box-border rounded-md cursor-pointer transition-colors ease-in ${status} [&_svg]:transition-colors [&_svg]:ease-in [&_svg]:size-7`}
            >
              <SparklesIcon
                className={isRoutine ? "" : "text-transparent!"}
                onClick={() => {
                  handleIsRoutine(id);
                }}
              />
              {isEditing ? (
                <div>
                  <Input
                    initialValue={label}
                    onSubmit={(newLabel) => {
                      console.log(newLabel)
                      handleLabel(id, newLabel);
                    }}
                    onCancel={() => handleIsEdit(id)}
                  />
                </div>
              ) : (
                <>
                  <div onClick={() => handleIsEdit(id)} className="w-full text-xl text-neutral-900">
                    {label}
                  </div>
                </>
              )}
              <section onClick={() => handleIsDone(id)} className={`flex shrink-0 justify-center items-center size-7 box-border rounded-lg p-0.5`}>
                <CheckIcon className={`font-bold ${isDone ? "" : "opacity-0"}`} />
              </section>
            </li>
          );
        })}
      </ul>
      <button className="flex items-center justify-center w-full h-9 hover:bg-neutral-200 rounded-md transition-colors ease-in cursor-pointer" onClick={addTodo}>
        <PlusIcon className="size-6" />
      </button>
    </div>
  );
}
