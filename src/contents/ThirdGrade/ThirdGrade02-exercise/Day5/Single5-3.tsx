import Styled from '../../style';

import type { Data12QuizProps as Props } from '../../Type/Type1';

const Single53 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.MiniSingleWrapper>
      <Styled.IdNumBox2>{id}</Styled.IdNumBox2>
      <Styled.ColGapBox gap={0}>
        <Styled.RowBox4>
          ×
          <Styled.ColGapBox gap={0}>
            <Styled.LetterSpacing>{quiz1}</Styled.LetterSpacing>
            <Styled.LetterSpacing>{quiz2}</Styled.LetterSpacing>
          </Styled.ColGapBox>
        </Styled.RowBox4>
        <Styled.TopLineInput>
          <Styled.SpacingInputBox1></Styled.SpacingInputBox1>
        </Styled.TopLineInput>
      </Styled.ColGapBox>
    </Styled.MiniSingleWrapper>
  );
};

export default Single53;
