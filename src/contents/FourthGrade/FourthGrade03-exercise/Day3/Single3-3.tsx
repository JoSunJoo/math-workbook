import Styled from '../../style';

import type { Data33QuizProps as QuizProps } from '../../Type/Type3';

const Single33 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.RowBox18>
      <div>{id}</div>
      <Styled.InputWrapper1>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <div>{quiz1}</div>
          </Styled.FractUnderLine>
          <Styled.FitBox>{quiz2}</Styled.FitBox>
        </Styled.ColGapBox>
        <Styled.GapRowBox2 gap={0.5}>
          <div>=</div>
          <Styled.InputBox3 />
          <div>÷</div>
          <Styled.InputBox3 />
        </Styled.GapRowBox2>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Single33;
