import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data33QuizProps2 as QuizProps } from '../../Type/Type3';

const Single33 = (props: QuizProps) => {
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
    <Styled.RowBox18>
      <IdSymbol id={id} correct={correct} />
      <Styled.InputWrapper1>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <div>{quiz1}</div>
          </Styled.FractUnderLine>
          <Styled.FitBox>{quiz2}</Styled.FitBox>
        </Styled.ColGapBox>
        <Styled.GapRowBox2 gap={0.5}>
          <div>=</div>
          <Styled.InputBox8
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
          <div>÷</div>
          <Styled.InputBox8
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[idx][1]}
          />
        </Styled.GapRowBox2>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Single33;
