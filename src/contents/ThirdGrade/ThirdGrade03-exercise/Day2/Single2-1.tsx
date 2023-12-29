import Styled from '../../style';

import type { Data12QuizProps as Props } from '../../Type/Type1';

const Single21 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.DashSingleWrapper>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.RightDashBorderWrapper>
        <Styled.RowBox>
          <Styled.RightDashBorder></Styled.RightDashBorder>
          <Styled.RightDashBorder></Styled.RightDashBorder>
          <Styled.RightDashBorder></Styled.RightDashBorder>
          <Styled.RightDashBorder></Styled.RightDashBorder>
        </Styled.RowBox>
        <Styled.DashNumWrapper>
          <Styled.LetterSpacing2>{quiz1}</Styled.LetterSpacing2>
          <Styled.DashNumMid2>
            <div>x</div>
            <Styled.LetterSpacing3>{quiz2}</Styled.LetterSpacing3>
          </Styled.DashNumMid2>
          <Styled.DashBoxMidLine2 />
          <Styled.RowBox5>
            <Styled.InputBox3></Styled.InputBox3>
            <Styled.InputBox3></Styled.InputBox3>
            <Styled.InputBox3></Styled.InputBox3>
            <Styled.InputBox3></Styled.InputBox3>
          </Styled.RowBox5>
        </Styled.DashNumWrapper>
      </Styled.RightDashBorderWrapper>
    </Styled.DashSingleWrapper>
  );
};

export default Single21;
