import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as QuizProps } from '../../Type/Type2';

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
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox3>
      <Styled.InputWrapper2>
        <div>{quiz1}</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ColorBox>{quiz2}</Styled.ColorBox>
            <div>× 10</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
              />
              <div>× 10</div>
            </Styled.InputWrapper>
          </div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox4
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 1)}
              />
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.SingleWrapper5>
  );
};

export default Single32;
