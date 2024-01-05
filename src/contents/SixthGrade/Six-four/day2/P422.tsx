import { Avatar, Box } from '@mui/material';

import C422 from './C422';
import ImgExample from '../../assets/image/P422/ImgExample.png';
import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { calculateTruePercentage } from '../../utils/true-percentage';
import { sendScoreUtil } from '../../utils/score-utils';
import { useState } from 'react';

export default function P422() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
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
      day="day2"
      title="간단한 자연수의 비로 나타내기"
      question={
        '자연수의 비로 나타내는 과정입니다. 빈 곳에 알맞은 수를 써넣으세요.'
      }
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Avatar
          src={ImgExample}
          variant="square"
          style={{
            width: '50rem',
            height: 'max-content',
            marginBottom: '2rem',
          }}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              margin: '0.5rem',
              padding: '2rem 2rem',
            }}
          >
            <C422
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
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  numList1: number[];
  numList2: number[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList1: [8, 6],
    numList2: [5, 7],
    answer: [24, 15, 28],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList1: [4, 5],
    numList2: [3, 4],
    answer: [20, 15, 16],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList1: [6, 9],
    numList2: [7, 5],
    answer: [18, 21, 10],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList1: [4, 6],
    numList2: [3, 5],
    answer: [12, 9, 10],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList1: [11, 3],
    numList2: [2, 2],
    answer: [33, 6, 22],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList1: [9, 15],
    numList2: [5, 2],
    answer: [45, 25, 6],
  },
];
