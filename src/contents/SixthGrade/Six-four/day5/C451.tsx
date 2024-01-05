import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import type { ProblemProp } from './P451';

interface C451Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C451(props: C451Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, answer } = problem;

  const [, setIsCorrect] = useState(false);

  const [input, setInput] = useState(false);

  useEffect(() => {
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId, answer, handleCorrectChange, input]);

  return (
    <>
      {qId !== -1 && (
        <StyledCheckbox
          disabled={isSolved ? true : false}
          type="checkbox"
          onChange={e => {
            setInput(e.target.checked);
          }}
        ></StyledCheckbox>
      )}
    </>
  );
}

const StyledCheckbox = styled.input`
  width: 2rem;
  height: 2rem;
`;
