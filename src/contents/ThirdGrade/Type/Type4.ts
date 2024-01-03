export interface Data11QuizProps1 {
  id: string;
  quiz1: string;
}
export interface Data11QuizProps2 {
  id: string;
  quiz1: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data21QuizProps1 {
  id: string;
  quiz1: string;
}
export interface Data21QuizProps2 {
  id: string;
  quiz1: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data41QuizProps {
  quiz1: number;
  quiz2: number;
  isCheck: boolean;
}

export interface Data43QuizProps {
  id: string;
  quiz1: string;
}
export interface Data43QuizProps2 {
  id: string;
  quiz1: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data51QuizProps {
  id: string;
  quiz1: string;
  unit?: string;
}
