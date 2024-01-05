import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
// import { useEliceAccount } from '@elice/extcontent-utils';

interface Props {
  key?: string;
  type: number;
  inputValue: string[][];
  answer: string[][] | number[][];
  //   setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};

export const handleOrAnswer = (props: Props) => {
  const { key, type, inputValue, answer, setCorrect } = props;
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;
  if (type === 1) {
    for (let i = 0; i < len; i++) {
      let flag = true;
      if (!(inputValue[i][2] === answer[i][2].toString())) flag = false;
      if (
        !(
          (inputValue[i][0] === answer[i][0].toString() &&
            inputValue[i][1] === answer[i][1].toString()) ||
          (inputValue[i][1] === answer[i][0].toString() &&
            inputValue[i][0] === answer[i][1].toString())
        )
      )
        flag = false;
      correct.push(flag);
      if (flag) score++;
    }
  } else if (type === 2) {
    for (let i = 0; i < len; i++) {
      let flag = true;
      if (!(inputValue[i][0] === answer[i][0].toString())) flag = false;
      if (!(inputValue[i][3] === answer[i][3].toString())) flag = false;
      if (
        !(
          (inputValue[i][2] === answer[i][2].toString() &&
            inputValue[i][1] === answer[i][1].toString()) ||
          (inputValue[i][2] === answer[i][1].toString() &&
            inputValue[i][1] === answer[i][2].toString())
        )
      )
        flag = false;
      correct.push(flag);
      if (flag) score++;
    }
  }

  const totalScore = handleScore(score, len);

  setCorrect(correct);
  sendScore({ score: totalScore }).catch(err => {
    console.error('send score failed', err);
  });
  postDataUtil(key, inputValue)
    .then(response => {
      // console.log('Success:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
export const postDataUtil = async (key: any, value: any) => {
  postKeyValue({ key, value })
    .then(response => {
      // console.log('Success:', response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
