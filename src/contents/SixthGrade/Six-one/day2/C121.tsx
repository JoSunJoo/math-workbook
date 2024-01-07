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

interface C121Props {
  problem: {
    qId: number;
    qNum: string;
    mom: number;
    son: number;
    num: number;
    rMom: number;
    answer: number[];
    pass: boolean;
  };
  allAnswers: {
    lSon: string | number;
    rSon: string | number;
    aMom: string | number;
    aSon: string | number;
  }[];
  setAllAnswers: React.Dispatch<
    React.SetStateAction<
      {
        lSon: string | number;
        rSon: string | number;
        aMom: string | number;
        aSon: string | number;
      }[]
    >
  >;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C121(props: C121Props) {
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, mom, son, num, rMom, answer } = problem;

  const [input, setInput] = useState<{
    lSon: string | number;
    rSon: string | number;
    aMom: string | number;
    aSon: string | number;
  }>({
    lSon: '',
    rSon: '',
    aMom: '',
    aSon: '',
  });

  const { lSon, rSon, aMom, aSon } = input;

  const [isCorrect, setIsCorrect] = useState(false);

  const setLSon = (value: number | string) => {
    setInput({ ...input, lSon: value });
  };

  const setRSon = (value: number | string) => {
    setInput({ ...input, rSon: value });
  };

  const setAMom = (value: number | string) => {
    setInput({ ...input, aMom: value });
  };

  const setASon = (value: number | string) => {
    setInput({ ...input, aSon: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz121.answer' });
    if (value) {
      setInput({
        lSon: value[qId].lSon,
        rSon: value[qId].rSon,
        aSon: value[qId].aSon,
        aMom: value[qId].aMom,
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
      answer[0] === lSon &&
      answer[1] === rSon &&
      answer[2] === aSon &&
      answer[3] === aMom
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [lSon, rSon, aSon, aMom, qId, answer]);

  return (
    <Box
      display="flex"
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
      minWidth="22rem"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom} sonNum={son} />
      <CustomTypo> ÷ {num} = </CustomTypo>
      <VisualFraction
        width="6.1rem"
        momNum={rMom}
        sonNum={
          <Box display="flex" alignItems="center">
            <NumberInput
              value={lSon}
              onChange={e => setLSon(Number(e.target.value))}
              disabled={isSolved}
            />
            <CustomTypo marginLeft="0.2rem">
              ÷
              <NumberInput
                value={rSon}
                onChange={e => setRSon(Number(e.target.value))}
                disabled={isSolved}
              />
            </CustomTypo>
          </Box>
        }
      />
      <CustomTypo fontSize="20px"> = </CustomTypo>
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
