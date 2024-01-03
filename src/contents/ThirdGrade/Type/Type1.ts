import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

export interface AnswerProps {
  inputValue: string[][] | number[][] | (number | null)[][];
  answer: string[][] | number[][] | (number | null)[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}
export interface AnswerOrProps {
  inputValue: string[][] | number[][];
  answer: string[][] | number[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}
export interface Data11QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  quiz9: number;
}
export interface Data11QuizProps2 {
  id: string;
  idx: number;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  quiz9: number;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string[][];
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null;
}

export interface Data12QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}

export interface Data12QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  idx: number;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string[][];
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null;
}

export interface Data21QuizProps1 {
  id: string;
  quiz1: number;
  quiz2: number;
}
export interface Data21QuizProps2 {
  id: string;
  id2: number;
  quiz1: number;
  quiz2: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null;
}

export interface Data31QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  quiz9: number;
  quiz10: number;
}
export interface Data31QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  quiz9: number;
  quiz10: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null;
}

export interface Data41QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  type: number;
}
export interface Data41QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  quiz5: number;
  quiz6: number;
  quiz7: number;
  quiz8: number;
  type: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data42QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: string;
  quiz4: string;
  quiz5: string;
}
export interface Data42QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: string;
  quiz4: string;
  quiz5: string;
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
  unit: string;
}

export interface Data51QuizProps2 {
  id: string;
  quiz1: string;
  unit: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data52QuizProps2 {
  id: string;
  quiz1: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
export interface Data53QuizProps {
  id: string;
  quiz1: string;
}
export interface Data53QuizProps2 {
  id: string;
  quiz1: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
