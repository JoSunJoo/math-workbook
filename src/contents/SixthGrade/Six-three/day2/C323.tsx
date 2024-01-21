import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P323';

interface C323Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input: string | undefined;
      }[]
    >
  >;
}

export default function C323(props: C323Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, imgSrc, answer } = problem;
  const [inputs, setInputs] = useState<{
    input: string | undefined;
  }>({ input: '' });

  const { input } = inputs;

  const [isCorrect, setIsCorrect] = useState(false);

  const setInput = (value: string) => {
    setInputs(prev => ({ ...prev, input: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz323.answer' });
    if (value) {
      setInputs({ input: value[qId].input });
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
    <Box>
      <Box display="flex" alignItems="start" mb="4rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="2rem" alignItems="end">
          <ProblemImg src={imgSrc} />
          <TextUnderBar
            value={input ? input : ''}
            onChange={e => setInput(e.target.value)}
            disabled={isSolved}
          />
        </Box>
      </Box>
    </Box>
  );
}

const ProblemImg = styled.img`
  width: 12rem;
  height: 10rem;
  object-fit: contain;
`;
