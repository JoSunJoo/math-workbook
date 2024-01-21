/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import {
  AnswerInput,
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

export interface Input221Type {
  enter: number | string;
  answerSon: number | string;
}
interface C221Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    rSon: number;
    rMom: number;
    pass: boolean;
  };
  allAnswers: Input221Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input221Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C221(props: C221Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, sonNum, momNum, answer, rSon, rMom } = problem;
  const [input, setInput] = useState<Input221Type>({
    enter: '',
    answerSon: '',
  });

  const { enter, answerSon } = input;

  const setEnter = (value: string | number) => {
    setInput({ ...input, enter: value });
  };

  const setAnswerSon = (value: string | number) => {
    setInput({ ...input, answerSon: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz221.answer' });
    if (value) {
      setInput({
        enter: value[qId].enter,
        answerSon: value[qId].answerSon,
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
    if (enter === answer && rSon === answerSon) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [enter, answerSon, qId, answer, rSon]);

  return (
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <VisualFraction width="3rem" momNum={momNum} sonNum={sonNum} />
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <VisualFraction
          width="4rem"
          momNum={rMom}
          sonNum={
            <NumberInput
              width="4rem"
              value={answerSon}
              onChange={e => setAnswerSon(Number(e.target.value))}
              disabled={isSolved}
            />
          }
        />
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <AnswerInput
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
