import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import ExampleBox from 'src/contents/SixthGrade/common/example-box';
import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C211 from './C211';

import type { Input211Type } from './C211';

import e211Image from 'src/contents/SixthGrade/assets/image/P211/e_2-1-1.png';

export default function P211() {
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
    await postKeyValue({ key: 'quiz211.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="나눗셈으로 분수를 소수로 고치기"
      question={'빈칸을 채워서 분수를 소수로 바꾸세요.'}
      day="day1"
    >
      <ExampleBox>
        <img width="100%" src={e211Image} alt="fractionE122" />
      </ExampleBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography fontSize="1.25rem">
          * 보기처럼 계산해보며 값을 구하세요.
        </Typography>
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
              <C211
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
  { qId: 0, qNum: '①', sonNum: 1, momNum: 2, answer: 0.5, pass: false },
  { qId: 1, qNum: '②', sonNum: 3, momNum: 5, answer: 0.6, pass: false },
  { qId: 2, qNum: '③', sonNum: 3, momNum: 4, answer: 0.75, pass: false },
  { qId: 3, qNum: '④', sonNum: 3, momNum: 25, answer: 0.12, pass: false },
];
