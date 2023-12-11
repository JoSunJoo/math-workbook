import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type4';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, unit } = props;
  return (
    <Styled.RowBox2>
      <Styled.SingleWrapper1>
        <Styled.IdNumBox>{id}</Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput />
              <Styled.RowBox>
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput />
                <Styled.TextSize>{unit}</Styled.TextSize>
              </Styled.RowBox>
            </Styled.RowBox>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper1>
    </Styled.RowBox2>
  );
};

export default Single51;
