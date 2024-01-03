import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type1';

const Single12 = (props: QuizProps) => {
  const {
    id,
    quiz1,
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
    <Styled.RowBox7>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper5>
        <Styled.InputWrapper>
          <div>{quiz1}</div>
          <div>=</div>
          <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
          <Styled.AngleShapeBox>
            <Styled.AngleLineLeft />
            <Styled.AngleShapeLeft />
          </Styled.AngleShapeBox>
          <Styled.InnerColBox>
            <Styled.InputWrapper3>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 1)}
              />
              <div>÷</div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 2)}
              />
              <div>=</div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 3)}
              />
            </Styled.InputWrapper3>
            <Styled.InputWrapper3>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 4)}
              />
              <div>÷</div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 5)}
              />
              <div>=</div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 6)}
              />
            </Styled.InputWrapper3>
          </Styled.InnerColBox>
        </Styled.InputWrapper>
      </Styled.SingleWrapper5>
    </Styled.RowBox7>
  );
};

export default Single12;
