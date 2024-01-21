import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P331';

import ArrowRight from '../../assets//icon/arrowRight.svg';

interface C331Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input: string | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input: string | undefined;
      }[]
    >
  >;
}

export default function C331(props: C331Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, leftItem, rightItem, answer } = problem;

  const [inputs, setInputs] = useState<{
    input: string | undefined;
  }>({ input: '' });

  const { input } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput = (value: string) => {
    setInputs(prev => ({ ...prev, input: value }));
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz331.answer' });
    if (value) {
      setInputs({ input: value[qId].input });
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
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Box display="flex">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} : {rightItem}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginLeft="-2.5rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography variant="h5" fontWeight={600}>
              {qId % 2 === 0
                ? '비교하는 양은 기준량의'
                : '기준량은 비교하는 양의'}
            </Typography>
            <TextUnderBar
              width="4rem"
              value={input ? input : ''}
              onChange={e => setInput(e.target.value)}
              disabled={isSolved}
            />
            <Typography variant="h5" fontWeight={600}>
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
