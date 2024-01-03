import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data41QuizProps2 as QuizProps } from '../../Type/Type4';

const Single41 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    unit,
    unit2,
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
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      <Styled.InputWrapper1>
        <div>{quiz1}</div>
        <div>=</div>
        <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
        <div>{unit}</div>
        {unit2 ? (
          <Styled.InputWrapper1>
            <div>=</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 1)} />
            <div>{unit2}</div>
          </Styled.InputWrapper1>
        ) : (
          <></>
        )}
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single41;
