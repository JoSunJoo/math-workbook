import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P333';

interface C333Props {
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

export default function C333(props: C333Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, qNum, leftItem, rightItem, answer, imgSrc } = problem;
  const [inputs, setInputs] = useState<{
    input: string | undefined;
  }>({ input: '' });
  const { input } = inputs;
  const [isCorrect, setIsCorrect] = useState(false);

  const setInput = (value: string) => {
    setInputs(prev => ({ ...prev, input: value }));
  };
  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz333.answer' });
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
        <Box display="flex" alignItems="center" gap="1rem">
          <Avatar
            src={imgSrc}
            variant="square"
            style={{
              width: '20rem',
              height: 'max-content',
              margin: '0rem 0.5rem',
            }}
          />
          <Box display="flex" alignItems="center">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} 막대의 길이는 {rightItem} 막대의
            </Typography>
            <TextUnderBar
              width="4.8rem"
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
