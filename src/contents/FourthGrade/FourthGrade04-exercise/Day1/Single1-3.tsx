import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data13QuizProps3 as Props } from '../../Type/Type4';

const Single13 = (props: Props) => {
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
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      {type === 1 ? (
        <Styled.InputWrapper1>
          <Styled.ColGapBox>
            <Styled.FractUnderLine>{quiz1}</Styled.FractUnderLine>
            <Styled.FractUnderNum>{quiz2}</Styled.FractUnderNum>
          </Styled.ColGapBox>
          <div>=</div>
          <Styled.InputBox4 onChange={e => handleInput(e.target.value, 0)} />
        </Styled.InputWrapper1>
      ) : (
        <Styled.InputWrapper1>
          <div>{quiz1}</div>
          <div>=</div>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.FractUnderLine>
            <Styled.FractUnderNum>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 1)}
              />
            </Styled.FractUnderNum>
          </Styled.ColGapBox>
        </Styled.InputWrapper1>
      )}
    </Styled.SingleWrapper2>
  );
};

export default Single13;
