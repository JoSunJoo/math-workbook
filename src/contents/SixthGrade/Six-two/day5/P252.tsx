import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import C252 from './C252';

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

  const checkAnswer = () => {
    //TODO 점수 보내는 api 추가
    setIsSolved(prev => !prev);
  };
  return (
    <Layout
      title="연산 퍼즐"
      question={
        '분모, 분자에 어떤 수를 곱해서 분모를 10, 100, 1000으로 바꿀 수 있는 분수는 O, 바꾸지 못하는 분수는 X 입력하세요'
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
  { qId: 0, qNum: '①', sonNum: 1, momNum: 2, answer: 0, pass: false },
  { qId: 1, qNum: '②', sonNum: 1, momNum: 4, answer: 1, pass: false },
  { qId: 2, qNum: '③', sonNum: 1, momNum: 5, answer: 0, pass: false },
  { qId: 3, qNum: '④', sonNum: 1, momNum: 8, answer: 2, pass: false },
  { qId: 4, qNum: '⑤', sonNum: 1, momNum: 20, answer: 1, pass: false },
  { qId: 5, qNum: '⑥', sonNum: 1, momNum: 25, answer: 1, pass: false },
  { qId: 6, qNum: '⑦', sonNum: 1, momNum: 40, answer: 2, pass: false },
  { qId: 7, qNum: '⑧', sonNum: 1, momNum: 125, answer: 2, pass: false },
  { qId: 8, qNum: '⑨', sonNum: 1, momNum: 250, answer: 2, pass: false },
];
