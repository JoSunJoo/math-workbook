/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';
import { wrap } from 'module';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  BigDivisionInput,
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from '../../common/visual-fraction';

export interface Input151Type {
  equationSonValue: string | number;
  equationMomValue: string | number;
  equationNatureValue: string | number;
  equationDivValue: string | number;
  answerMomValue: string | number;
  answerSonValue: string | number;
  qStringEnd?: string;
  qStringNum?: number[];
}

interface C151Props {
  problem: {
    qId: number;
    qNum: string;
    qString: string;
    equationNature?: number | string;
    equationMom: number;
    equationSon: number;
    equationDiv: number;
    answerMom: number;
    answerSon: number;
    pass: boolean;
    qStringEnd?: string;
    qStringNum?: number[];
  };
  allAnswers: Input151Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input151Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C151(props: C151Props) {
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
    qStringEnd,
    qStringNum,
  } = problem;
  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<Input151Type>({
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
    const value = await getKeyValue({ key: 'quiz151.answer' });
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
      equationMom === equationMomValue &&
      equationSon === equationSonValue &&
      equationDiv === equationDivValue &&
      answerMom === answerMomValue &&
      answerSon === answerSonValue
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [
    equationMomValue,
    equationSonValue,
    equationDivValue,
    answerMomValue,
    answerSonValue,
    qId,
    equationMom,
    equationSon,
    equationDiv,
    answerMom,
    answerSon,
  ]);

  return (
    <Box width="90%" gap="0.2rem" marginBottom="1rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo>{qNum}</CustomTypo>
      <Box display="flex" flexWrap="wrap" alignItems="center">
        <CustomTypo marginX="0.5rem" fontSize="1.25rem" whiteSpace="pre-line">
          {qString}
        </CustomTypo>
        {qStringNum && (
          <>
            <VisualFraction
              fontSize="1.25rem"
              natureNum={qStringNum[0]}
              momNum={qStringNum[1]}
              sonNum={qStringNum[2]}
            />
            <CustomTypo
              marginX="0.5rem"
              fontSize="1.25rem"
              whiteSpace="pre-line"
            >
              이 되었습니다.
            </CustomTypo>
          </>
        )}
        <CustomTypo marginX="0.5rem" fontSize="1.25rem" paddingBottom="1rem">
          {qStringEnd}
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
          {equationNature ? (
            <BigDivisionInput
              num={equationNatureValue}
              mother={equationMomValue}
              son={equationSonValue}
              onChangeNum={e => setEquationNatureValue(Number(e.target.value))}
              onChangeMother={e => setEquationMomValue(Number(e.target.value))}
              onChangeSon={e => setEquationSonValue(Number(e.target.value))}
              disabled={isSolved}
            />
          ) : (
            <DivisionInput
              mother={equationMomValue}
              son={equationSonValue}
              onChangeMother={e => setEquationMomValue(Number(e.target.value))}
              onChangeSon={e => setEquationSonValue(Number(e.target.value))}
              disabled={isSolved}
            />
          )}
          <CustomTypo marginX="1rem">÷</CustomTypo>
          <NumberInput
            width="2.5rem"
            value={equationDivValue}
            onChange={e => setEquationDivValue(Number(e.target.value))}
            disabled={isSolved}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <CustomTypo paddingX="1rem">답: </CustomTypo>
          <DivisionInput
            mother={answerMomValue}
            son={answerSonValue}
            onChangeMother={e => setAnswerMomValue(Number(e.target.value))}
            onChangeSon={e => setAnswerSonValue(Number(e.target.value))}
            disabled={isSolved}
          />
        </Box>
      </Box>
    </Box>
  );
}
