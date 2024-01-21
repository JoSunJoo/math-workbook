import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C452 from './C452';

import Img from '../../assets/image/P452/4-5-2.png';

export default function P452() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const [allInputs, setAllInputs] = useState<
    {
      input1: number | undefined;
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
    await postKeyValue({ key: 'quiz452.answer', value: allInputs });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      day="day5"
      title="□ 구하기"
      question={'각 번호에 들어갈 알맞은 수를 써넣으세요.'}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap="3rem"
        justifyContent="center"
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="center"
          width="36.5rem"
          height="37rem"
        >
          <Avatar
            src={Img}
            variant="square"
            style={{
              width: '36.5rem',
              height: '37rem',
              margin: '4rem 0',
              marginLeft: '2rem',
              position: 'absolute',
            }}
          />
        </Box>
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              left: problem.left,
              top: problem.top,
            }}
          >
            <C452
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
      <Box mt="4rem">
        <SubmitButton
          onClick={checkAnswer}
          myColor="#00B76A"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  answer: number;
  left: string;
  top: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    answer: 7,
    left: '96.5px',
    top: '146px',
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    answer: 15,
    left: '407.6px',
    top: '146px',
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    answer: 45,
    left: '96.5px',
    top: '223.5px',
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    answer: 9,
    left: '252px',
    top: '223.5px',
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    answer: 12,
    left: '252px',
    top: '379.5px',
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    answer: 4,
    left: '408px',
    top: '379.5px',
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    answer: 33,
    left: '174.5px',
    top: '535px',
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    answer: 55,
    left: '330px',
    top: '535px',
  },
];
