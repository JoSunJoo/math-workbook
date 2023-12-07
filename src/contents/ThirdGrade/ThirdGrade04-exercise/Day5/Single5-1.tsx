import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single51 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.RowBox6>
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>{id}</Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput />
              <Styled.TextSize>답:</Styled.TextSize>
              <Styled.ShortInput />
            </Styled.RowBox>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox6>
  );
};

export default Single51;
