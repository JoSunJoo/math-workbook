import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';

// import { useEliceAccount } from '@elice/extcontent-utils';
import type { AnswerProps } from '../Type/Type1';

export const handleAnswer = ({
  key,
  inputValue,
  answer,
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

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
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
