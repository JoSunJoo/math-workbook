import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single41 = (props: Props) => {
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
          <Styled.DashBoxUpper
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
          <Styled.LetterSpacing2>{quiz1}</Styled.LetterSpacing2>
          <Styled.DashNumMid2>
            <div>x</div>
            <Styled.LetterSpacing3>{quiz2}</Styled.LetterSpacing3>
          </Styled.DashNumMid2>
          <Styled.DashBoxMidLine2 />
          <Styled.RowBox52>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 2)}
              value={inputValue[idx][2]}
            />
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 3)}
              value={inputValue[idx][3]}
            />
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 4)}
              value={inputValue[idx][4]}
            />
          </Styled.RowBox52>
        </Styled.DashNumWrapper>
      </Styled.RightDashBorderWrapper>
    </Styled.DashSingleWrapper>
  );
};

export default Single41;
