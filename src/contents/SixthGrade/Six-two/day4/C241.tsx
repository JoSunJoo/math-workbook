/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

export interface Input241Props {
  aMom: number | string;
  aSon: number | string;
  aNature: number | string;
}
interface C241Props {
  problem: {
    qId: number;
    qNum: string;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
    nature?: number;
  };
  allAnswers: Input241Props[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input241Props[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C241(props: C241Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, sonNum, momNum, answer, nature } = problem;
  const [input, setInput] = useState<Input241Props>({
    aMom: '',
    aSon: '',
    aNature: '',
  });

  const { aMom, aSon, aNature } = input;

  const setAMom = (value: string | number) => {
    setInput({ ...input, aMom: value });
  };

  const setASon = (value: string | number) => {
    setInput({ ...input, aSon: value });
  };

  const setANature = (value: string | number) => {
    setInput({ ...input, aNature: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz241.answer' });
    if (value) {
      setInput({
        aMom: value[qId].aMom,
        aSon: value[qId].aSon,
        aNature: value[qId].aNature,
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
    if (nature) {
      if (aMom === momNum && aSon === sonNum && aNature === nature) {
        setIsCorrect(true);
        handleCorrectChange(qId, true);
      } else {
        setIsCorrect(false);
        handleCorrectChange(qId, false);
      }
    } else {
      if (aMom === momNum && aSon === sonNum) {
        setIsCorrect(true);
        handleCorrectChange(qId, true);
      } else {
        setIsCorrect(false);
        handleCorrectChange(qId, false);
      }
    }
  }, [aMom, aSon, aNature, qId, momNum, sonNum, nature]);

  return (
    <Box
      display="flex"
      gap="0.2rem"
      margin="2rem"
      position="relative"
      alignItems="center"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginX="0.3rem"> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <CustomTypo>{answer}</CustomTypo>
        <CustomTypo marginX="0.3rem"> = </CustomTypo>
        {nature && (
          <Box marginRight="0.3rem">
            <NumberInput
              value={aNature}
              onChange={e => setANature(Number(e.target.value))}
              disabled={isSolved}
            />
          </Box>
        )}
        <DivisionInput
          width="3rem"
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
