import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3 } = props;
  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.GapRowBox2 gap={1}>
        <Styled.GapRowBox2 gap={0.5}>
          <div>{quiz1}</div>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{quiz2}</div>
            </Styled.FractUnderLine>
            <div>{quiz3}</div>
          </Styled.ColGapBox>
        </Styled.GapRowBox2>
        <div>=</div>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.FractUnderLine>
          <Styled.InputBox3 />
        </Styled.ColGapBox>
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
