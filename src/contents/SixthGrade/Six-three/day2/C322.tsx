import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P322';

import LeftGuideLineOrange from '../../assets/icon/leftGuideLineOrange.svg';
import LeftGuideLinePink from '../../assets/icon/leftGuideLinePink.svg';

interface C321Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    a1: number | undefined;
    a2: number | undefined;
    a3: number | undefined;
    a4: number | undefined;
    a5: number | undefined;
    a6: number | undefined;
    a7: number | undefined;
    a8: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        a1: number | undefined;
        a2: number | undefined;
        a3: number | undefined;
        a4: number | undefined;
        a5: number | undefined;
        a6: number | undefined;
        a7: number | undefined;
        a8: number | undefined;
      }[]
    >
  >;
}

export default function C322(props: C321Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, mom, son, hintIdx, answer } = problem;
  const [inputs, setInputs] = useState<{
    a1: number | undefined;
    a2: number | undefined;
    a3: number | undefined;
    a4: number | undefined;
    a5: number | undefined;
    a6: number | undefined;
    a7: number | undefined;
    a8: number | undefined;
  }>({
    a1: undefined,
    a2: undefined,
    a3: undefined,
    a4: undefined,
    a5: undefined,
    a6: undefined,
    a7: undefined,
    a8: undefined,
  });
  const { a1, a2, a3, a4, a5, a6, a7, a8 } = inputs;

  const [isCorrect, setIsCorrect] = useState(false);

  const setA1 = (value: number) => {
    setInputs(prev => ({ ...prev, a1: value }));
  };
  const setA2 = (value: number) => {
    setInputs(prev => ({ ...prev, a2: value }));
  };
  const setA3 = (value: number) => {
    setInputs(prev => ({ ...prev, a3: value }));
  };
  const setA4 = (value: number) => {
    setInputs(prev => ({ ...prev, a4: value }));
  };
  const setA5 = (value: number) => {
    setInputs(prev => ({ ...prev, a5: value }));
  };
  const setA6 = (value: number) => {
    setInputs(prev => ({ ...prev, a6: value }));
  };
  const setA7 = (value: number) => {
    setInputs(prev => ({ ...prev, a7: value }));
  };
  const setA8 = (value: number) => {
    setInputs(prev => ({ ...prev, a8: value }));
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz322.answer' });
    if (value) {
      setInputs({
        a1: value[qId].a1,
        a2: value[qId].a2,
        a3: value[qId].a3,
        a4: value[qId].a4,
        a5: value[qId].a5,
        a6: value[qId].a6,
        a7: value[qId].a7,
        a8: value[qId].a8,
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
    if (
      answer.a1 === a1 &&
      answer.a2 === a2 &&
      answer.a3 === a3 &&
      answer.a4 === a4 &&
      answer.a5 === a5 &&
      answer.a6 === a6 &&
      answer.a7 === a7 &&
      answer.a8 === a8
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, a1, a2, a3, a4, a5, a6, a7, a8]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography fontWeight={600} variant="h5" marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box>
          <Box display="flex" flexDirection="column" gap="0.5rem" mb="3rem">
            {
              {
                0: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      {mom} : {son}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a1)}
                            onChange={e => setA1(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a2)}
                            onChange={e => setA2(Number(e.target.value))}
                            disabled={isSolved}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                2: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                        disabled={isSolved}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                        disabled={isSolved}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                            disabled={isSolved}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {son}에 대한 {mom}의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                3: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                        disabled={isSolved}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                        disabled={isSolved}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                            disabled={isSolved}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {mom}의 {son}에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                4: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                        disabled={isSolved}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                        disabled={isSolved}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                            disabled={isSolved}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                            disabled={isSolved}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {mom}과 {son}의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
              }[hintIdx]
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
