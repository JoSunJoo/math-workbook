import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as QuizProps } from '../../Type/Type2';

const Single12 = (props: QuizProps) => {
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
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper6>
        <Styled.InputWrapper3>
          <Styled.ColGapBox>
            <Styled.InputWrapper3>
              <div>{quiz1}</div>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.InputWrapper3>
            <Styled.RowBox3>
              <Styled.SetCenter>
                <Styled.InputWrapper3>
                  <div>{quiz2}</div>
                  <Styled.InputBox1
                    disabled={correct === null ? false : true}
                    onChange={e => handleInput(e.target.value, 1)}
                  />
                  <div>=</div>
                  <Styled.InputBox1
                    disabled={correct === null ? false : true}
                    onChange={e => handleInput(e.target.value, 2)}
                  />
                </Styled.InputWrapper3>
              </Styled.SetCenter>
            </Styled.RowBox3>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper6>
    </Styled.RowBox13>
  );
};

export default Single12;
