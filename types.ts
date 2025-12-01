
export interface Todo {
  id: number;
  label: string;
  isDone: boolean;
  isRoutine: boolean;
  isEditing: boolean;
  status?: string;
}

export interface areyoukidding {
  id: number;
  label: string;
  isDone: boolean;
}

export interface TodoInputProps {
  initialValue?: string;
  onSubmit: (value: string) => void;
  onCancel?: () => void;
}