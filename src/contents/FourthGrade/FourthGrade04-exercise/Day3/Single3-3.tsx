import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data31QuizProps2 as Props } from '../../Type/Type4';

const Single33 = (props: Props) => {
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
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      <Styled.InputWrapper1>
        <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
        <div> × </div>
        <div>{quiz1}</div>
        <div>=</div>
        <div>{quiz2}</div>
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single33;
