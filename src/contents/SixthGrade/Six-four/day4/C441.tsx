import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P441';

interface C441Props {
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

export default function C441(props: C441Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList1, numList2, answer } = problem;

  const numList1Type = numList1.length === 2 ? '정수' : '분수';

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
    const value = await getKeyValue({ key: 'quiz441.answer' });
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
    if (answer === input1 && answer === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2]);

  return (
    <Box display="flex" mb="2rem">
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
            {numList1Type === '정수' ? (
              <>
                {numList1[0]} : {numList1[1]}
              </>
            ) : (
              <>
                <VisualFraction momNum={numList1[1]} sonNum={numList1[0]} /> :
                <VisualFraction momNum={numList1[3]} sonNum={numList1[2]} />
              </>
            )}
            {' = ('}
            {numList2[0]} {qId % 2 === 0 ? '×' : '÷'} {numList2[1]}
            {') : ('}
            <NumberInput
              value={Number(input1)}
              onChange={e => {
                setInput1(Number(e.target.value));
              }}
              disabled={isSolved}
            />
            {qId % 2 === 0 ? '×' : '÷'} {numList2[1]}
            {') = '}
            {numList2[0]}:
            <NumberInput
              value={Number(input2)}
              onChange={e => {
                setInput2(Number(e.target.value));
              }}
              disabled={isSolved}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
