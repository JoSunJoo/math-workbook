import Styled from '../../style';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const Single32 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3 } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox2>{id}</Styled.IdNumBox2>
      <Styled.InputWrapper>
        {quiz1}
        <Styled.AngleShapeBox>
          <Styled.AngleLineLeft />
          <Styled.AngleShapeLeft />
        </Styled.AngleShapeBox>
        <Styled.InnerColBox>
          <Styled.InputWrapper3>
            {quiz2} =<Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
          <Styled.InputWrapper3>
            {quiz3} =<Styled.InputBox1></Styled.InputBox1>
          </Styled.InputWrapper3>
        </Styled.InnerColBox>
        <Styled.AngleShapeBox>
          <Styled.AngleLineRight />
          <Styled.AngleShapeRight />
        </Styled.AngleShapeBox>
        <Styled.InputBox1></Styled.InputBox1>
      </Styled.InputWrapper>
    </Styled.SingleWrapper5>
  );
};

export default Single32;
