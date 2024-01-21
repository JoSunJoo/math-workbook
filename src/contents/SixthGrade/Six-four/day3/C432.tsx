import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P432';

interface C432Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: number | undefined;
    input2: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: number | undefined;
        input2: number | undefined;
      }[]
    >
  >;
}

export default function C432(props: C432Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, leftNum, rightNum, answer } = problem;

  const leftNumType =
    leftNum.length === 1 ? '소수' : leftNum.length === 2 ? '분수' : '대분수';
  const rightNumType =
    rightNum.length === 1 ? '소수' : rightNum.length === 2 ? '분수' : '대분수';

  const [inputs, setInputs] = useState<{
    input1: number | undefined;
    input2: number | undefined;
  }>({
    input1: undefined,
    input2: undefined,
  });
  const { input1, input2 } = inputs;

  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: number) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };
  const setInput2 = (value: number) => {
    setInputs(prev => ({ ...prev, input2: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz432.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
        input2: value[qId].input2,
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
    if (answer[0] === input1 && answer[1] === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="start" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box>
          <Box display="flex" mb="1rem" ml="0.5rem">
            <Box display="flex">
              <Typography
                variant="h5"
                display="flex"
                alignItems="center"
                gap="0.5rem"
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#fce3e7"
                  width="5rem"
                  height="5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                  borderRadius="0.5rem"
                >
                  {leftNumType === '소수' ? (
                    leftNum[0]
                  ) : leftNumType === '분수' ? (
                    <VisualFraction momNum={leftNum[1]} sonNum={leftNum[0]} />
                  ) : (
                    <>
                      {leftNum[0]}{' '}
                      <VisualFraction momNum={leftNum[2]} sonNum={leftNum[1]} />
                    </>
                  )}
                </Typography>
                :
                <Typography
                  variant="h5"
                  fontWeight={600}
                  bgcolor="#daecf6"
                  width="5rem"
                  height="5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid black"
                  borderRadius="0.5rem"
                >
                  {rightNumType === '소수' ? (
                    rightNum[0]
                  ) : rightNumType === '분수' ? (
                    <VisualFraction momNum={rightNum[1]} sonNum={rightNum[0]} />
                  ) : (
                    <>
                      {rightNum[0]}{' '}
                      <VisualFraction
                        momNum={rightNum[2]}
                        sonNum={rightNum[1]}
                      />
                    </>
                  )}
                </Typography>
                =
                <Typography
                  variant="h5"
                  fontWeight={600}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <NumberInput
                    value={input1}
                    onChange={e => setInput1(Number(e.target.value))}
                    width="5rem"
                    bgColor="#fce3e7"
                  />
                </Typography>
                :
                <Typography
                  variant="h5"
                  fontWeight={600}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <NumberInput
                    value={input2}
                    onChange={e => setInput2(Number(e.target.value))}
                    width="5rem"
                    bgColor="#daecf6"
                    disabled={isSolved}
                  />
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
