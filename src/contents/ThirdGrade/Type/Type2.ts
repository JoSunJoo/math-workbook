export interface Data11QuizProps {
  id: string;
  imgId: number;
  quiz1: string;
  quiz2: string;
}
export interface Data11QuizProps2 {
  id: string;
  imgId: number;
  quiz1: string;
  quiz2: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data12QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
}
export interface Data12QuizProps2 {
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

export interface Data21QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
}

export interface Data22QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
}
export interface Data22QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data31QuizProps1 {
  id: string;
  quiz1: string;
}
export interface Data31QuizProps2 {
  id: string;
  imgId: number;
  quiz1: string;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
