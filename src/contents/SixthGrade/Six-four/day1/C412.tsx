import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P412';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C412Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: number | undefined;
    input2: number | undefined;
    input3: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: number | undefined;
        input2: number | undefined;
        input3: number | undefined;
      }[]
    >
  >;
}

export default function C412(props: C412Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, numList, answer } = problem;

  const [inputs, setInputs] = useState<{
    input1: number | undefined;
    input2: number | undefined;
    input3: number | undefined;
  }>({
    input1: undefined,
    input2: undefined,
    input3: undefined,
  });
  const { input1, input2, input3 } = inputs;
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

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz412.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
        input2: value[qId].input2,
        input3: value[qId].input3,
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
      updatedInputs[qId] = { input1, input2, input3 };
      return updatedInputs;
    });
    if (answer[0] === input1 && answer[1] === input2 && answer[1] === input3) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2, input3]);

  return (
    <Box>
      <Box display="flex" alignItems="start" marginRight="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography
            variant="h5"
            fontWeight={400}
            marginRight="1rem"
            marginTop="0.2rem"
          >
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Box display="flex" alignItems="center" gap="0.1rem">
            <Typography variant="h5" fontWeight={600}>
              {numList[0]}
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              :
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              {numList[1]}
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              ({numList[2]}
            </Typography>
            {qId % 2 === 0 ? (
              <Typography variant="h5" fontWeight={600}>
                ×
              </Typography>
            ) : (
              <Typography variant="h5" fontWeight={600}>
                ÷
              </Typography>
            )}
            {numList[3] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[3]}
                {')'}
              </Typography>
            ) : (
              <>
                <NumberInput
                  width="2.2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
                <Typography variant="h5" fontWeight={600}>
                  {')'}
                </Typography>
              </>
            )}
            <Typography variant="h5" fontWeight={600}>
              {': ('}
              {numList[4]}
            </Typography>
            {qId % 2 === 0 ? (
              <Typography variant="h5" fontWeight={600}>
                ×
              </Typography>
            ) : (
              <Typography variant="h5" fontWeight={600}>
                ÷
              </Typography>
            )}
            {numList[5] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[5]}
                {')'}
              </Typography>
            ) : (
              <>
                <NumberInput
                  width="2.2rem"
                  value={Number(input1)}
                  onChange={e => {
                    setInput1(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
                <Typography variant="h5" fontWeight={600}>
                  {')'}
                </Typography>
              </>
            )}

            <Typography variant="h5" fontWeight={600}>
              =
            </Typography>
            {numList[6] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[6]}
              </Typography>
            ) : (
              <NumberInput
                width="2.2rem"
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
            {numList[7] ? (
              <Typography variant="h5" fontWeight={600}>
                {numList[7]}
              </Typography>
            ) : (
              <NumberInput
                width="2.2rem"
                value={Number(input2)}
                onChange={e => {
                  setInput2(Number(e.target.value));
                }}
                disabled={isSolved}
              />
            )}
          </Box>
          <Box display="flex" alignItems="center" mb="4rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Box display="flex" alignItems="center" gap="0.1rem">
              <Typography variant="h5" fontWeight={600}>
                {numList[0]}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                :
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {numList[1]}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                =
              </Typography>
              {numList[6] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[6]}
                </Typography>
              ) : (
                <NumberInput
                  width="2.2rem"
                  value={Number(input3)}
                  onChange={e => {
                    setInput3(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
              <Typography variant="h5" fontWeight={600}>
                :
              </Typography>
              {numList[7] ? (
                <Typography variant="h5" fontWeight={600}>
                  {numList[7]}
                </Typography>
              ) : (
                <NumberInput
                  width="2.2rem"
                  value={Number(input3)}
                  onChange={e => {
                    setInput3(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
