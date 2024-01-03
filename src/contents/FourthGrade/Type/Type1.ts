import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

export interface Data11QuizProps {
  id: string;
  quiz1: number;
}

export interface Data11QuizProps2 {
  id: string;
  quiz1: number;
  imgId: number;
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
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data13QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
}
export interface Data13QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data21QuizProps1 {
  id: string;
}

export interface Data21QuizProps2 {
  id: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data22QuizProps {
  id: string;
  type: number;
  quiz1: number;
  quiz2?: number;
  quiz3?: number;
  quiz4?: number;
  quiz5?: number;
}
export interface Data22QuizProps2 {
  id: string;
  type?: number;
  quiz1: number;
  quiz2?: number;
  quiz3?: number;
  quiz4?: number;
  quiz5?: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data23QuizProps1 {
  id: string;
  quiz1?: string;
  quiz2?: string;
  quiz3?: string;
  quiz4?: string;
  quiz5?: string;
  quiz6?: string;
  quiz7?: string;
}

export interface Data23QuizProps2 {
  id: string;
  imgId: number;
  quiz1?: string;
  quiz2?: string;
  quiz3?: string;
  quiz4?: string;
  quiz5?: string;
  quiz6?: string;
  quiz7?: string;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data31QuizProps {
  id: string;
  type: number;
  quiz1: string;
}
export interface Data31QuizProps2 {
  id: string;
  type: number;
  quiz1: string;
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
  quiz1: string;
  quiz2: string;
}
export interface Data32QuizProps2 {
  id: string;
  type: number;
  quiz1: string;
  quiz2: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data33QuizProps1 {
  id: string;
}
export interface Data33QuizProps2 {
  id: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data41QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
}
export interface Data41QuizProps2 {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: number;
  quiz4: number;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data42QuizProps1 {
  id: string;
}
export interface Data42QuizProps2 {
  id: string;
  imgId: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data43QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
}
export interface Data43QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
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

export interface Data52QuizProps {
  id: string;
  quiz1: string;
  unit?: string;
}

export interface Data53QuizProps {
  id: string;
  quiz1: string;
  unit?: string;
}
