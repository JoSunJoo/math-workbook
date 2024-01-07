/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

interface C123Props {
  problem: {
    qId: number;
    qNum: string;
    mom: number;
    son: number;
    aMom: number;
    aSon: number;
    nature: number;
    pass: boolean;
  };
  allAnswers: Input123Props[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input123Props[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export interface Input123Props {
  answerMom: string | number;
  answerSon: string | number;
}

export default function C123(props: C123Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, mom, son, nature, aMom, aSon } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [answer, setAnswer] = useState<{
    answerMom: string | number;
    answerSon: string | number;
  }>({
    answerMom: '',
    answerSon: '',
  });
  const { answerMom, answerSon } = answer;

  const setAnswerMom = (value: string | number) => {
    setAnswer({ ...answer, answerMom: value });
  };

  const setAnswerSon = (value: string | number) => {
    setAnswer({ ...answer, answerSon: value });
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz123.answer' });
    setAnswer({
      answerMom: value[qId].answerMom,
      answerSon: value[qId].answerSon,
    });
  };

  useEffect(() => {
    void renderGetData();
  }, []);

  useEffect(() => {
    setAllAnswers(prevAllAnswers => {
      const updatedAnswers = [...prevAllAnswers];
      updatedAnswers[qId] = answer;
      return updatedAnswers;
    });
    if (aMom === answerMom && aSon === answerSon) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [aMom, aSon, answerMom, answerSon, qId]);

  return (
    <Box
      display="flex"
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom} sonNum={son} />
      <CustomTypo> ÷ </CustomTypo>
      <CustomTypo> {nature} = </CustomTypo>
      <DivisionInput
        son={answerSon}
        mother={answerMom}
        onChangeMother={e => setAnswerMom(Number(e.target.value))}
        onChangeSon={e => setAnswerSon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
