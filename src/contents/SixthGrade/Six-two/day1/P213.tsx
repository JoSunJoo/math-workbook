import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C213 from './C213';

import type { Input211Type } from './C211';

export default function P213() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );
  const [allAnswer, setAllAnswer] = useState<Input211Type[]>([]);

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };

  const checkAnswer = async () => {
    const currentScore = calculateTruePercentage(passArray);
    if (!isSolved) await sendScoreUtil(currentScore);
    await postKeyValue({ key: 'quiz213.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="나눗셈으로 분수를 소수로 고치기"
      question={'분자를 분모로 나누어 분수를 소수로 바꾸세요.'}
      day="day1"
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
                width: '40%',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C213
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
          myColor="#FF6291"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  { qId: 0, qNum: '①', sonNum: 2, momNum: 5, answer: 0.4, pass: false },
  { qId: 1, qNum: '②', sonNum: 1, momNum: 4, answer: 0.25, pass: false },
  { qId: 2, qNum: '③', sonNum: 1, momNum: 25, answer: 0.04, pass: false },
  { qId: 3, qNum: '④', sonNum: 13, momNum: 20, answer: 0.65, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 7, momNum: 8, answer: 0.875, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 3, momNum: 125, answer: 0.024, pass: false },
];
