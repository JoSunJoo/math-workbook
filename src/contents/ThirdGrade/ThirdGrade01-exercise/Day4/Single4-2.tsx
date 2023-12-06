import Styled from '../../style';

import type { Data42QuizProps as QuizProps } from '../../Type/Type1';

const Single42 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5 } = props;
  return (
    <Styled.RowBox2>
      <div>{id}</div>
      <Styled.SingleWrapper3>
        <Styled.InputWrapper2>
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1></Styled.InputBox1>
              <div>{quiz3}</div>
              <Styled.InputBox1></Styled.InputBox1>
              <div>{quiz4}</div>
            </Styled.InputWrapper>
            <div>
              <Styled.InputWrapper>
                <div>=</div>
                <Styled.InputBox1></Styled.InputBox1>
                <div>{quiz5} =</div>
                <Styled.InputBox1></Styled.InputBox1>
              </Styled.InputWrapper>
            </div>
          </div>
        </Styled.InputWrapper2>
      </Styled.SingleWrapper3>
    </Styled.RowBox2>
  );
};

export default Single42;
