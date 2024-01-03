import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data52QuizProps2 as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
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
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.GapRowBox2 gap={1}>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <div>{quiz1}</div>
          </Styled.FractUnderLine>
          <Styled.FitBox>{quiz2}</Styled.FitBox>
        </Styled.ColGapBox>
        <div>=</div>
        <Styled.GapRowBox2 gap={0.5}>
          <Styled.InputBox3 onChange={e => handleInput(e.target.value, 0)} />
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3
                onChange={e => handleInput(e.target.value, 1)}
              />
            </Styled.FractUnderLine>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 2)} />
          </Styled.ColGapBox>
        </Styled.GapRowBox2>
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
