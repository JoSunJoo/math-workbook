/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box, Input } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

import type { Input211Type } from '../day1/C211';
interface C253Props {
  problem: {
    qId: number;
    qNum: string;
    q: string;
    answer: string | number;
    pass: boolean;
    unit: string;
  };
  allAnswers: Input211Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input211Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C253(props: C253Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, q, answer, unit } = problem;
  const [input, setInput] = useState<Input211Type>({
    enter: '',
  });

  const { enter } = input;

  const setEnter = (value: string | number) => {
    setInput({ ...input, enter: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz253.answer' });
    if (value) {
      setInput({
        enter: value[qId].enter,
      });
    }
  };

  useEffect(() => {
    void renderGetData();
  }, []);

  useEffect(() => {
    setAllAnswers(prevAllAnswers => {
      const updatedAnswers = [...prevAllAnswers];
      updatedAnswers[qId] = input;
      return updatedAnswers;
    });
    if (enter === answer) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [answer, enter, qId]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="0.2rem"
      alignContent="start"
      marginTop="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Box display="flex" gap="1rem">
        <CustomTypo fontSize="1.25rem"> {qNum}</CustomTypo>
        <CustomTypo fontSize="1.25rem">{q}</CustomTypo>
      </Box>
      <Box display="flex" justifyContent="end" width="60vw" gap="0.5rem">
        <CustomTypo fontSize="1.25rem"> 답 : </CustomTypo>
        <Input
          value={enter}
          onChange={e => setEnter(e.target.value)}
          style={{ width: '4rem', textAlign: 'center', fontSize: '1.3em' }}
          disabled={isSolved}
        />
        <CustomTypo fontSize="1.25rem"> {unit} </CustomTypo>
      </Box>
    </Box>
  );
}
