import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single21 = (props: Props) => {
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
    <Styled.DashSingleWrapper>
      <Styled.IdNumBox3>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox3>
      <Styled.RightDashBorderWrapper>
        <Styled.RowBox>
          <Styled.RightDashBorder />
          <Styled.RightDashBorder />
          <Styled.RightDashBorder />
          <Styled.RightDashBorder />
        </Styled.RowBox>
        <Styled.DashNumWrapper>
          <Styled.LetterSpacing2>{quiz1}</Styled.LetterSpacing2>
          <Styled.DashNumMid2>
            <div>x</div>
            <Styled.LetterSpacing3>{quiz2}</Styled.LetterSpacing3>
          </Styled.DashNumMid2>
          <Styled.DashBoxMidLine2 />
          <Styled.RowBox5>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 0)} />
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 1)} />
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 2)} />
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 3)} />
          </Styled.RowBox5>
        </Styled.DashNumWrapper>
      </Styled.RightDashBorderWrapper>
    </Styled.DashSingleWrapper>
  );
};

export default Single21;
