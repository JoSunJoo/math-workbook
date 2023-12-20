import Styled from '../../style';

import type { Data12QuizProps as Props } from '../../Type/Type1';

const Single53 = (props: Props) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.MiniSingleWrapper>
      <Styled.RowBox13>
        <div>{id}</div>
        <Styled.FitInputWrapper3>
          <Styled.ColGapBox gap={0}>
            <Styled.BottomLine>
              <Styled.RowBox4>
                ×
                <Styled.ColGapBox gap={0}>
                  <Styled.LetterSpacing>{quiz1}</Styled.LetterSpacing>
                  <Styled.LetterSpacing>{quiz2}</Styled.LetterSpacing>
                </Styled.ColGapBox>
              </Styled.RowBox4>
            </Styled.BottomLine>
            <Styled.SpacingInputBox1></Styled.SpacingInputBox1>
          </Styled.ColGapBox>
        </Styled.FitInputWrapper3>
      </Styled.RowBox13>
    </Styled.MiniSingleWrapper>
  );
};

export default Single53;
