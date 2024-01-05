import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P423';

interface C423Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C423(props: C423Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);
  const [input3, setInput3] = useState<undefined | number>(undefined);
  const [input4, setInput4] = useState<undefined | number>(undefined);
  const [input5, setInput5] = useState<undefined | number>(undefined);
  const [input6, setInput6] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (
      answer[0] === input1 &&
      answer[0] === input3 &&
      answer[1] === input2 &&
      answer[1] === input4 &&
      answer[2] === input5 &&
      answer[3] === input6
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [
    isSolved,
    qId,
    answer,
    handleCorrectChange,
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
  ]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            gap="0.5rem"
            alignItems="center"
          >
            <VisualFraction momNum={numList[1]} sonNum={numList[0]} />
            {' : '}
            <VisualFraction momNum={numList[3]} sonNum={numList[2]} />
            {' = ( '}
            <VisualFraction momNum={numList[1]} sonNum={numList[0]} />
            {' × '}
            <DivisionInput
              son={String(input1)}
              mother={String(input2)}
              onChangeSon={e => setInput1(Number(e.target.value))}
              onChangeMother={e => setInput2(Number(e.target.value))}
              disabled={isSolved}
            />
            ) : (
            <VisualFraction momNum={numList[3]} sonNum={numList[2]} />
            ×
            <DivisionInput
              son={String(input3)}
              mother={String(input4)}
              onChangeSon={e => setInput3(Number(e.target.value))}
              onChangeMother={e => setInput4(Number(e.target.value))}
              disabled={isSolved}
            />
            ) =
            <NumberInput
              value={String(input5)}
              onChange={e => setInput5(Number(e.target.value))}
              disabled={isSolved}
            />
            :
            <NumberInput
              value={String(input6)}
              onChange={e => setInput6(Number(e.target.value))}
              disabled={isSolved}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
