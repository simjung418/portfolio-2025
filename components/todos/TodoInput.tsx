import { useState, useRef, useEffect } from "react";
import { TodoInputProps } from "@/lib/types";

export default function Input({ initialValue = "", onSubmit, onCancel }: TodoInputProps) {
  const [value, setValue] = useState(initialValue);
  const todoInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    todoInput.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value); // ← 부모에게 이벤트 발생!
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      // ESC 키
      onCancel?.(); // onCancel이 있으면 실행
    }
    // Enter는 form의 onSubmit이 자동 처리
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="newLabel" ref={todoInput} type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} className="text-xl text-neutral-900 outline-none" />
    </form>
  );
}
