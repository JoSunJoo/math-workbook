import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type4';

const Single51 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    unit,
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
    <Styled.RowBox2>
      <Styled.RowBox13>
        <IdSymbol id={id} correct={correct} />
        <Styled.SingleWrapper3>
          <Styled.TextBoxWrapper>
            <Styled.TextBox>{quiz1}</Styled.TextBox>
            <Styled.TextBoxWrapper>
              <Styled.RowBox>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput />
                <Styled.RowBox>
                  <Styled.TextSize>답:</Styled.TextSize>
                  <Styled.MiddleInput2
                    disabled={correct === null ? false : true}
                    onChange={e => handleInput(e.target.value, 0)}
                  />
                  <Styled.TextSize>{unit}</Styled.TextSize>
                </Styled.RowBox>
              </Styled.RowBox>
            </Styled.TextBoxWrapper>
          </Styled.TextBoxWrapper>
        </Styled.SingleWrapper3>
      </Styled.RowBox13>
    </Styled.RowBox2>
  );
};

export default Single51;
