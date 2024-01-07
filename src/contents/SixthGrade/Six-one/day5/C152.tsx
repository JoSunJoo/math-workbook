/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  BigDivisionInput,
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

export interface Input152Type {
  equationSonValue: string | number;
  equationMomValue: string | number;
  equationNatureValue: string | number;
  equationDivValue: string | number;
  answerMomValue: string | number;
  answerSonValue: string | number;
}

interface C152Props {
  problem: {
    qId: number;
    qNum: string;
    qString: string;
    equationNature?: number | string;
    equationMom?: number;
    equationSon: number;
    equationDiv: number;
    answerMom: number;
    answerSon: number;
    unit: string;
    pass: boolean;
  };
  allAnswers: Input152Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input152Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C152(props: C152Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const {
    qId,
    qNum,
    qString,
    equationNature,
    equationMom,
    equationSon,
    equationDiv,
    answerMom,
    answerSon,
    unit,
  } = problem;
  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<Input152Type>({
    equationSonValue: '',
    equationMomValue: '',
    equationNatureValue: '',
    equationDivValue: '',
    answerMomValue: '',
    answerSonValue: '',
  });

  const {
    equationSonValue,
    equationMomValue,
    equationNatureValue,
    equationDivValue,
    answerMomValue,
    answerSonValue,
  } = input;

  const setEquationSonValue = (value: string | number) => {
    setInput({ ...input, equationSonValue: value });
  };

  const setEquationMomValue = (value: string | number) => {
    setInput({ ...input, equationMomValue: value });
  };

  const setEquationNatureValue = (value: string | number) => {
    setInput({ ...input, equationNatureValue: value });
  };

  const setEquationDivValue = (value: string | number) => {
    setInput({ ...input, equationDivValue: value });
  };

  const setAnswerMomValue = (value: string | number) => {
    setInput({ ...input, answerMomValue: value });
  };

  const setAnswerSonValue = (value: string | number) => {
    setInput({ ...input, answerSonValue: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz152.answer' });
    if (value) {
      setInput({
        equationSonValue: value[qId].equationSonValue,
        equationMomValue: value[qId].equationMomValue,
        equationNatureValue: value[qId].equationNatureValue,
        equationDivValue: value[qId].equationDivValue,
        answerMomValue: value[qId].answerMomValue,
        answerSonValue: value[qId].answerSonValue,
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
      answerMom === answerMomValue &&
      answerSon === answerSonValue &&
      equationSon === equationSonValue &&
      equationDiv === equationDivValue
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [
    answerMomValue,
    answerSonValue,
    equationSonValue,
    equationDivValue,
    qId,
    answerMom,
    answerSon,
    equationSon,
    equationDiv,
  ]);

  const renderInputComponent = () => {
    if (equationNature) {
      return (
        <BigDivisionInput
          num={equationNatureValue}
          mother={equationMomValue}
          son={equationSonValue}
          onChangeNum={e => setEquationNatureValue(Number(e.target.value))}
          onChangeMother={e => setEquationMomValue(Number(e.target.value))}
          onChangeSon={e => setEquationSonValue(Number(e.target.value))}
          disabled={isSolved}
        />
      );
    } else if (equationMom) {
      return (
        <DivisionInput
          mother={equationMomValue}
          son={equationSonValue}
          onChangeMother={e => setEquationMomValue(Number(e.target.value))}
          onChangeSon={e => setEquationSonValue(Number(e.target.value))}
          disabled={isSolved}
        />
      );
    }
    return (
      <NumberInput
        value={equationSonValue}
        onChange={e => setEquationSonValue(Number(e.target.value))}
      />
    );
  };

  return (
    <Box
      minWidth="30rem"
      width="100%"
      alignItems="left"
      gap="0.2rem"
      marginBottom="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Box>
        <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
        <CustomTypo fontSize="1.25rem" paddingBottom="1rem">
          {qString}
        </CustomTypo>
      </Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignItems="center">
          <CustomTypo paddingX="1rem">식: </CustomTypo>
          {renderInputComponent()}
          <CustomTypo marginX="1rem">÷</CustomTypo>
          <NumberInput
            width="2.5rem"
            value={equationDivValue}
            onChange={e => setEquationDivValue(Number(e.target.value))}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <CustomTypo paddingX="1rem">답: </CustomTypo>
          <DivisionInput
            mother={answerMomValue}
            son={answerSonValue}
            onChangeMother={e => setAnswerMomValue(Number(e.target.value))}
            onChangeSon={e => setAnswerSonValue(Number(e.target.value))}
          />
          <CustomTypo paddingX="1rem">{unit}</CustomTypo>
        </Box>
      </Box>
    </Box>
  );
}
