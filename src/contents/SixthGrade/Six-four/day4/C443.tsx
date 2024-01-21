import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P443';

interface C443Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C443(props: C443Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (answer === input1) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1]);

  return (
    <Box display="flex">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography
            variant="h5"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            <Box
              bgcolor={numList[0] === 'blank' ? 'white' : '#fde3e6'}
              width="3rem"
              height="3rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={numList[0] === 'blank' ? 'none' : '1px solid black'}
              borderRadius="0.5rem"
            >
              {numList[0] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                  width="3rem"
                  bgColor="#fde3e6"
                  disabled={isSolved}
                />
              ) : (
                numList[0]
              )}
            </Box>
            {':'}
            <Box
              bgcolor={numList[1] === 'blank' ? 'white' : '#d9ecf6'}
              width="3rem"
              height="3rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={numList[1] === 'blank' ? 'none' : '1px solid black'}
              borderRadius="0.5rem"
            >
              {numList[1] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                  width="3rem"
                  bgColor="#d9ecf6"
                  disabled={isSolved}
                />
              ) : (
                numList[1]
              )}
            </Box>
            {'='}
            <Box
              bgcolor={numList[2] === 'blank' ? 'white' : '#fde3e6'}
              width="3rem"
              height="3rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={numList[2] === 'blank' ? 'none' : '1px solid black'}
              borderRadius="0.5rem"
            >
              {numList[2] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                  width="3rem"
                  bgColor="#fde3e6"
                  disabled={isSolved}
                />
              ) : (
                numList[2]
              )}
            </Box>
            {':'}
            <Box
              bgcolor={numList[3] === 'blank' ? 'white' : '#d9ecf6'}
              width="3rem"
              height="3rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={numList[3] === 'blank' ? 'none' : '1px solid black'}
              borderRadius="0.5rem"
            >
              {numList[3] === 'blank' ? (
                <NumberInput
                  value={input1}
                  onChange={e => setInput1(Number(e.target.value))}
                  width="3rem"
                  bgColor="#d9ecf6"
                  disabled={isSolved}
                />
              ) : (
                numList[3]
              )}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
