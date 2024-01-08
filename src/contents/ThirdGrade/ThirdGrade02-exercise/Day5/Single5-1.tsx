import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single51 = (props: Props) => {
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
    <Styled.SingleWrapper>
      <Styled.IdNumBox2>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox2>
      <Styled.RightDashBorderWrapper>
        <Styled.RowBox>
          <Styled.RightDashBorder />
          <Styled.RightDashBorder />
          <Styled.RightDashBorder />
        </Styled.RowBox>
        <Styled.DashNumWrapper>
          <Styled.LetterSpacing2>{quiz1}</Styled.LetterSpacing2>
          <Styled.DashNumMid>
            <div>x</div>
            <div>{quiz2}</div>
          </Styled.DashNumMid>
          <Styled.DashBoxMidLine />
          <Styled.RowBox5>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
            />
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
            />
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 2)}
            />
          </Styled.RowBox5>
        </Styled.DashNumWrapper>
      </Styled.RightDashBorderWrapper>
    </Styled.SingleWrapper>
  );
};

export default Single51;
