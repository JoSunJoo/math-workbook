import Styled from '../../style';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const Single22 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox2>{id}</Styled.IdNumBox2>
      <Styled.InputWrapper2>
        <div>{quiz1}</div>
        <div>
          <Styled.InputWrapper>
            <div>= (</div>
            <Styled.InputBox1></Styled.InputBox1>
            <div>× {quiz2} ) + (</div>
            <Styled.InputBox3></Styled.InputBox3>
            <div>× {quiz3} )</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1></Styled.InputBox1>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.SingleWrapper5>
  );
};

export default Single22;
