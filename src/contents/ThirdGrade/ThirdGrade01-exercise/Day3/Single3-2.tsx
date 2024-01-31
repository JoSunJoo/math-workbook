import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as DataProps } from '../../Type/Type1';

const Single32 = (props: DataProps) => {
  const {
    id,
    quiz1,
    quiz2,
    toggle,
    idx,
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
      <Styled.InputWrapper3>
        <div>{quiz1}</div>
        <div>+</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper3>
            <div>=</div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
              value={inputValue[idx][0]}
            />
            <div>+</div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
            <div>=</div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 2)}
              value={inputValue[idx][2]}
            />
          </Styled.InputWrapper3>
        </div>
      </Styled.InputWrapper3>
    </Styled.SingleWrapper2>
  );
};

export default Single32;
