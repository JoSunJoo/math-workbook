import { sendScore } from '@elice/extcontent-apis';

interface AnswerProps {
  inputValue: string[][] | number[][] | (number | null)[][];
  answer: string[][] | number[][] | (number | null)[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleAnswer = ({
  inputValue,
  answer,
  setScore,
  setCorrect,
}: AnswerProps) => {
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;

  for (let i = 0; i < len; i++) {
    let flag = true;
    for (let j = 0; j < inputValue[i].length; j++) {
      let temp = inputValue[i][j];
      if (temp === ('' || undefined || null)) temp = null;
      if (temp?.toString() !== answer[i][j]?.toString()) {
        flag = false;
      }
    }
    correct.push(flag);
    if (flag) score++;
  }
  setScore(handleScore(score, len));
  setCorrect(correct);
  // sendScore({ score: 100 });
};

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};
