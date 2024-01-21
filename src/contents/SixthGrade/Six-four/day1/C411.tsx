import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import styled from '@emotion/styled';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P411';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C411Props {
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

export default function C411(props: C411Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList, answer } = problem;
  const [inputs, setInputs] = useState<{
    input1: number | undefined;
    input2: number | undefined;
  }>({ input1: undefined, input2: undefined });
  const { input1, input2 } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput1 = (value: number) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };
  const setInput2 = (value: number) => {
    setInputs(prev => ({ ...prev, input2: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz411.answer' });
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
      updatedInputs[qId] = { input1, input2 };
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
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={400} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {numList[0] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[0]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
              <UnderBar />
              {numList[1] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[1]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
            </Box>
            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {numList[2] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[2]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
              <UnderBar />
              {numList[3] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[3]}
                </Typography>
              ) : (
                <NumberInput
                  width="2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
            </Box>
          </Box>
          <Avatar
            src={ArrowRight}
            variant="square"
            style={{
              width: '1.5rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
          <Box display="flex" alignItems="center" gap="0.5rem">
            {numList[0] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[0]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
                disabled={isSolved}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              :
            </Typography>
            {numList[1] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[1]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
                disabled={isSolved}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            {numList[2] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[2]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
                disabled={isSolved}
              />
            )}
            <Typography variant="h5" fontWeight={600}>
              :
            </Typography>
            {numList[3] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[3]}
              </Typography>
            ) : (
              <NumberInput
                width="2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
                disabled={isSolved}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const UnderBar = styled.div`
  width: 1.8rem;
  border-bottom: 0.08rem solid black;
`;
