import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P433';

import ArrowRightRed from '../../assets/icon/arrowRightRed.png';
import BlueBook from '../../assets/image/P433/blueBook.png';
import RedBook from '../../assets/image/P433/redBook.png';
import YellowBook from '../../assets/image/P433/yellowBook.png';

interface C433Props {
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

export default function C433(props: C433Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, leftNum, rightNum, answer } = problem;

  const leftNumType = leftNum.length === 1 ? '소수' : '분수';
  const rightNumType = rightNum.length === 1 ? '소수' : '분수';

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
    const value = await getKeyValue({ key: 'quiz433.answer' });
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
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          position="relative"
        >
          <Box>
            <Avatar
              src={
                qId % 3 === 0 ? BlueBook : qId % 3 === 1 ? YellowBook : RedBook
              }
              variant="square"
              style={{
                width: '10rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              position="absolute"
              top="0.8rem"
              left="2.2rem"
            >
              {leftNumType === '소수' ? (
                leftNum[0]
              ) : (
                <VisualFraction momNum={leftNum[1]} sonNum={leftNum[0]} />
              )}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              position="absolute"
              top="0.8rem"
              left="6.2rem"
            >
              {rightNumType === '소수' ? (
                rightNum[0]
              ) : (
                <VisualFraction momNum={rightNum[1]} sonNum={rightNum[0]} />
              )}
            </Typography>
          </Box>
          <Box display="flex" gap="0.3rem" alignItems="center">
            <Avatar
              src={ArrowRightRed}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography variant="h5" fontWeight={600} display="flex">
              <NumberInput
                value={Number(input1)}
                onChange={e => {
                  setInput1(Number(e.target.value));
                }}
                disabled={isSolved}
              />
              :
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
    </Box>
  );
}
