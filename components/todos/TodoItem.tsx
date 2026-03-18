import { Todo, TodoStatus } from "@/lib/portfolio/todos";
import styles from "./TodoItem.module.css";
import { SparklesIcon, CheckIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import Input from "@/components/todos/TodoInput";
import clsx from "clsx";

type Props = {
  item: Todo;
  handlers: {
    toggleDone: (id: number) => void;
    toggleEdit: (id: number) => void;
    updateLabel: (id: number, label: string) => void;
    toggleRoutine: (id: number) => void;
  };
  status: TodoStatus;
};

const statusClassMap: Record<TodoStatus, string> = {
  green: styles.green,
  yellow: styles.yellow,
  stone: styles.stone
};

export const TodoItem = ({ item, handlers, status }: Props) => {
  const { id, label, isDone, isRoutine, isEditing } = item;
  const { toggleDone, toggleEdit, updateLabel, toggleRoutine } = handlers;
  return (
    <li
      key={id}
      onClick={!isEditing ? () => toggleDone(id) : undefined}
      className={clsx(
        `relative box-border flex cursor-pointer items-center justify-between gap-3 rounded-md border border-solid px-2 py-1 transition-colors ease-in active:[&_section]:scale-125`,
        isEditing && "ring-2",
        statusClassMap[status]
      )}
    >
      <div className={clsx(`item-center flex min-w-1/2 gap-3 [&_svg]:size-7`, styles.svg_transition)}>
        <SparklesIcon
          className={clsx(!isRoutine && styles.svg_opacity)}
          onClick={(e) => {
            e.stopPropagation();
            toggleRoutine(id);
          }}
        />
        {isEditing ? (
          <div className="w-full">
            <Input
              initialValue={label}
              onSubmit={(newLabel) => {
                updateLabel(id, newLabel);
              }}
              onCancel={() => toggleEdit(id)}
            />
          </div>
        ) : (
          <>
            <div className="w-full cursor-text text-xl text-neutral-900">{label}</div>
          </>
        )}
      </div>
      <div className="item-center svg-transition flex gap-3 *:size-6">
        {isEditing ? (
          <XMarkIcon onClick={() => toggleEdit(id)} />
        ) : (
          <PencilIcon
            className={styles.svg_opacity}
            onClick={(e) => {
              e.stopPropagation();
              toggleEdit(id);
            }}
          />
        )}
        <section
          className={clsx(
            `box-border flex shrink-0 items-center justify-center rounded-lg p-0.5 transition-all ease-in active:scale-125`,
            !isDone && `${styles.svg_opacity} active:opacity-100`
          )}
        >
          <CheckIcon className="font-bold" />
        </section>
      </div>
      {/* <div className="absolute -right-7 size-6">
                <TrashIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(id);
                  }}
                  className={clsx("text-stone-300!", styles.svg_opacity)}
                />
              </div> */}
    </li>
  );
};
