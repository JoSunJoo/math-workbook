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
}

export interface Data12QuizProps1 {
  id: string;
}

export interface Data12QuizProps2 {
  id: string;
  imgId: number;
}

export interface Data13QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
}
