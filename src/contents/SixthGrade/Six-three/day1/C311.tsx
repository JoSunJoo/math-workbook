import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P311';

import ArrowRight from '../../assets//icon/arrowRight.svg';

interface C311Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    firstInput: string | number | undefined;
    secondInput: string | number | undefined;
    thirdInput: string | number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        firstInput: string | number | undefined;
        secondInput: string | number | undefined;
        thirdInput: string | number | undefined;
      }[]
    >
  >;
}

export default function C311(props: C311Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, leftItem, rightItem, answer } = problem;
  const [inputs, setInputs] = useState<{
    firstInput: string | number | undefined;
    secondInput: string | number | undefined;
    thirdInput: string | number | undefined;
  }>({ firstInput: '', secondInput: '', thirdInput: '' });
  const { firstInput, secondInput, thirdInput } = inputs;

  const [isCorrect, setIsCorrect] = useState(false);

  const setFirstInput = (value: string) => {
    setInputs({ ...inputs, firstInput: value });
  };

  const setSecondInput = (value: string) => {
    setInputs({ ...inputs, secondInput: value });
  };

  const setThirdInput = (value: string) => {
    setInputs({ ...inputs, thirdInput: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz311.answer' });
    if (value) {
      setInputs({
        firstInput: value[qId].firstInput,
        secondInput: value[qId].secondInput,
        thirdInput: value[qId].thirdInput,
      });
    }
  };

  useEffect(() => {
    void renderGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllInputs(prevAllInputs => {
      const updatedInputs = [...prevAllInputs];
      updatedInputs[qId] = inputs;
      return updatedInputs;
    });

    if (
      answer[0] === firstInput &&
      answer[0] === secondInput &&
      answer[1] === thirdInput
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, firstInput, secondInput, thirdInput, answer]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box display="flex">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} ÷ {rightItem} =
            </Typography>
            <TextUnderBar
              width="3.5rem"
              value={firstInput ? String(firstInput) : ''}
              onChange={e => setFirstInput(e.target.value)}
              disabled={isSolved}
            />
          </Box>
          <Box display="flex" marginLeft="-2.5rem">
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
              {leftItem}는 {rightItem}의
            </Typography>
            <TextUnderBar
              width="3.5rem"
              value={secondInput ? String(secondInput) : ''}
              onChange={e => setSecondInput(e.target.value)}
              disabled={isSolved}
            />
            <Typography variant="h5" fontWeight={600}>
              배, {rightItem}는 {leftItem}의
            </Typography>
            <TextUnderBar
              width="3.5rem"
              value={thirdInput ? String(thirdInput) : ''}
              onChange={e => setThirdInput(e.target.value)}
              disabled={isSolved}
            />
            <Typography variant="h5" fontWeight={600}>
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
