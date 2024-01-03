import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data32QuizProps2 as QuizProps } from '../../Type/Type3';

const Single32 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox18>
      <IdSymbol id={id} correct={correct} />
      <Styled.InputWrapper1>
        <Styled.GapRowBox2 gap={0.3}>
          <div>{quiz1}</div>
          <div>÷</div>
          <div>{quiz2}</div>
          <div>=</div>
        </Styled.GapRowBox2>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox8 onChange={e => handleInput(e.target.value, 0)} />
          </Styled.FractUnderLine>
          <Styled.InputBox8 onChange={e => handleInput(e.target.value, 1)} />
        </Styled.ColGapBox>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Single32;
