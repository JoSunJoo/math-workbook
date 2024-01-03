import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data32QuizProps2 as Props } from '../../Type/Type4';

const Single31 = (props: Props) => {
  const {
    id,
    type,
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
    <Styled.MarginBottomBox3>
      <Styled.SingleWrapper2>
        <IdSymbol id={id} correct={correct} />
        {type === 1 ? (
          <Styled.InputWrapper1>
            <div>{quiz1}</div>
            <div> × </div>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 0)} />
            <div>=</div>
            <div>{quiz2}</div>
          </Styled.InputWrapper1>
        ) : (
          <Styled.InputWrapper1>
            <div>{quiz1}</div>
            <div> × </div>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 0)} />
            <div>{'<'} </div>
            <div>{quiz2}</div>
          </Styled.InputWrapper1>
        )}
      </Styled.SingleWrapper2>
    </Styled.MarginBottomBox3>
  );
};

export default Single31;
