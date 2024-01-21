import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C421 from './C421';

import ImgExample from '../../assets/image/P421/ImgExample.png';

export default function P421() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const [allInputs, setAllInputs] = useState<
    {
      input1: string | undefined;
      input2: string | undefined;
      input3: string | undefined;
      input4: string | undefined;
      input5: string | undefined;
    }[]
  >([]);

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
    await postKeyValue({ key: 'quiz421.answer', value: allInputs });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      day="day2"
      title="간단한 자연수의 비로 나타내기"
      question={
        '가장 간단한 자연수의 비로 나타내는 과정입니다. 빈 곳에 알맞은 수를 써넣으세요.'
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
      <Box display="grid" gridTemplateColumns="1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 2rem',
            }}
          >
            <C421
              allInputs={allInputs}
              setAllInputs={setAllInputs}
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
  numList: number[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [12, 15],
    answer: [3, 4, 5],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [32, 24],
    answer: [8, 4, 3],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [80, 48],
    answer: [16, 5, 3],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [90, 36],
    answer: [18, 5, 2],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [33, 44],
    answer: [11, 3, 4],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [18, 81],
    answer: [9, 2, 9],
  },
];
