"use client";
import Input from "@/components/todoInput";
import { PlusIcon, SparklesIcon, CheckIcon, XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useTodos } from "./useTodos";
import styles from "./page.module.css"

export default function Todos() {
  const { todos, isEditing, addTodo, handleIsDone, handleIsEdit, handleLabel, handleIsRoutine, handleDelete } = useTodos();
  return (
    <div className="flex flex-col max-w-md gap-3 mx-auto my-2">
      <h1 className="text-2xl font-bold">Todos!</h1>
      <p className="">오늘 당신의 todo를 입력하세요.</p>
      <ul className="flex flex-col gap-2">
        {todos.map((item) => {
          const { id, label, isDone, isRoutine, isEditing } = item;
          const status = item.status === "green" ? styles.green : item.status === "yellow" ? styles.yellow : styles.stone;
          return (
            <li
              key={id}
              onClick={!isEditing ? () => handleIsDone(id) : () => false}
              className={`relative flex items-center justify-between gap-3 px-2 py-1 border-solid border box-border rounded-md cursor-pointer transition-colors ease-in ${status} ${isEditing ? "ring-2" : ""} active:[&_section]:scale-125`}
            >
              <div className={`flex gap-3 item-center [&_svg]:size-7 min-w-1/2 ${styles.svg_transition}`}>
                <SparklesIcon
                  className={`${isRoutine ? "" : styles.svg_opacity }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIsRoutine(id);
                  }}
                />
                {isEditing ? (
                  <div className="w-full">
                    <Input
                      initialValue={label}
                      onSubmit={(newLabel) => {
                        handleLabel(id, newLabel);
                      }}
                      onCancel={() => handleIsEdit(id)}
                    />
                  </div>
                ) : (
                  <>
                    <div className="w-full text-xl text-neutral-900 cursor-text">{label}</div>
                  </>
                )}
              </div>
              <div className="flex gap-3 item-center *:size-6 svg-transition">
                {isEditing ? (
                  <XMarkIcon onClick={() => handleIsEdit(id)} />
                ) : (
                  <PencilIcon
                      className={styles.svg_opacity}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIsEdit(id);
                    }}
                  />
                )}
                <section className={`flex shrink-0 justify-center items-center box-border rounded-lg p-0.5 active:scale-125 transition-all ${isDone ? "" : `${styles.svg_opacity} active:opacity-100`} ease-in`}>
                  <CheckIcon className={`font-bold`} />
                </section>
              </div>
              {/* <div className="absolute -right-7 size-6">
                <TrashIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(id);
                  }}
                  className={`text-stone-300! ${styles.svg_opacity}`}
                />
              </div> */}
            </li>
          );
        })}
      </ul>
      <button className="flex items-center justify-center w-full transition-colors ease-in rounded-md cursor-pointer h-9 hover:bg-neutral-200" onClick={isEditing ? () => false : addTodo}>
        <PlusIcon className="size-6" />
      </button>
    </div>
  );
}
