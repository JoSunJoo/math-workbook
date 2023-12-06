import Styled from '../../style';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const Single12 = (props: DataProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper>
      <div>{id}</div>
      <Styled.InputWrapper2>
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
      </Styled.InputWrapper2>
    </Styled.SingleWrapper>
  );
};

export default Single12;
