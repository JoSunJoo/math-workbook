export interface Data11QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data11QuizProps2 {
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
export interface Data12QuizProps1 {
  id: string;
  left: string[];
  rightQuiz1: number;
  rightQuiz2: number;
}
export interface Data12QuizProps2 {
  rightQuiz1: number;
  rightQuiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data13QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data13QuizProps2 {
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

export interface Data21QuizProps1 {
  id: string;
  left: string[];
  rightQuiz1: number;
  rightQuiz2: number;
}
export interface Data21QuizProps2 {
  rightQuiz1: number;
  rightQuiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data22QuizProps1 {
  id: string;
  left: string[];
  rightQuiz1: number;
  rightQuiz2: number;
}
export interface Data22QuizProps2 {
  rightQuiz1: number;
  rightQuiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data23QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data23QuizProps2 {
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

export interface Data31QuizProps1 {
  id: string;
  quiz1: number;
  quiz2: number;
}

export interface Data31QuizProps2 {
  id: string;
  type: number;
  quiz1: number;
  quiz2: number;
}

export interface Data32QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data33QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}

export interface Data41QuizProps {
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: (boolean | null | undefined)[];
  singleCorrect: boolean | null | undefined;
}

export interface Data43QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data43QuizProps2 {
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

export interface Data51QuizProps {
  id: string;
  type: number;
  quiz1: string;
  unit1: string;
  unit2?: string;
}
export interface Data52QuizProps {
  id: string;
  type: number;
  quiz1: string;
  unit1: string;
}

export interface Data53QuizProps {
  id: string;
  type: number;
  quiz1: string;
  unit1: string;
  unit2?: string;
  unit3?: string;
}
export interface Data53QuizProps2 {
  id: string;
  type: number;
  quiz1: string;
  unit1: string;
  unit2?: string;
  unit3?: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
