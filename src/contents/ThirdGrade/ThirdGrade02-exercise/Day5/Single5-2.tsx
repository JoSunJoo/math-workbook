import Styled from '../../style';

import type { Data12QuizProps as Props } from '../../Type/Type1';

const Single52 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DashSingleWrapper>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.RightDashBorderWrapper>
        <Styled.RowBox>
          <Styled.RightDashBorder></Styled.RightDashBorder>
          <Styled.RightDashBorder></Styled.RightDashBorder>
          <Styled.RightDashBorder></Styled.RightDashBorder>
        </Styled.RowBox>
        <Styled.DashNumWrapper>
          <Styled.DashBoxUpper></Styled.DashBoxUpper>
          <Styled.LetterSpacing2>{quiz1}</Styled.LetterSpacing2>
          <Styled.DashNumMid>
            <div>x</div>
            <div>{quiz2}</div>
          </Styled.DashNumMid>
          <Styled.DashBoxMidLine />
          <Styled.RowBox5>
            <Styled.InputBox3></Styled.InputBox3>
            <Styled.InputBox3></Styled.InputBox3>
            <Styled.InputBox3></Styled.InputBox3>
          </Styled.RowBox5>
        </Styled.DashNumWrapper>
      </Styled.RightDashBorderWrapper>
    </Styled.DashSingleWrapper>
  );
};

export default Single52;
