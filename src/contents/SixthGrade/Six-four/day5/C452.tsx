import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
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
  allInputs: {
    input1: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: number | undefined;
      }[]
    >
  >;
}

export default function C452(props: C452Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, answer } = problem;

  const [inputs, setInputs] = useState<{
    input1: number | undefined;
  }>({
    input1: undefined,
  });
  const { input1 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: number) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz452.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
      });
    }
  };

  useEffect(() => {
    void renderGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllInputs(prev => {
      const updatedInputs = [...prev];
      updatedInputs[qId] = inputs;
      return updatedInputs;
    });
    if (answer === input1) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1]);

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
              value={input1}
              onChange={e => setInput1(Number(e.target.value))}
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
