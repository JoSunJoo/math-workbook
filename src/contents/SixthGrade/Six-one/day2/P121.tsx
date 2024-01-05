import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/SixthGrade/common/example-box';
import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C121 from './C121';

import e121Image from 'src/contents/SixthGrade/assets/image/P121/e_1-2-1.png';
export default function Page13() {
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
    const currentScore = calculateTruePercentage(passArray);
    if (!isSolved) {
      void sendScoreUtil(currentScore);
    }
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="(분수)÷(자연수)"
      question={`□에 알맞은 수를 써넣어 식을 계산하세요.`}
      day="day2"
    >
      <ExampleBox>
        <img width="100%" src={e121Image} alt="fractionE122" />
      </ExampleBox>
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
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C121
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
          myColor="#6297FF"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    mom: 9,
    son: 8,
    num: 4,
    rMom: 9,
    answer: [8, 4, 2, 9],
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    mom: 6,
    son: 5,
    num: 5,
    rMom: 6,
    answer: [5, 5, 1, 6],
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    mom: 7,
    son: 6,
    num: 3,
    rMom: 7,
    answer: [6, 3, 2, 7],
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    mom: 9,
    son: 4,
    num: 2,
    rMom: 9,
    answer: [4, 2, 2, 9],
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    mom: 3,
    son: 8,
    num: 2,
    rMom: 3,
    answer: [8, 2, 4, 3],
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    mom: 8,
    son: 15,
    num: 3,
    rMom: 8,
    answer: [15, 3, 5, 8],
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    mom: 11,
    son: 20,
    num: 5,
    rMom: 11,
    answer: [20, 5, 4, 11],
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    mom: 25,
    son: 21,
    num: 7,
    rMom: 25,
    answer: [21, 7, 3, 25],
    pass: false,
  },
];
