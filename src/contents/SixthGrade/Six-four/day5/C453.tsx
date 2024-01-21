import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P453';

import RedCard from '../../assets/image/P453/4-5-3_1.png';
import GreenCard from '../../assets/image/P453/4-5-3_2.png';
import BlueCard from '../../assets/image/P453/4-5-3_3.png';
import Arrow from '../../assets/image/P453/4-5-3_4.png';

interface C453Props {
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

export default function C453(props: C453Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, cardNumList, index, num, answer } = problem;

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
    const value = await getKeyValue({ key: 'quiz453.answer' });
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
      updatedInputs[qId] = inputs;
      return updatedInputs;
    });
    const isDifferent = !(
      input1 === input4 &&
      input2 === input5 &&
      input3 === input6
    );
    if (
      ((input1 === answer[0] &&
        input2 === answer[1] &&
        input3 === answer[2] &&
        input4 === answer[3] &&
        input5 === answer[4] &&
        input6 === answer[5]) ||
        (input1 === answer[3] &&
          input2 === answer[4] &&
          input3 === answer[5] &&
          input4 === answer[0] &&
          input5 === answer[1] &&
          input6 === answer[2])) &&
      isDifferent
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
    <Box display="flex">
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
          width="100%"
          height="100%"
        >
          <Box display="flex" gap="1rem">
            <Box position="relative" width="4rem" height="5rem">
              <Avatar
                src={RedCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                width="2rem"
                top="30%"
                left="24%"
                justifyContent="center"
              >
                {cardNumList[0]}
              </Typography>
            </Box>
            <Box position="relative" width="4rem" height="100%">
              <Avatar
                src={GreenCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                width="2rem"
                top="30%"
                left="24%"
                justifyContent="center"
              >
                {cardNumList[1]}
              </Typography>
            </Box>
            <Box position="relative" width="4rem" height="100%">
              <Avatar
                src={BlueCard}
                variant="square"
                style={{
                  width: '4rem',
                  height: 'max-content',
                  marginBottom: '2rem',
                  position: 'absolute',
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                display="flex"
                alignItems="center"
                gap="0.5rem"
                position="absolute"
                width="2rem"
                top="30%"
                left="24%"
                justifyContent="center"
              >
                {cardNumList[2]}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap="1rem">
            <Avatar
              src={Arrow}
              variant="square"
              style={{
                width: '2rem',
                height: 'max-content',
                marginBottom: '2rem',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap="0.5rem"
            >
              {index === 0 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <>{num}</>
                    {' : '}
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <>{num}</>
                    {' : '}
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                </Box>
              ) : index === 1 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    {num}
                    {' = '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    {num}
                    {' = '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                </Box>
              ) : index === 2 ? (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}

                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    {num}

                    {' : '}

                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}

                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    {num}

                    {' : '}

                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                      disabled={isSolved}
                    />
                  </Box>
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input1}
                      onChange={e => setInput1(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input2}
                      onChange={e => setInput2(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    <NumberInput
                      value={input3}
                      onChange={e => setInput3(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    {num}
                  </Box>
                  <Box display="flex" gap="0.5rem">
                    <NumberInput
                      value={input4}
                      onChange={e => setInput4(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    <NumberInput
                      value={input5}
                      onChange={e => setInput5(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' = '}
                    <NumberInput
                      value={input6}
                      onChange={e => setInput6(Number(e.target.value))}
                      disabled={isSolved}
                    />
                    {' : '}
                    {num}
                  </Box>
                </Box>
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
