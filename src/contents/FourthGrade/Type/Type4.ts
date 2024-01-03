export interface Data11QuizProps1 {
  id: string;
}
export interface Data11QuizProps2 {
  id: string;
  imgId: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data12QuizProps1 {
  id: string;
}
export interface Data12QuizProps2 {
  id: string;
  imgId: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data13QuizProps {
  id: string;
  type: number;
  quiz1: number;
  quiz2?: number;
}
export interface Data13QuizProps1 {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data13QuizProps2 {
  id: string;
  quiz1: number;
}

export interface Data13QuizProps3 {
  id: string;
  type: number;
  quiz1: number;
  quiz2?: number;
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
}
export interface Data31QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data32QuizProps {
  id: string;
  type: number;
  quiz1: number;
  quiz2: number;
}
export interface Data32QuizProps2 {
  id: string;
  type: number;
  quiz1: number;
  quiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data41QuizProps {
  id: string;
  quiz1: string;
  unit: string;
  unit2?: string;
}

export interface Data41QuizProps2 {
  id: string;
  quiz1: string;
  unit: string;
  unit2?: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data43QuizProps2 {
  id: string;
  quiz1: string;
  unit: string;
  imgId: number;
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
export interface Data51QuizProps2 {
  id: string;
  quiz1: string;
  unit?: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
