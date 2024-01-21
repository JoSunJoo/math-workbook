import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C313 from './C313';

import FirstImg from '../../assets/image/P313/3-1-3_1.png';
import SecondImg from '../../assets/image/P313/3-1-3_2.png';

export default function P313() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const [allInputs, setAllInputs] = useState<
    {
      a1: string | undefined;
      a2: string | undefined;
      a3: string | undefined;
      a4: string | undefined;
      a5: string | undefined;
      a6: string | undefined;
      a7: string | undefined;
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
    await postKeyValue({ key: 'quiz313.answer', value: allInputs });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      day="day1"
      title="두 수의 비교"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Typography variant="h5" width="100%" textAlign="right" color="grey">
        * 분수는 1/4와 같이 입력합니다.
      </Typography>
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
            <C313
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
        myColor="#FF6291"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  answer: [string, string, string, string, string, string, string];
  imgSrc: string;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    answer: ['20', '25', '30', '20', '24', '5/4', '4/5'],
    imgSrc: FirstImg,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    answer: ['10', '12', '4', '5', '6', '2', '1/2'],
    imgSrc: SecondImg,
  },
];
