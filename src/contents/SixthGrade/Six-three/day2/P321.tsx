import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C321 from './C321';

import ImgExample from '../../assets/image/P321/ImgExample.png';
import N1 from '../../assets/image/P321/N1.png';
import N2 from '../../assets/image/P321/N2.png';
import N3 from '../../assets/image/P321/N3.png';
import N4 from '../../assets/image/P321/N4.png';

export default function P321() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const [allInputs, setAllInputs] = useState<
    {
      firstMom: number | undefined;
      firstSon: number | undefined;
      secondMom: number | undefined;
      secondSon: number | undefined;
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
    await postKeyValue({ key: 'quiz321.answer', value: allInputs });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout day="day2" title="비" question={'□에 알맞은 수를 써넣으세요.'}>
      <Avatar
        src={ImgExample}
        variant="square"
        style={{
          width: '45rem',
          height: 'max-content',
          marginBottom: '2rem',
        }}
      />
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
            <C321
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
  leftItem: string;
  rightItem: string;
  imgSrc: string;
  answer: AnswerProp;
}

interface AnswerProp {
  firstMom: number;
  firstSon: number;
  secondMom: number;
  secondSon: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    leftItem: '벌',
    rightItem: '나비',
    imgSrc: N1,
    answer: {
      firstMom: 6,
      firstSon: 5,
      secondMom: 5,
      secondSon: 6,
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    leftItem: '꽃',
    rightItem: '나무',
    imgSrc: N2,
    answer: {
      firstMom: 8,
      firstSon: 3,
      secondMom: 3,
      secondSon: 8,
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    leftItem: '사각형',
    rightItem: '원',
    imgSrc: N3,
    answer: { firstMom: 6, firstSon: 4, secondMom: 4, secondSon: 6 },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    leftItem: '수박',
    rightItem: '사과',
    imgSrc: N4,
    answer: { firstMom: 2, firstSon: 5, secondMom: 5, secondSon: 2 },
  },
];
