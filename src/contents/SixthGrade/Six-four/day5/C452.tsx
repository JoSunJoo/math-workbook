import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P452';

import correct from '../../assets/icon/correct.png';
import inCorrect from '../../assets/icon/inCorrect.png';

interface C452Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C452(props: C452Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input]);

  return (
    <Box position="relative">
      <Box display="flex" alignItems="center" position="absolute">
        {isSolved && (
          <CustomCorrectChecker src={isCorrect ? correct : inCorrect} />
        )}
      </Box>
      <Box display="flex">
        <Box display="flex" alignItems="center" gap="1rem">
          <Box display="flex" gap="0.3rem" alignItems="center">
            <NumberInput
              width="2.2rem"
              value={input}
              onChange={e => setInput(Number(e.target.value))}
              disabled={isSolved}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
const CustomCorrectChecker = styled.img`
  position: absolute;
  z-index: 3;
  width: 2rem;
  height: 2.5rem;
  transform: translate(0rem, 1.2rem);
  object-fit: contain;
`;
