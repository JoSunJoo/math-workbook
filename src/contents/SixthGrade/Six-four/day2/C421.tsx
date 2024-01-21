import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import { TextUnderBar } from '../../common/text-underbar';

import type { ProblemProp } from './P421';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C421Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: string | undefined;
    input2: string | undefined;
    input3: string | undefined;
    input4: string | undefined;
    input5: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: string | undefined;
        input2: string | undefined;
        input3: string | undefined;
        input4: string | undefined;
        input5: string | undefined;
      }[]
    >
  >;
}

export default function C421(props: C421Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList, answer } = problem;

  const [inputs, setInputs] = useState<{
    input1: string | undefined;
    input2: string | undefined;
    input3: string | undefined;
    input4: string | undefined;
    input5: string | undefined;
  }>({
    input1: undefined,
    input2: undefined,
    input3: undefined,
    input4: undefined,
    input5: undefined,
  });
  const { input1, input2, input3, input4, input5 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: string) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };
  const setInput2 = (value: string) => {
    setInputs(prev => ({ ...prev, input2: value }));
  };
  const setInput3 = (value: string) => {
    setInputs(prev => ({ ...prev, input3: value }));
  };
  const setInput4 = (value: string) => {
    setInputs(prev => ({ ...prev, input4: value }));
  };
  const setInput5 = (value: string) => {
    setInputs(prev => ({ ...prev, input5: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz421.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
        input2: value[qId].input2,
        input3: value[qId].input3,
        input4: value[qId].input4,
        input5: value[qId].input5,
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
      updatedInputs[qId] = { input1, input2, input3, input4, input5 };
      return updatedInputs;
    });
    if (
      answer[0] === Number(input1) &&
      answer[0] === Number(input2) &&
      answer[0] === Number(input3) &&
      answer[1] === Number(input4) &&
      answer[2] === Number(input5)
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2, input3, input4, input5]);

  return (
    <Box display="flex" mb="2rem">
      <Box display="flex" alignItems="start" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography variant="h5" fontWeight={600}>
            {numList[0]}와 {numList[1]}의 최대공약수:
          </Typography>
          <TextUnderBar
            width="3rem"
            value={input1 ? input1 : ''}
            onChange={e => {
              setInput1(e.target.value);
            }}
            disabled={isSolved}
          />
          <Avatar
            src={ArrowRight}
            variant="square"
            style={{
              width: '1.5rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
          <Typography variant="h5" fontWeight={600}>
            {numList[0]} : {numList[1]} = {numList[0]} ÷
          </Typography>
          <NumberInput
            value={Number(input2)}
            onChange={e => {
              setInput2(e.target.value);
            }}
            disabled={isSolved}
          />
          <Typography variant="h5" fontWeight={600}>
            : {numList[1]} ÷
          </Typography>
          <NumberInput
            value={Number(input3)}
            onChange={e => {
              setInput3(e.target.value);
            }}
            disabled={isSolved}
          />
          <Typography variant="h5" fontWeight={600}>
            =
          </Typography>
          <NumberInput
            value={Number(input4)}
            onChange={e => {
              setInput4(e.target.value);
            }}
            disabled={isSolved}
          />
          <Typography variant="h5" fontWeight={600}>
            :
          </Typography>
          <NumberInput
            value={Number(input5)}
            onChange={e => {
              setInput5(e.target.value);
            }}
            disabled={isSolved}
          />
        </Box>
      </Box>
    </Box>
  );
}
