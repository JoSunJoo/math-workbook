import Styled from '../../style';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const Single12 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox2>{id}</Styled.IdNumBox2>
      <Styled.InputWrapper3>
        <Styled.ColGapBox>
          <Styled.InputWrapper3>
            <div>{quiz1}</div>
            <Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
          <Styled.RowBox3>
            <Styled.SetCenter>
              <Styled.InputWrapper3>
                <div>{quiz2}</div>
                <Styled.InputBox1></Styled.InputBox1>
                <div>=</div>
                <Styled.InputBox1></Styled.InputBox1>
              </Styled.InputWrapper3>
            </Styled.SetCenter>
          </Styled.RowBox3>
        </Styled.ColGapBox>
      </Styled.InputWrapper3>
    </Styled.SingleWrapper5>
  );
};

export default Single12;
