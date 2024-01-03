export interface Data11QuizProps1 {
  id: string;
  quiz1: string;
  quiz2: number;
  quiz3: number;
  quiz4: number;
}
export interface Data11QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data13QuizProps1 {
  id: string;
  quiz1: string;
  quiz2: string;
}
export interface Data13QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data21QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
  quiz5: string;
  quiz6: string;
  quiz7: string;
  quiz8: string;
}
export interface Data21QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
  quiz5: string;
  quiz6: string;
  quiz7: string;
  quiz8: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data22QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
}
export interface Data22QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
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
  sign1: string;
}
export interface Data51QuizProps2 {
  id: string;
  quiz1: string;
  sign1: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
