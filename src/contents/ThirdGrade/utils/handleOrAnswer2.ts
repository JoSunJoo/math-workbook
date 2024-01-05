import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';

// import { useEliceAccount } from '@elice/extcontent-utils';

interface Props {
  key?: string;
  inputValue: string[][];
  answer: string[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleOrAnswer = (props: Props) => {
  const { key, inputValue, answer, setScore, setCorrect } = props;
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;

  for (let i = 0; i < len; i++) {
    let flag = true;
    if (inputValue[i][1] === inputValue[i][4]) flag = false;
    if (
      inputValue[i][0] !== answer[i][0] &&
      inputValue[i][3] !== answer[i][1] &&
      inputValue[i][6] !== answer[i][1]
    )
      flag = false;

    if (
      (parseInt(inputValue[i][1]) * parseInt(inputValue[i][2])).toString() !==
      inputValue[i][3]
    )
      flag = false;

    if (
      (parseInt(inputValue[i][4]) * parseInt(inputValue[i][5])).toString() !==
      inputValue[i][6]
    )
      flag = false;

    correct.push(flag);
    if (flag) score++;
  }

  const totalScore = handleScore(score, len);
  setScore(totalScore);
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

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};

export const postDataUtil = async (key: any, value: any) => {
  try {
    const response = await postKeyValue({ key, value });
    // console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};
