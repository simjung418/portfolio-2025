"use client";
import Input from "@/components/input";
import Checkbox from "@/components/checkbox";
import { PlusIcon, SparklesIcon, PencilIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


export default function Todos() {
  const todoList = [
    {
      id: 1,
      label: "컴퓨터 켜기",
      done: true,
      routine: true,
    },
    {
      id: 2,
      label: "헬스장 가기",
      done: false,
      routine: true,
    },
    {
      id: 3,
      label: "공부하기",
      done: false,
      routine: true,
    },
    {
      id: 4,
      label: "영양제 먹기",
      done: false,
      routine: true,
    },
    {
      id: 5,
      label: "빨래하기",
      done: false,
      routine: false,
    },
  ];
  const [todos, setTodos] = useState(todoList);
  const addTodo = () => {
    const length = todos.length;
    setTodos([...todos, {
      id: length +1,
      label: "",
      done: false,
      routine: false,
    }]);
  }
  const doneTodo = (id: Number) => {
    console.log(id)
    return id
  }
  return (
    <div className="flex flex-col max-w-md gap-3 mx-auto my-2">
      <h1 className="text-2xl font-bold">Todos!</h1>
      <p className="">오늘 당신의 todo를 입력하세요.</p>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          const { id, routine, label, done } = item;
          let status = "stone";
          if (routine && done) {
            status = "green";
          } else if (routine && !done) {
            status = "yellow";
          }
          return (
            <li
              key={id}
              className={`flex items-center justify-between gap-3 px-2 py-1 border-solid border box-border rounded-md cursor-pointer transition-colors ease-in ${status} [&_svg]:transition-colors [&_svg]:ease-in [&_svg]:size-7`}
              onClick={()=>doneTodo(id)}
            >
              <SparklesIcon />
              <div className="w-full text-xl text-neutral-900">{label}</div>
              <PencilIcon />
              <Checkbox/>
            </li>
          );
        })}
      </ul>
      <button className="flex items-center justify-center w-full h-9 hover:bg-neutral-200 rounded-md transition-colors ease-in cursor-pointer" onClick={addTodo}><PlusIcon className="size-6" /></button>
    </div>
  );
}
