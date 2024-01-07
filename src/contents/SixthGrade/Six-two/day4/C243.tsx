/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

export interface Input243Props {
  aMom: number | string;
  aSon: number | string;
}
interface C243Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  allAnswers: Input243Props[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input243Props[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C243(props: C243Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, sonNum, momNum, answer } = problem;
  const [input, setInput] = useState<Input243Props>({
    aMom: '',
    aSon: '',
  });

  const { aMom, aSon } = input;

  const setAMom = (value: string | number) => {
    setInput({ ...input, aMom: value });
  };

  const setASon = (value: string | number) => {
    setInput({ ...input, aSon: value });
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz243.answer' });
    setInput({
      aMom: value[qId].aMom,
      aSon: value[qId].aSon,
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
    if (aMom === momNum && aSon === sonNum) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [aMom, aSon, momNum, qId, sonNum]);

  return (
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <CustomTypo>{answer}</CustomTypo>
        <CustomTypo marginRight="1rem"> = </CustomTypo>
        <DivisionInput
          mother={aMom}
          son={aSon}
          onChangeMother={e => setAMom(Number(e.target.value))}
          onChangeSon={e => setASon(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
