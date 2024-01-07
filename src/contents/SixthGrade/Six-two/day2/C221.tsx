import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import {
  AnswerInput,
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';
interface C221Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    rSon: number;
    rMom: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C221(props: C221Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, sonNum, momNum, answer, rSon, rMom } = problem;
  const [enter, setEnter] = useState<number | string>('');
  const [answerSon, setAnswerSon] = useState<string | number>('');

  useEffect(() => {
    if (enter === answer && rSon === answerSon) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enter, answerSon, qId, answer, rSon]);

  return (
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <VisualFraction width="3rem" momNum={momNum} sonNum={sonNum} />
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <VisualFraction
          width="4rem"
          momNum={rMom}
          sonNum={
            <NumberInput
              width="4rem"
              value={answerSon}
              onChange={e => setAnswerSon(Number(e.target.value))}
            />
          }
        />
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <AnswerInput
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
