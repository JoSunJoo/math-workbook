export interface Data11QuizProps1 {
  id: string;
}
export interface Data11QuizProps2 {
  id: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data23QuizProps {
  id: string;
  quiz1_1: string;
  quiz1_2: string;
  quiz2_1: string;
  quiz2_2: string;
  quiz3_1: string;
  quiz3_2: string;
}
export interface Data23QuizProps2 {
  id: string;
  quiz1_1: string;
  quiz1_2: string;
  quiz2_1: string;
  quiz2_2: string;
  quiz3_1: string;
  quiz3_2: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data31QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
}
export interface Data31QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data41QuizProps {
  id: string;
  method: string;
  mune: number;
  deno: number;
  len: number;
}
export interface Data41QuizProps2 {
  id: string;
  method: string;
  mune: number;
  deno: number;
  len: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data51QuizProps {
  id: string;
  mune: number;
  deno: number;
  len: number;
}
export interface Data51QuizProps2 {
  id: string;
  mune: number;
  deno: number;
  len: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data52QuizProps {
  id: string;
  method: string;
  mune: number;
  deno: number;
  len: number;
  totalText: string;
  unit: string;
}
export interface Data52QuizProps2 {
  id: string;
  method: string;
  mune: number;
  deno: number;
  len: number;
  totalText: string;
  unit: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
