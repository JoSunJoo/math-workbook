import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type2';

const Single32 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
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
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper6>
        <Styled.InputWrapper>
          {quiz1}
          <Styled.AngleShapeBox>
            <Styled.AngleLineLeft />
            <Styled.AngleShapeLeft />
          </Styled.AngleShapeBox>
          <Styled.InnerColBox>
            <Styled.InputWrapper3>
              {quiz2} =
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.InputWrapper3>
            <Styled.InputWrapper3>
              {quiz3} =
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 1)}
              />
            </Styled.InputWrapper3>
          </Styled.InnerColBox>
          <Styled.AngleShapeBox>
            <Styled.AngleLineRight />
            <Styled.AngleShapeRight />
          </Styled.AngleShapeBox>
          <Styled.InputBox1 onChange={e => handleInput(e.target.value, 2)} />
        </Styled.InputWrapper>
      </Styled.SingleWrapper6>
    </Styled.RowBox13>
  );
};

export default Single32;
