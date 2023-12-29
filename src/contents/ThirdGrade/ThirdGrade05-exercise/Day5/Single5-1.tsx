import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type5';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, sign1 } = props;
  return (
    <Styled.RowBox6>
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>{id}</Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox2>
              <Styled.InputBox1 />
              {sign1}
              <Styled.InputBox1 />
              <div>=</div>
              <Styled.InputBox1 />
            </Styled.RowBox2>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox6>
  );
};

export default Single51;
