import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data42QuizProps2 as QuizProps } from '../../Type/Type1';

const Single42 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
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
    <Styled.RowBox8>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper3>
        <Styled.InputWrapper2>
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
              />
              <div>{quiz3}</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 1)}
              />
              <div>{quiz4}</div>
            </Styled.InputWrapper>
            <div>
              <Styled.InputWrapper>
                <div>=</div>
                <Styled.InputBox1
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 2)}
                />
                <div>{quiz5} =</div>
                <Styled.InputBox1
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 3)}
                />
              </Styled.InputWrapper>
            </div>
          </div>
        </Styled.InputWrapper2>
      </Styled.SingleWrapper3>
    </Styled.RowBox8>
  );
};

export default Single42;
