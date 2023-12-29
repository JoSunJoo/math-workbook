import Styled from '../../style';

import type { Data52QuizProps as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.GapRowBox2 gap={1}>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <div>{quiz1}</div>
          </Styled.FractUnderLine>
          <Styled.FitBox>{quiz2}</Styled.FitBox>
        </Styled.ColGapBox>
        <div>=</div>
        <Styled.GapRowBox2 gap={0.5}>
          <Styled.InputBox3 />
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        </Styled.GapRowBox2>
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
