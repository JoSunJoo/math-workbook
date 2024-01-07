/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { AnswerInput } from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import fractionBar from 'src/contents/SixthGrade/assets/icon/fraction-bar.png';

export interface Input211Type {
  enter: number | string;
}
interface C211Props {
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
export default function C211(props: C211Props) {
  //P21도 같은 컴포넌트 사용
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
    const value = await getKeyValue({ key: 'quiz211.answer' });
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
    <Box display="flex" gap="0.2rem" paddingY="1rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center">
        <CustomTypo mt="1.7rem">{momNum}</CustomTypo>
        <Box ml="0.2rem" mt="2rem" mr="1rem" position="relative">
          <img width="60rem" height="30rem" src={fractionBar} alt="icon" />
          <Box position="absolute" left="0.8rem" top="0rem">
            <CustomTypo>{sonNum}</CustomTypo>
          </Box>
        </Box>
        <VisualFraction momNum={momNum} sonNum={sonNum} />
        <CustomTypo marginX="0.4rem"> = </CustomTypo>
        <AnswerInput
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}
