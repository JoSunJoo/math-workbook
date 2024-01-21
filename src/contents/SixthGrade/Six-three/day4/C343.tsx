import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { ProblemProp } from './P343';

import ArrowRightRed from '../../assets/icon/arrowRightRed.png';
import BlueBig from '../../assets/image/P343/blueBig.png';
import BlueSmall from '../../assets/image/P343/blueSmall.png';
import OrangeBig from '../../assets/image/P343/orangeBig.png';
import OrangeSmall from '../../assets/image/P343/orangeSmall.png';

interface C343Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C343(props: C343Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, isFraction, leftItem, rightItem, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<string | undefined>(undefined);
  useEffect(() => {
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
        <Box display="flex" flexDirection="column">
          <Box display="flex" gap="1rem">
            <Box position="relative" width="6rem" height="8.2rem">
              <Avatar
                src={BlueBig}
                variant="square"
                style={{
                  width: '6rem',
                  height: '8.2rem',
                  position: 'absolute',
                }}
              />
              <Box
                position="absolute"
                width="6rem"
                height="8.2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="1.3rem"
              >
                <Typography variant="h5" fontWeight={600}>
                  {isFraction ? (
                    <VisualFraction sonNum={leftItem[0]} momNum={leftItem[1]} />
                  ) : (
                    leftItem
                  )}
                </Typography>
              </Box>
            </Box>
            <Box position="relative" width="6rem" height="8.2rem">
              <Avatar
                src={OrangeBig}
                variant="square"
                style={{
                  width: '6rem',
                  height: '8.2rem',
                  position: 'absolute',
                }}
              />
              <Box
                position="absolute"
                width="6rem"
                height="8.2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="1.3rem"
              >
                <Typography variant="h5" fontWeight={600}>
                  {isFraction ? (
                    <VisualFraction
                      sonNum={rightItem[0]}
                      momNum={rightItem[1]}
                    />
                  ) : (
                    rightItem
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" ml="-1.5rem">
            <Avatar
              src={ArrowRightRed}
              variant="square"
              style={{
                width: '2rem',
                height: 'max-content',
                marginTop: '2.4rem',
                marginRight: '-1rem',
                backgroundColor: '#fff',
                border: '5px solid white',
              }}
            />
            <Typography
              variant="h5"
              fontWeight={600}
              padding="2rem 1.2rem"
              mt="3rem"
              border="1px solid gray"
              borderRadius="1rem"
              display="flex"
              alignItems="center"
              gap="0.2rem"
            >
              <Avatar
                src={BlueSmall}
                variant="square"
                style={{
                  width: '1rem',
                  height: 'max-content',
                }}
              />
              는&nbsp;
              <Avatar
                src={OrangeSmall}
                variant="square"
                style={{
                  width: '1rem',
                  height: 'max-content',
                }}
              />
              의
              <TextUnderBar
                width="4.5rem"
                value={input ? input : ''}
                onChange={e => setInput(e.target.value)}
                disabled={isSolved}
              />
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
