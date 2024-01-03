import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single53 = (props: Props) => {
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
    <Styled.MiniSingleWrapper>
      <Styled.RowBox13>
        <IdSymbol id={id} correct={correct} />
        <Styled.FitInputWrapper3>
          <Styled.ColGapBox gap={0}>
            <Styled.BottomLine>
              <Styled.RowBox4>
                ×
                <Styled.ColGapBox gap={0}>
                  <Styled.LetterSpacing>{quiz1}</Styled.LetterSpacing>
                  <Styled.LetterSpacing>{quiz2}</Styled.LetterSpacing>
                </Styled.ColGapBox>
              </Styled.RowBox4>
            </Styled.BottomLine>
            <Styled.SpacingInputBox2
              onChange={e => handleInput(e.target.value, 0)}
            />
          </Styled.ColGapBox>
        </Styled.FitInputWrapper3>
      </Styled.RowBox13>
    </Styled.MiniSingleWrapper>
  );
};

export default Single53;
