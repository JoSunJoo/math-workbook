import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

const Single53 = (props: QuizProps) => {
  const { id, quiz1, unit } = props;
  return (
    <Styled.RowBox2>
      <div>{id}</div>
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox3>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput></Styled.LongInput>
              <Styled.TextSize>답:</Styled.TextSize>
              <Styled.ShortInput></Styled.ShortInput>
              <Styled.TextSize>{unit}</Styled.TextSize>
            </Styled.RowBox3>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Single53;
