import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C322 from './C322';

export default function P322() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const [allInputs, setAllInputs] = useState<
    {
      a1: number | undefined;
      a2: number | undefined;
      a3: number | undefined;
      a4: number | undefined;
      a5: number | undefined;
      a6: number | undefined;
      a7: number | undefined;
      a8: number | undefined;
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
    await postKeyValue({ key: 'quiz322.answer', value: allInputs });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout day="day2" title="비" question={'□에 알맞은 수를 써넣으세요.'}>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 6rem',
            }}
          >
            <C322
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
  mom: number;
  son: number;
  hintIdx: number;
  answer: AnswerProp;
}

interface AnswerProp {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
  a5: number;
  a6: number;
  a7: number;
  a8: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    mom: 4,
    son: 5,
    hintIdx: 0,
    answer: {
      a1: 4,
      a2: 5,
      a3: 5,
      a4: 4,
      a5: 4,
      a6: 5,
      a7: 4,
      a8: 5,
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    mom: 6,
    son: 7,
    hintIdx: 2,
    answer: {
      a1: 6,
      a2: 7,
      a3: 6,
      a4: 7,
      a5: 6,
      a6: 7,
      a7: 6,
      a8: 7,
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    mom: 4,
    son: 3,
    hintIdx: 0,
    answer: {
      a1: 4,
      a2: 3,
      a3: 3,
      a4: 4,
      a5: 4,
      a6: 3,
      a7: 4,
      a8: 3,
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    mom: 5,
    son: 2,
    hintIdx: 3,
    answer: {
      a1: 5,
      a2: 2,
      a3: 5,
      a4: 2,
      a5: 2,
      a6: 5,
      a7: 5,
      a8: 2,
    },
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    mom: 6,
    son: 8,
    hintIdx: 0,
    answer: {
      a1: 6,
      a2: 8,
      a3: 8,
      a4: 6,
      a5: 6,
      a6: 8,
      a7: 6,
      a8: 8,
    },
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    mom: 3,
    son: 11,
    hintIdx: 4,
    answer: {
      a1: 3,
      a2: 11,
      a3: 3,
      a4: 11,
      a5: 11,
      a6: 3,
      a7: 3,
      a8: 11,
    },
  },
];
