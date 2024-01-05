import { useState } from 'react';
import { Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C131 from './C131';

export default function P131() {
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
      title="÷(자연수)의 계산"
      question={`(분수)÷(자연수)를 계산하시오`}
      day="day3"
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
              <C131
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
          myColor="#FF7613"
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
    lSon: 2,
    lMom: 3,
    rSon: 2,
    cMom: 3,
    cSon: 1,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lMom: 2,
    lSon: 1,
    rSon: 4,
    cMom: 8,
    cSon: 1,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lMom: 4,
    lSon: 3,
    rSon: 3,
    cMom: 4,
    cSon: 1,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lSon: 1,
    lMom: 2,
    rSon: 3,
    cMom: 6,
    cSon: 1,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lMom: 5,
    lSon: 2,
    rSon: 2,
    cMom: 5,
    cSon: 1,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lSon: 1,
    lMom: 4,
    rSon: 4,
    cMom: 16,
    cSon: 1,
    pass: false,
  },
];
