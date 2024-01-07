/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

// C133 공통사용

export interface Input131Type {
  aMom: string | number;
  aSon: string | number;
}

interface C131Props {
  problem: {
    qId: number;
    qNum: string;
    lMom?: number;
    lSon: number;
    rMom?: number;
    rSon: number;
    cMom: number;
    cSon: number;
    pass: boolean;
  };
  allAnswers: Input131Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input131Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C131(props: C131Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, lMom, lSon, rMom, rSon, cMom, cSon } = problem;

  const [input, setInput] = useState<{
    aMom: string | number;
    aSon: string | number;
  }>({
    aMom: '',
    aSon: '',
  });

  const { aMom, aSon } = input;

  const [isCorrect, setIsCorrect] = useState(false);

  const setAMom = (value: number | string) => {
    setInput({ ...input, aMom: value });
  };

  const setASon = (value: number | string) => {
    setInput({ ...input, aSon: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz131.answer' });
    setInput({
      aSon: value[qId].aSon,
      aMom: value[qId].aMom,
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
    if (aMom === cMom && aSon === cSon) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [aMom, aSon, cMom, cSon, qId]);

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
      {lMom === undefined ? (
        <CustomTypo>{lSon}</CustomTypo>
      ) : (
        <VisualFraction momNum={lMom} sonNum={lSon} />
      )}
      <CustomTypo> ÷ </CustomTypo>
      {rMom === undefined ? (
        <CustomTypo>{rSon}</CustomTypo>
      ) : (
        <VisualFraction momNum={rMom} sonNum={rSon} />
      )}
      <CustomTypo> = </CustomTypo>
      <DivisionInput
        son={aSon}
        mother={aMom}
        onChangeMother={e => setAMom(Number(e.target.value))}
        onChangeSon={e => setASon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
