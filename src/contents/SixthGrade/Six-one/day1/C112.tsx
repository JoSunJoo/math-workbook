/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

import person from 'src/contents/SixthGrade/assets/icon/1-1-1_bluehair.png';
import orange from 'src/contents/SixthGrade/assets/icon/1-1-2.png';

interface C113Props {
  problem: {
    qId: number;
    pass: boolean;
    qNum: string;
    orangeNum: number;
    peopleNum: number;
  };
  allAnswers: {
    son: string | number;
    mother: string | number;
    num1: string | number;
    num2: string | number;
  }[];
  setAllAnswers: React.Dispatch<
    React.SetStateAction<
      {
        son: string | number;
        mother: string | number;
        num1: string | number;
        num2: string | number;
      }[]
    >
  >;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C113(props: C113Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, orangeNum, peopleNum } = problem;
  const [answer, setAnswer] = useState<{
    son: string | number;
    mother: string | number;
    num1: string | number;
    num2: string | number;
  }>({
    son: '',
    mother: '',
    num1: '',
    num2: '',
  });

  const { son, mother, num1, num2 } = answer;

  const [isCorrect, setIsCorrect] = useState(true);

  const setSon = (value: number) => {
    setAnswer({ ...answer, son: value });
  };

  const setMother = (value: number) => {
    setAnswer({ ...answer, mother: value });
  };

  const setNum1 = (value: number) => {
    setAnswer({ ...answer, num1: value });
  };

  const setNum2 = (value: number) => {
    setAnswer({ ...answer, num2: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz112.answer' });
    setAnswer({
      mother: value[qId].mother,
      son: value[qId].son,
      num1: value[qId].num1,
      num2: value[qId].num2,
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
    if (
      mother === num2 &&
      son === num1 &&
      orangeNum === num1 &&
      peopleNum === num2
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [mother, son, num1, num2, qId, orangeNum, peopleNum]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="0.2rem"
        alignItems="left"
        position="relative"
      >
        {isSolved && <CorrectChecker isCorrect={isCorrect} />}
        <Box display="flex">
          <CustomTypo> {qNum} </CustomTypo>
          <Box display="flex" margin="1rem 0.5rem" alignItems="center">
            <img width="60rem" src={orange} alt="orange" />
            <CustomTypo marginRight="0.5rem"> {orangeNum}개</CustomTypo>
            <img width="60rem" src={person} alt="icon" />
            <CustomTypo marginX="0.5rem"> {peopleNum}명 </CustomTypo>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          margin="-1rem 1rem 1rem 2rem"
          gap="0.3rem"
        >
          <NumberInput
            value={num1}
            onChange={e => setNum1(Number(e.target.value))}
            disabled={isSolved}
          />
          ÷
          <NumberInput
            value={num2}
            onChange={e => setNum2(Number(e.target.value))}
            disabled={isSolved}
          />
          =
          <DivisionInput
            mother={mother}
            son={son}
            onChangeMother={e => setMother(Number(e.target.value))}
            onChangeSon={e => setSon(Number(e.target.value))}
            disabled={isSolved}
          />
        </Box>
      </Box>

      <Box display="flex"></Box>
    </>
  );
}
