import { sendScore } from '@elice/extcontent-apis';

interface Props {
  type: number;
  inputValue: string[][];
  answer: string[][] | number[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};

export const handleOrAnswer = (props: Props) => {
  const { type, inputValue, answer, setScore, setCorrect } = props;
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;
  if (type === 1) {
    for (let i = 0; i < len; i++) {
      const temp = [
        '1',
        (parseInt(inputValue[i][1]) / parseInt(inputValue[i][0])).toString(),
      ];
      let flag = true;
      if (!(temp[0] === answer[i][0].toString())) flag = false;
      if (!(temp[1] === answer[i][1].toString())) flag = false;
      correct.push(flag);
      if (flag) score++;
    }
  } else if (type === 2) {
    //3권 2-3
    for (let i = 0; i < len; i++) {
      let temp: string[] = [];
      if (i < 3) {
        temp = [
          '1',
          (parseInt(inputValue[i][1]) / parseInt(inputValue[i][0])).toString(),
        ];
      } else {
        temp = [
          (parseInt(inputValue[i][0]) / parseInt(inputValue[i][1])).toString(),
          '1',
        ];
      }
      let flag = true;
      if (!(temp[0] === answer[i][0].toString())) flag = false;
      if (!(temp[1] === answer[i][1].toString())) flag = false;
      correct.push(flag);
      if (flag) score++;
    }
  }

  setScore(handleScore(score, len));
  setCorrect(correct);
  // sendScore({ score: 100 });
};
