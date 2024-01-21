import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C252 from './C252';

import type { Input211Type } from '../day1/C211';

export default function P252() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };
  const [allAnswer, setAllAnswer] = useState<Input211Type[]>([]);

  const checkAnswer = async () => {
    const currentScore = calculateTruePercentage(passArray);
    if (!isSolved) await sendScoreUtil(currentScore);
    await postKeyValue({ key: 'quiz252.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="연산 퍼즐"
      question={
        '분모, 분자에 어떤 수를 곱해서 분모를 10으로 바꿀 수 있는 분수는 ㄱ, 100으로 바꿀 수 있는 분수는 ㄴ, 1000으로 바꿀 수 있는 분수는 ㄷ을 입력하세요'
      }
      day="day5"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {divisionProblems.map(problem => (
            <Box
              key={problem.qNum}
              sx={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C252
                allAnswers={allAnswer}
                setAllAnswers={setAllAnswer}
                problem={problem}
                isSolved={isSolved}
                handleCorrectChange={(qId, pass) =>
                  handleCorrectChange(qId, pass)
                }
              />
            </Box>
          ))}
        </Box>
        <SubmitButton
          onClick={checkAnswer}
          myColor="#00B76A"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  // 0 : 동그라미 1: 세모 2: 네모
  { qId: 0, qNum: '①', sonNum: 1, momNum: 2, answer: 'ㄱ', pass: false },
  { qId: 1, qNum: '②', sonNum: 1, momNum: 4, answer: 'ㄴ', pass: false },
  { qId: 2, qNum: '③', sonNum: 1, momNum: 5, answer: 'ㄱ', pass: false },
  { qId: 3, qNum: '④', sonNum: 1, momNum: 8, answer: 'ㄷ', pass: false },
  { qId: 4, qNum: '⑤', sonNum: 1, momNum: 20, answer: 'ㄴ', pass: false },
  { qId: 5, qNum: '⑥', sonNum: 1, momNum: 25, answer: 'ㄴ', pass: false },
  { qId: 6, qNum: '⑦', sonNum: 1, momNum: 40, answer: 'ㄷ', pass: false },
  { qId: 7, qNum: '⑧', sonNum: 1, momNum: 125, answer: 'ㄷ', pass: false },
  { qId: 8, qNum: '⑨', sonNum: 1, momNum: 250, answer: 'ㄷ', pass: false },
];
