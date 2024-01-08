import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C253 from './C253';

import type { Input211Type } from '../day1/C211';

export default function P253() {
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
    await postKeyValue({ key: 'quiz253.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="연산 퍼즐"
      question={'문제를 읽고 알맞은 답을 써 보세요.'}
      day="day5"
    >
      <Box>
        <Typography textAlign="right" color="grey">
          * 분수는 1/4와 같이 입력합니다.
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {divisionProblems.map(problem => (
              <Box
                key={problem.qNum}
                sx={{
                  maxHeight: '200px',
                  margin: '0.5rem',
                }}
              >
                <C253
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
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    q: '3 m의 줄을 8도막으로 똑같이 나누면 한 도막은 몇 m가 되는지 소수로 나타내세요.',
    pass: false,
    unit: 'm',
    answer: 0.375,
  },
  {
    qId: 1,
    qNum: '②',
    q: '수연이가 줄넘기를 20개 하는 동안 시간을 재었더니 17초가 걸렸습니다. 줄을 한 번 넘는 데 몇 초가 걸린 꼴인지 소수로 나타내세요.',
    answer: 0.85,
    pass: false,
    unit: '초',
  },
  {
    qId: 2,
    qNum: '③',
    q: '희성이가 1L짜리 오렌지 주스를 사와서 4분의 1을 마셨습니다.남은 주스는 몇 L인지 소수로 나타내세요.',
    answer: 0.75,
    pass: false,
    unit: 'L',
  },
  {
    qId: 3,
    qNum: '④',
    q: '1 km 거리를 자전거를 타고 가다가 표지판을 보니 목적지까지 남은 거리가 0.125 km입니 다. 지금까지 온 거리는 전체 거리의 몇인지 소수로 나타내세요',
    answer: '0.875',
    pass: false,
    unit: '',
  },
];
