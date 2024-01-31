import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type2';

const Single22 = (props: QuizProps) => {
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
      <Styled.SingleWrapper5>
        <Styled.InputWrapper2>
          <div>{quiz1}</div>
          <div>
            <Styled.InputWrapper>
              <div>= (</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
                value={inputValue[idx][0]}
              />
              <div>× {quiz2} ) + (</div>
              <Styled.InputBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 1)}
                value={inputValue[idx][1]}
              />
              <div>× {quiz3} )</div>
            </Styled.InputWrapper>
            <div>
              <Styled.InputWrapper>
                <div>=</div>
                <Styled.InputBox1
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 2)}
                  value={inputValue[idx][2]}
                />
              </Styled.InputWrapper>
            </div>
          </div>
        </Styled.InputWrapper2>
      </Styled.SingleWrapper5>
    </Styled.RowBox13>
  );
};

export default Single22;
