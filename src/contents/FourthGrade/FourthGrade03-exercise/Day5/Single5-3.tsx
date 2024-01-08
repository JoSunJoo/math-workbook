import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
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
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.GapRowBox2 gap={1}>
        <Styled.GapRowBox2 gap={0.5}>
          <div>{quiz1}</div>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{quiz2}</div>
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz3}</Styled.FitBox>
          </Styled.ColGapBox>
        </Styled.GapRowBox2>
        <div>=</div>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox8
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
            />
          </Styled.FractUnderLine>
          <Styled.InputBox8
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
          />
        </Styled.ColGapBox>
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
