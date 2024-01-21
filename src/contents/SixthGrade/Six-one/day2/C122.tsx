/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

interface C122Props {
  problem: {
    qId: number;
    qNum: string;
    son: number;
    mom1: number;
    num: number;
    mom2: number;
    son2: number;
    answer: number[];
    pass: boolean;
  };
  allAnswers: Input122Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input122Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export interface Input122Type {
  daughter1: string | number;
  daughter2: string | number;
  mother: string | number;
}

export default function C122(props: C122Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, son, mom1, num, mom2, son2, answer } = problem;

  const [input, setInput] = useState<Input122Type>({
    daughter1: '',
    daughter2: '',
    mother: '',
  });

  const { daughter1, daughter2, mother } = input;

  const [isCorrect, setIsCorrect] = useState(false);

  const setDaughter1 = (value: string | number) => {
    setInput({ ...input, daughter1: value });
  };

  const setDaughter2 = (value: string | number) => {
    setInput({ ...input, daughter2: value });
  };

  const setMother = (value: string | number) => {
    setInput({ ...input, mother: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz122.answer' });
    if (value) {
      setInput({
        daughter1: value[qId].daughter1,
        daughter2: value[qId].daughter2,
        mother: value[qId].mother,
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
    if (
      answer[0] === daughter1 &&
      answer[1] === daughter2 &&
      answer[2] === mother
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [answer, daughter1, daughter2, mother, qId]);

  return (
    <Box
      display="flex"
      minWidth="18rem"
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom1} sonNum={son} />
      <CustomTypo> ÷ {num} = </CustomTypo>
      <VisualFraction
        width="6rem"
        momNum={mom2}
        sonNum={
          <Box display="flex" alignItems="center">
            <NumberInput
              value={daughter1}
              onChange={e => setDaughter1(Number(e.target.value))}
              disabled={isSolved}
            />
            <CustomTypo marginLeft="0.2rem">÷ {son2}</CustomTypo>
          </Box>
        }
      />
      <CustomTypo> = </CustomTypo>
      <DivisionInput
        son={daughter2}
        mother={mother}
        onChangeMother={e => setMother(Number(e.target.value))}
        onChangeSon={e => setDaughter2(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
