import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P352';

interface C352Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: string | undefined;
    input2: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: string | undefined;
        input2: string | undefined;
      }[]
    >
  >;
}

export default function C352(props: C352Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, imgSrc1, imgSrc2, answer } = problem;
  const [inputs, setInputs] = useState<{
    input1: string | undefined;
    input2: string | undefined;
  }>({ input1: '', input2: '' });
  const { input1, input2 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: string) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };
  const setInput2 = (value: string) => {
    setInputs(prev => ({ ...prev, input2: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz352.answer' });
    if (value) {
      setInputs({ input1: value[qId].input1, input2: value[qId].input2 });
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
    if (answer.first === input1 && answer.second === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" mb="4rem">
          <Box display="flex" flexDirection="column" gap="2rem">
            <Box
              display="flex"
              gap="0.3rem"
              flexDirection="column"
              alignItems="center"
            >
              <ProblemImg src={imgSrc1} />
              <TextUnderBar
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="0.3rem"
              alignItems="center"
            >
              <ProblemImg2 src={imgSrc2} />
              <TextUnderBar
                value={input2 ? input2 : ''}
                onChange={e => {
                  setInput2(e.target.value);
                }}
                disabled={isSolved}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ProblemImg = styled.img`
  width: 12rem;
  height: 6rem;
  object-fit: contain;
`;

const ProblemImg2 = styled.img`
  width: 12rem;
  height: 9rem;
  object-fit: contain;
`;
