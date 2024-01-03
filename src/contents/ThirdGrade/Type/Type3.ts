export interface Data11QuizProps1 {
  id: string;
  quiz1: string;
  quiz2: string;
}
export interface Data11QuizProps2 {
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

export interface Data51QuizProps {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  sign1: string;
}
export interface Data51QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  sign1: string;
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
  quiz2: string;
  quiz3: string;
  quiz4: string;
  sign1: string;
}

export interface Data52QuizProps2 {
  id: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
  sign1: string;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}

export interface Data53QuizProps {
  quiz1: number;
  quiz2: number;
}

export interface Data53ItemProps {
  id: string;
  quiz1: number;
  quiz2: number;
  type: string;
}
export interface Data53SingleProps {
  item: Data53ItemProps;
  idx: number;
  inputValue: string[][];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  correct?: boolean | null | undefined;
}
