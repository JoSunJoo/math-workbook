import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/SixthGrade/common/example-box';
import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C231 from './C231';

import type { Input221Type } from '../day2/C221';

import e231Image from 'src/contents/SixthGrade/assets/image/P231/2-3-1.png';
export default function P231() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );
  const [allAnswer, setAllAnswer] = useState<Input221Type[]>([]);

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
    await postKeyValue({ key: 'quiz231.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="분모를 바꾸어 대분수를 소수로 고치기"
      question={'빈칸을 채워 분수를 소수로 바꾸세요.'}
      day="day3"
    >
      <ExampleBox>
        <img width="100%" src={e231Image} alt="fractionE122" />
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
                width: '40%',
                justifyContent: 'left',
                margin: '0.5rem',
              }}
            >
              <C231
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
    natureNum: 2,
    sonNum: 3,
    momNum: 5,
    rSon: 6,
    rMom: 10,
    answer: 2.6,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    natureNum: 4,
    sonNum: 9,
    momNum: 25,
    rSon: 36,
    rMom: 100,
    answer: 4.36,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    natureNum: 8,
    sonNum: 7,
    momNum: 8,
    rSon: 875,
    rMom: 1000,
    answer: 8.875,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    natureNum: 5,
    sonNum: 13,
    momNum: 20,
    rSon: 65,
    rMom: 100,
    answer: 5.65,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    natureNum: 4,
    sonNum: 3,
    momNum: 4,
    rSon: 75,
    rMom: 100,
    answer: 4.75,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    natureNum: 2,
    sonNum: 6,
    momNum: 25,
    rSon: 240,
    rMom: 1000,
    answer: 2.24,
    pass: false,
  },
];
