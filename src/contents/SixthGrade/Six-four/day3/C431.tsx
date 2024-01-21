import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P431';

import ArrowRightRed from '../../assets/icon/arrowRightRed.png';

interface C431Props {
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

export default function C431(props: C431Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList, answer } = problem;

  const type =
    numList.length === 2 ? '소수' : numList.length === 4 ? '분수' : '대분수';

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
    const value = await getKeyValue({ key: 'quiz431.answer' });
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
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h5"
                fontWeight={600}
                bgcolor="#f9d590"
                width="6rem"
                height="2.5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
              >
                전항
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                width="6rem"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
                borderTop="none"
              >
                {type === '소수' ? (
                  numList[0]
                ) : type === '분수' ? (
                  <VisualFraction momNum={numList[1]} sonNum={numList[0]} />
                ) : (
                  <>
                    {numList[0]}{' '}
                    <VisualFraction momNum={numList[2]} sonNum={numList[1]} />
                  </>
                )}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h5"
                fontWeight={600}
                bgcolor="#f9d590"
                width="6rem"
                height="2.5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
                borderLeft="none"
              >
                후항
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                width="6rem"
                height="5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid black"
                borderTop="none"
                borderLeft="none"
              >
                {type === '소수' ? (
                  numList[1]
                ) : type === '분수' ? (
                  <VisualFraction momNum={numList[3]} sonNum={numList[2]} />
                ) : (
                  <>
                    {numList[3]}{' '}
                    <VisualFraction momNum={numList[5]} sonNum={numList[4]} />
                  </>
                )}
              </Typography>
            </Box>
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
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              gap="0.5rem"
            >
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
