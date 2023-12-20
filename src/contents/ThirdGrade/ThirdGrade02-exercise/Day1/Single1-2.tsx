import Styled from '../../style';

import type { Data12QuizProps as QuizProps } from '../../Type/Type2';

const Single12 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.SingleWrapper6>
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
      </Styled.SingleWrapper6>
    </Styled.RowBox13>
  );
};

export default Single12;
