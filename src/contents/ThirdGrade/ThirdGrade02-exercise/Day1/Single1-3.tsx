import Styled from '../../style';

import type { Data12QuizProps } from '../../Type/Type1';

const Single13 = (props: Data12QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper>
      <div>{id}</div>
      <Styled.InputWrapper3>
        <div>{quiz1}</div>
        <div>×</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper3>
            <div>=</div>
            <Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
        </div>
      </Styled.InputWrapper3>
    </Styled.SingleWrapper>
  );
};

export default Single13;
