import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type2';

const Single51 = (props: QuizProps) => {
  const {
    id,
    type,
    quiz1,
    unit1,
    unit2,
    unit3,
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

  const handleType = (type: number) => {
    switch (type) {
      case 1:
        return (
          <Styled.TextBoxWrapper>
            <Styled.BetweenBox2>
              <Styled.BasicRowBox>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput2 />
              </Styled.BasicRowBox>
              <Styled.MinWidth1>
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <Styled.TextSize2>{unit1}</Styled.TextSize2>
              </Styled.MinWidth1>
            </Styled.BetweenBox2>
          </Styled.TextBoxWrapper>
        );

      case 2:
        return (
          <Styled.TextBoxWrapper>
            <Styled.BetweenBox2>
              <Styled.BasicRowBox>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput2 />
              </Styled.BasicRowBox>
              <Styled.RowBox>
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <Styled.TextSize2>{unit1}</Styled.TextSize2>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 1)}
                />
                <Styled.TextSize2>{unit2}</Styled.TextSize2>
              </Styled.RowBox>
            </Styled.BetweenBox2>
          </Styled.TextBoxWrapper>
        );

      case 3:
        return (
          <Styled.TextBoxWrapper>
            <Styled.BetweenBox2>
              <Styled.BasicRowBox>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput2 />
              </Styled.BasicRowBox>
              <Styled.GapRowBox>
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <Styled.TextSize2>{unit1}</Styled.TextSize2>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 1)}
                />
                <Styled.TextSize2>{unit2}</Styled.TextSize2>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 2)}
                />
                <Styled.TextSize2>{unit3}</Styled.TextSize2>
              </Styled.GapRowBox>
            </Styled.BetweenBox2>
          </Styled.TextBoxWrapper>
        );

      case 4:
        return (
          <Styled.TextBoxWrapper>
            <Styled.BetweenBox2>
              <Styled.BasicRowBox>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput2 />
              </Styled.BasicRowBox>
              <Styled.GapRowBox>
                <Styled.TextSize2>{unit1}: </Styled.TextSize2>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <Styled.TextSize2>{unit2}: </Styled.TextSize2>
                <Styled.ShortInput2
                  onChange={e => handleInput(e.target.value, 1)}
                />
              </Styled.GapRowBox>
            </Styled.BetweenBox2>
          </Styled.TextBoxWrapper>
        );

      default:
        break;
    }
  };

  return (
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper5>
        <Styled.TextBoxWrapper>
          {/* 문제 부분 */}
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          {/* 답 부분 */}
          {handleType(type)}
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper5>
    </Styled.RowBox5>
  );
};

export default Single51;
