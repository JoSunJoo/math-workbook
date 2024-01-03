import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
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

  const handleFrac = (type: number, quiz1: number, quiz2?: number) => {
    switch (type) {
      case 1:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox8
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz1}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      case 2:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{quiz1}</div>
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz2}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      default:
        break;
    }
  };
  return (
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />

      <Styled.GapRowBox2 gap={1}>
        {type === 1 ? <div>{quiz1}</div> : <>{handleFrac(2, quiz1, quiz2)}</>}
        <div>=</div>
        {type === 1 ? (
          <>{handleFrac(1, quiz2)}</>
        ) : (
          <>
            <Styled.InputBox8 onChange={e => handleInput(e.target.value, 0)} />
          </>
        )}
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
