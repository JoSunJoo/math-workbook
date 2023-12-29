import Styled from '../../style';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const Single12 = (props: DataProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper>
      <Styled.IdNumBox5>{id}</Styled.IdNumBox5>
      <Styled.FitInputWrapper2>
        <div>{quiz1}</div>
        <div>+</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.InputBox1></Styled.InputBox1>
            <div>+</div>
            <Styled.InputBox1></Styled.InputBox1>
            <div>+</div>
            <Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1></Styled.InputBox1>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.FitInputWrapper2>
    </Styled.SingleWrapper>
  );
};

export default Single12;
