import Styled from '../../style';

import type { Data32QuizProps as QuizProps } from '../../Type/Type3';

const Single32 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.RowBox18>
      <div>{id}</div>
      <Styled.InputWrapper1>
        <Styled.GapRowBox2 gap={0.3}>
          <div>{quiz1}</div>
          <div>÷</div>
          <div>{quiz2}</div>
          <div>=</div>
        </Styled.GapRowBox2>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.FractUnderLine>
          <Styled.InputBox3 />
        </Styled.ColGapBox>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Single32;
