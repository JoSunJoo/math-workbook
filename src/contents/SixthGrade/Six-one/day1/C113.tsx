/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

interface C113Props {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    lNum: number;
    rNum: number;
  };
  allAnswers: {
    son: string | number;
    mother: string | number;
  }[];
  setAllAnswers: React.Dispatch<
    React.SetStateAction<
      {
        son: string | number;
        mother: string | number;
      }[]
    >
  >;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C113(props: C113Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, lNum, rNum } = problem;
  const [answer, setAnswer] = useState<{
    son: string | number;
    mother: string | number;
  }>({ son: '', mother: '' });
  const { son, mother } = answer;

  const [isCorrect, setIsCorrect] = useState(false);

  const setSon = (value: number) => {
    setAnswer({ ...answer, son: value });
  };

  const setMother = (value: number) => {
    setAnswer({ ...answer, mother: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz113.answer' });
    setAnswer({ mother: value[qId].mother, son: value[qId].son });
  };

  useEffect(() => {
    if (renderGetData) {
      void renderGetData();
    }
  }, []);

  useEffect(() => {
    setAllAnswers(prevAllAnswers => {
      const updatedAnswers = [...prevAllAnswers];
      updatedAnswers[qId] = answer;
      return updatedAnswers;
    });

    if (son === lNum && mother === rNum) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [son, mother, qId]);

  return (
    <Box display="flex" gap="0.2rem" alignItems="center" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo>{qNum}</CustomTypo>
      <CustomTypo marginRight="0.5rem">
        {lNum} ÷ {rNum} =
      </CustomTypo>
      <DivisionInput
        mother={mother}
        son={son}
        onChangeMother={e => setMother(Number(e.target.value))}
        onChangeSon={e => setSon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
