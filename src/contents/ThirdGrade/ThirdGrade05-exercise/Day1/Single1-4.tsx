import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single14 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.RowBox7>
      <div>{id}</div>
      <Styled.SingleWrapper5>
        <Styled.InputWrapper>
          <div>{quiz1}</div>
          <div>=</div>
          <Styled.InputBox1 />
          <Styled.AngleShapeBox>
            <Styled.AngleLineLeft />
            <Styled.AngleShapeLeft />
          </Styled.AngleShapeBox>
          <Styled.InnerColBox>
            <Styled.InputWrapper3>
              <Styled.InputBox1 />
              <div>×</div>
              <Styled.InputBox1 />
              <div>=</div>
              <Styled.InputBox1 />
            </Styled.InputWrapper3>
            <Styled.InputWrapper3>
              <Styled.InputBox1 />
              <div>×</div>
              <Styled.InputBox1 />
              <div>=</div>
              <Styled.InputBox1 />
            </Styled.InputWrapper3>
          </Styled.InnerColBox>
        </Styled.InputWrapper>
      </Styled.SingleWrapper5>
    </Styled.RowBox7>
  );
};

export default Single14;
