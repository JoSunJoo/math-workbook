import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
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

export interface Data12QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
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
  inputValue: string[][];
  inputValue2: string[];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  setInputValue2: React.Dispatch<React.SetStateAction<string[]>>;
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
export interface Data42QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: string;
  quiz4: string;
  quiz5: string;
}
export interface Data51QuizProps {
  id: string;
  quiz1: string;
  unit: string;
}

export interface Data53QuizProps {
  id: string;
  quiz1: string;
}
