import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P312';

interface C312Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    a1: string | undefined;
    a2: string | undefined;
    a3: string | undefined;
    a4: string | undefined;
    a5: string | undefined;
    a6: string | undefined;
    a7: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        a1: string | undefined;
        a2: string | undefined;
        a3: string | undefined;
        a4: string | undefined;
        a5: string | undefined;
        a6: string | undefined;
        a7: string | undefined;
      }[]
    >
  >;
}

export default function C312(props: C312Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, answer, imgSrc } = problem;
  const [inputs, setInputs] = useState<{
    a1: string | undefined;
    a2: string | undefined;
    a3: string | undefined;
    a4: string | undefined;
    a5: string | undefined;
    a6: string | undefined;
    a7: string | undefined;
  }>({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
  });
  const { a1, a2, a3, a4, a5, a6, a7 } = inputs;

  const [isCorrect, setIsCorrect] = useState(false);

  const setA1 = (value: string) => {
    setInputs({ ...inputs, a1: value });
  };

  const setA2 = (value: string) => {
    setInputs({ ...inputs, a2: value });
  };

  const setA3 = (value: string) => {
    setInputs({ ...inputs, a3: value });
  };

  const setA4 = (value: string) => {
    setInputs({ ...inputs, a4: value });
  };

  const setA5 = (value: string) => {
    setInputs({ ...inputs, a5: value });
  };

  const setA6 = (value: string) => {
    setInputs({ ...inputs, a6: value });
  };

  const setA7 = (value: string) => {
    setInputs({ ...inputs, a7: value });
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz312.answer' });
    if (value) {
      setInputs({
        a1: value[qId].a1,
        a2: value[qId].a2,
        a3: value[qId].a3,
        a4: value[qId].a4,
        a5: value[qId].a5,
        a6: value[qId].a6,
        a7: value[qId].a7,
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
      answer[0] === a1 &&
      answer[1] === a2 &&
      answer[2] === a3 &&
      answer[3] === a4 &&
      answer[4] === a5 &&
      answer[5] === a6 &&
      answer[6] === a7
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, a1, a2, a3, a4, a5, a6, a7, answer]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" fontWeight={600} mb="2rem">
              {qId === 0
                ? '사과 3개와 바나나 2개를 넣어 주스 1병을 만들어요.'
                : '여학생 4명, 남학생 2명이 모여 모둠 하나를 만들어요.'}
            </Typography>
            <Box position="relative">
              <Avatar
                src={imgSrc}
                variant="square"
                style={{
                  width: '45rem',
                  height: 'max-content',
                  margin: '0rem 0.8rem',
                }}
              />
              <Box
                position="absolute"
                right={qId === 0 ? '23rem' : '22.2rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a1}
                  onChange={e => setA1(e.target.value)}
                  disabled={isSolved}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '19.3rem' : '18.2rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a2}
                  onChange={e => setA2(e.target.value)}
                  disabled={isSolved}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '15.5rem' : '14.3rem'}
                top={qId === 0 ? '2.7rem' : '2.8rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a3}
                  onChange={e => setA3(e.target.value)}
                  disabled={isSolved}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '19.3rem' : '18.2rem'}
                top={qId === 0 ? '5.2rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a4}
                  onChange={e => setA4(e.target.value)}
                  disabled={isSolved}
                />
              </Box>
              <Box
                position="absolute"
                right={qId === 0 ? '15.5rem' : '14.3rem'}
                top={qId === 0 ? '5.2rem' : '5.4rem'}
              >
                <NumberInput
                  width="2.5rem"
                  value={a5}
                  onChange={e => setA5(e.target.value)}
                  disabled={isSolved}
                />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box display="flex" mt="2rem">
                <Typography variant="h5" fontWeight={600}>
                  {qId === 0
                    ? '사과의 수는 바나나의 수의'
                    : '여학생의 수는 남학생의 수의'}
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={a6 ? a6 : ''}
                  onChange={e => setA6(e.target.value)}
                  disabled={isSolved}
                />
                <Typography variant="h5" fontWeight={600}>
                  배예요.
                </Typography>
              </Box>
              <Box display="flex" mt="2rem">
                <Typography variant="h5" fontWeight={600}>
                  {qId === 0
                    ? '바나나의 수는 사과의 수의'
                    : '남학생의 수는 여학생의 수의'}
                </Typography>
                <TextUnderBar
                  width="4rem"
                  value={a7 ? a7 : ''}
                  onChange={e => setA7(e.target.value)}
                  disabled={isSolved}
                />
                <Typography variant="h5" fontWeight={600}>
                  배예요.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
