import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P353';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C353Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    firstMom: number | undefined;
    firstSon: number | undefined;
    secondMom: number | undefined;
    secondSon: number | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        firstMom: number | undefined;
        firstSon: number | undefined;
        secondMom: number | undefined;
        secondSon: number | undefined;
      }[]
    >
  >;
}

export default function C353(props: C353Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, imgSrc, candyNum, answer } = problem;
  const [inputs, setInputs] = useState<{
    firstMom: number | undefined;
    firstSon: number | undefined;
    secondMom: number | undefined;
    secondSon: number | undefined;
  }>({
    firstMom: undefined,
    firstSon: undefined,
    secondMom: undefined,
    secondSon: undefined,
  });
  const { firstMom, firstSon, secondMom, secondSon } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setFirstMom = (value: number) => {
    setInputs(prev => ({ ...prev, firstMom: value }));
  };
  const setFirstSon = (value: number) => {
    setInputs(prev => ({ ...prev, firstSon: value }));
  };
  const setSecondMom = (value: number) => {
    setInputs(prev => ({ ...prev, secondMom: value }));
  };
  const setSecondSon = (value: number) => {
    setInputs(prev => ({ ...prev, secondSon: value }));
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz353.answer' });
    if (value) {
      setInputs({
        firstMom: value[qId].firstMom,
        firstSon: value[qId].firstSon,
        secondMom: value[qId].secondMom,
        secondSon: value[qId].secondSon,
      });
    }
  };

  useEffect(() => {
    void renderGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllInputs(prev => {
      const updatedInputs = [...prev];
      updatedInputs[qId] = inputs;
      return updatedInputs;
    });
    if (
      answer.firstMom === firstMom &&
      answer.firstSon === firstSon &&
      answer.secondMom === secondMom &&
      answer.secondSon === secondSon
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, firstMom, firstSon, secondMom, secondSon]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box>
          {qId % 2 === 0 ? (
            <Typography variant="h5" fontWeight={600} marginBottom="1rem">
              주머니에 사탕이 {candyNum}개씩 들어 있습니다.
            </Typography>
          ) : (
            <Typography variant="h5" fontWeight={600} marginBottom="1rem">
              주머니에 사탕을 {candyNum}개씩 나누어 담았습니다.
            </Typography>
          )}

          <Box display="flex" gap="1rem" mb="2rem">
            <Avatar
              src={imgSrc}
              variant="square"
              style={{
                width: '12rem',
                height: 'max-content',
                marginRight: '1rem',
              }}
            />
            <Box display="flex" flexDirection="column" gap="1rem">
              <Box display="flex" gap="0.3rem" alignItems="center">
                <Typography variant="h6" fontWeight={600}>
                  빨간색 주머니의 수와 파란색 주머니의 수의 비
                </Typography>
                <Avatar
                  src={ArrowRight}
                  variant="square"
                  style={{
                    width: '1.5rem',
                    height: 'max-content',
                    margin: '0rem 0.5rem',
                  }}
                />
                <NumberInput
                  value={Number(firstMom)}
                  onChange={e => {
                    setFirstMom(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
                :
                <NumberInput
                  value={Number(firstSon)}
                  onChange={e => {
                    setFirstSon(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              </Box>
              <Box display="flex" gap="0.3rem" alignItems="center">
                <Typography variant="h6" fontWeight={600}>
                  빨간색 사탕의 수와 파란색 사탕의 수의 비
                </Typography>
                <Avatar
                  src={ArrowRight}
                  variant="square"
                  style={{
                    width: '1.5rem',
                    height: 'max-content',
                    margin: '0rem 0.5rem',
                  }}
                />
                <NumberInput
                  value={Number(secondMom)}
                  onChange={e => {
                    setSecondMom(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
                :
                <NumberInput
                  value={Number(secondSon)}
                  onChange={e => {
                    setSecondSon(Number(e.target.value));
                  }}
                  disabled={isSolved}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
