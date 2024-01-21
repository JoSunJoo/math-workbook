/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box, TextField } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { Input211Type } from '../day1/C211';
interface C253Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number | string;
    momNum: number | string;
    answer: number | string;
    pass: boolean;
  };
  allAnswers: Input211Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input211Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C252(props: C253Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, sonNum, momNum, answer } = problem;

  const [input, setInput] = useState<Input211Type>({
    enter: '',
  });

  const { enter } = input;

  const setEnter = (value: string | number) => {
    setInput({ ...input, enter: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz252.answer' });
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
      gap="0.2rem"
      alignContent="start"
      margin="2rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum}</CustomTypo>
      <VisualFraction momNum={momNum} sonNum={sonNum} />
      <TextField
        value={enter}
        onChange={e => setEnter(e.target.value)}
        style={{ width: '2.5rem', textAlign: 'center', margin: '1.2rem' }}
        disabled={isSolved}
      />
    </Box>
  );
}
