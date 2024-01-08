import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type5';

const Single51 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    sign1,
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
    <Styled.RowBox6>
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>
          <IdSymbol id={id} correct={correct} />
        </Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox2>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
              />
              {sign1}
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 1)}
              />
              <div>=</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 2)}
              />
            </Styled.RowBox2>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox6>
  );
};

export default Single51;
