import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
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

  allInputs: {
    input1: number | undefined;
    input2: number | undefined;
    input3: number | undefined;
    input4: number | undefined;
    input5: number | undefined;
    input6: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: number | undefined;
        input2: number | undefined;
        input3: number | undefined;
        input4: number | undefined;
        input5: number | undefined;
        input6: number | undefined;
      }[]
    >
  >;
}

export default function C423(props: C423Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList, answer } = problem;

  const [inputs, setInputs] = useState<{
    input1: number | undefined;
    input2: number | undefined;
    input3: number | undefined;
    input4: number | undefined;
    input5: number | undefined;
    input6: number | undefined;
  }>({
    input1: undefined,
    input2: undefined,
    input3: undefined,
    input4: undefined,
    input5: undefined,
    input6: undefined,
  });
  const { input1, input2, input3, input4, input5, input6 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: number) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };
  const setInput2 = (value: number) => {
    setInputs(prev => ({ ...prev, input2: value }));
  };
  const setInput3 = (value: number) => {
    setInputs(prev => ({ ...prev, input3: value }));
  };
  const setInput4 = (value: number) => {
    setInputs(prev => ({ ...prev, input4: value }));
  };
  const setInput5 = (value: number) => {
    setInputs(prev => ({ ...prev, input5: value }));
  };
  const setInput6 = (value: number) => {
    setInputs(prev => ({ ...prev, input6: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz423.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
        input2: value[qId].input2,
        input3: value[qId].input3,
        input4: value[qId].input4,
        input5: value[qId].input5,
        input6: value[qId].input6,
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
      updatedInputs[qId] = { input1, input2, input3, input4, input5, input6 };
      return updatedInputs;
    });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2, input3, input4, input5, input6]);

  return (
    <Box display="flex" mb="2rem">
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
