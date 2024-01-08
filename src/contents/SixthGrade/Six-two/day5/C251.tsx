/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from '../../common/correct-checker';
import { AnswerInput } from '../../common/number-box';
import { CustomTypo } from '../../common/styled-component';
import VisualFraction from '../../common/visual-fraction';

import type { Input211Type } from '../day1/C211';

import arrowRight from '../../assets/icon/arrowRight.svg';
interface C251Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  allAnswers: Input211Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input211Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C251(props: C251Props) {
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
    const value = await getKeyValue({ key: 'quiz251.answer' });
    setInput({
      enter: value[qId].enter,
    });
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
      alignContent="center"
      alignItems="center"
      margin="2rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum}</CustomTypo>
      <VisualFraction momNum={momNum} sonNum={sonNum} />
      <Box marginX="1rem">
        <img width="20rem" src={arrowRight} alt="chicks" />
      </Box>
      <AnswerInput
        width="2.5rem"
        value={enter}
        onChange={e => setEnter(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
