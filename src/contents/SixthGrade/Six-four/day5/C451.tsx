import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import styled from '@emotion/styled';

import type { ProblemProp } from './P451';

interface C451Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
  allInputs: {
    input1: boolean | undefined;
  }[];
  setAllInputs: React.Dispatch<
    React.SetStateAction<
      {
        input1: boolean | undefined;
      }[]
    >
  >;
}

export default function C451(props: C451Props) {
  const { problem, isSolved, handleCorrectChange, setAllInputs } = props;
  const { qId, answer } = problem;

  const [inputs, setInputs] = useState<{
    input1: boolean | undefined;
  }>({
    input1: false,
  });
  const { input1 } = inputs;
  const [, setIsCorrect] = useState(false);

  const setInput1 = (value: boolean) => {
    setInputs(prev => ({ ...prev, input1: value }));
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz451.answer' });
    if (value) {
      setInputs({
        input1: value[qId].input1,
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
    if (input1 === undefined) setInput1(false);
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
    <>
      {qId !== -1 && (
        <StyledCheckbox
          disabled={isSolved}
          type="checkbox"
          checked={input1}
          onChange={e => {
            setInput1(e.target.checked);
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
