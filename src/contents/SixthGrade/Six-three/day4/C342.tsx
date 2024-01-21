import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P342';

import ArrowRight from '../../assets/icon/arrowRight.svg';
import Circle from '../../assets/image/P342/circle.png';
import Star from '../../assets/image/P342/star.png';

interface C342Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    firstInput: string | undefined;
    secondInput: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        firstInput: string | undefined;
        secondInput: string | undefined;
      }[]
    >
  >;
}

export default function C342(props: C342Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, isFraction, leftItem, rightItem, answer } = problem;
  const [inputs, setInputs] = useState<{
    firstInput: string | undefined;
    secondInput: string | undefined;
  }>({ firstInput: '', secondInput: '' });
  const { firstInput, secondInput } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setFirstInput = (value: string) => {
    setInputs(prev => ({ ...prev, firstInput: value }));
  };
  const setSecondInput = (value: string) => {
    setInputs(prev => ({ ...prev, secondInput: value }));
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz342.answer' });
    if (value) {
      setInputs({
        firstInput: value[qId].firstInput,
        secondInput: value[qId].secondInput,
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
    if (answer[0] === firstInput && answer[1] === secondInput) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, firstInput, secondInput]);

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
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              alignItems="center"
              marginLeft="-0.8rem"
            >
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              의
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.5rem',
                }}
              />
              에 대한 비는&nbsp;
              {isFraction ? (
                <Box display="flex" gap="0.2rem" alignItems="center">
                  <VisualFraction sonNum={leftItem[0]} momNum={leftItem[1]} />:
                  <VisualFraction sonNum={rightItem[0]} momNum={rightItem[1]} />
                </Box>
              ) : (
                <Box>
                  {leftItem} : {rightItem}
                </Box>
              )}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginLeft="-2.5rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.2rem',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              alignItems="center"
            >
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.2rem',
                }}
              />
              은
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.2rem',
                }}
              />
              의
              <TextUnderBar
                width="4rem"
                value={firstInput ? firstInput : ''}
                onChange={e => setFirstInput(e.target.value)}
                disabled={isSolved}
              />
              배,
              <Avatar
                src={Circle}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.2rem',
                }}
              />
              은
              <Avatar
                src={Star}
                variant="square"
                style={{
                  width: '1.5rem',
                  height: 'max-content',
                  margin: '0rem 0.2rem',
                }}
              />
              의
              <TextUnderBar
                width="4rem"
                value={secondInput ? secondInput : ''}
                onChange={e => setSecondInput(e.target.value)}
                disabled={isSolved}
              />
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
