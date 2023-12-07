import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type3';

const Single531 = (props: QuizProps) => {
  const { quiz1, quiz2 } = props;

  return (
    <Styled.PaddingBox3>
      <Styled.ColGapBox gap={0}>
        <Styled.RowBox4>
          ×
          <Styled.ColGapBox gap={0}>
            <Styled.LetterSpacing>{quiz1}</Styled.LetterSpacing>
            <Styled.LetterSpacing>{quiz2}</Styled.LetterSpacing>
          </Styled.ColGapBox>
        </Styled.RowBox4>
        <Styled.TopLineInput2 />
      </Styled.ColGapBox>
    </Styled.PaddingBox3>
  );
};

export default Single531;
