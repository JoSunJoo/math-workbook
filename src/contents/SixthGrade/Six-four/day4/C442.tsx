import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P442';

interface C442Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: string | undefined;
      }[]
    >
  >;
}

export default function C442(props: C442Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, num1, num2, num3, num4, answer } = problem;
  const [inputs, setInputs] = useState<{
    input1: string | undefined;
  }>({
    input1: undefined,
  });
  const { input1 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: string) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz442.answer' });
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
    <Box display="flex">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            {num1 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            ) : Array.isArray(num1) ? (
              <VisualFraction momNum={num1[1]} sonNum={num1[0]} />
            ) : (
              num1
            )}
            {' : '}
            {num2 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            ) : Array.isArray(num2) ? (
              <VisualFraction momNum={num2[1]} sonNum={num2[0]} />
            ) : (
              num2
            )}
            {' = '}
            {num3 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            ) : Array.isArray(num3) ? (
              <VisualFraction momNum={num3[1]} sonNum={num3[0]} />
            ) : (
              num3
            )}
            {' : '}
            {num4 === 'blank' ? (
              <TextUnderBar
                width="5rem"
                value={input1 ? input1 : ''}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            ) : Array.isArray(num4) ? (
              <VisualFraction momNum={num4[1]} sonNum={num4[0]} />
            ) : (
              num4
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
