import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type1';

const Single53 = (props: QuizProps) => {
  const {
    id,
    quiz1,
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
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>
          <IdSymbol id={id} correct={correct} />
        </Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.ColGapBox gap={0.5}>
              <Styled.RowBox3>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput />
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 0)}
                  value={inputValue[idx][0]}
                />
              </Styled.RowBox3>
              <Styled.RowBox3>
                <Styled.TextSize>검산:</Styled.TextSize>
                <Styled.LongInput />
              </Styled.RowBox3>
            </Styled.ColGapBox>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Single53;
