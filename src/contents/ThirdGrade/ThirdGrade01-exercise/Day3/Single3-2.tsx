import Styled from '../../style';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const Single32 = (props: DataProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.InputWrapper3>
        <div>{quiz1}</div>
        <div>+</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper3>
            <div>=</div>
            <Styled.InputBox1></Styled.InputBox1>
            <div>+</div>
            <Styled.InputBox1></Styled.InputBox1>
            <div>=</div>
            <Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
        </div>
      </Styled.InputWrapper3>
    </Styled.SingleWrapper2>
  );
};

export default Single32;
