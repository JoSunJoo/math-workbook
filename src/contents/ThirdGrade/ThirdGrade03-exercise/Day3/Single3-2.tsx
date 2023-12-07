import Styled from '../../style';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const Single32 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>{id}</Styled.IdNumBox3>
      <Styled.InputWrapper2>
        <div>{quiz1}</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ColorBox>{quiz2}</Styled.ColorBox>
            <div>× 10</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1></Styled.InputBox1>
              <div>× 10</div>
            </Styled.InputWrapper>
          </div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox4></Styled.InputBox4>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.SingleWrapper5>
  );
};

export default Single32;
