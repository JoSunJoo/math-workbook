export interface Data11QuizProps1 {
  id: string;
}
export interface Data11QuizProps2 {
  id: string;
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

export interface Data31QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}

export interface Data32QuizProps {
  id: string;
  type: number;
  quiz1: number;
  quiz2: number;
}

export interface Data41QuizProps {
  id: string;
  quiz1: string;
  unit: string;
  unit2?: string;
}

export interface Data43QuizProps2 {
  id: string;
  quiz1: string;
  unit: string;
  imgId: number;
}

export interface Data51QuizProps {
  id: string;
  quiz1: string;
  unit?: string;
}
