import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type3';

const Single51 = (props: QuizProps) => {
  const { id, type, quiz1, quiz2 } = props;
  const handleFrac = (type: number, quiz1: number, quiz2?: number) => {
    switch (type) {
      case 1:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz1}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      case 2:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{quiz1}</div>
            </Styled.FractUnderLine>
            <Styled.FitBox>{quiz2}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      default:
        break;
    }
  };
  return (
    <Styled.RowBox5>
      <div>{id}</div>

      <Styled.GapRowBox2 gap={1}>
        {type === 1 ? <div>{quiz1}</div> : <>{handleFrac(2, quiz1, quiz2)}</>}
        <div>=</div>
        {type === 1 ? (
          <>{handleFrac(1, quiz2)}</>
        ) : (
          <>
            <Styled.InputBox3 />
          </>
        )}
      </Styled.GapRowBox2>
    </Styled.RowBox5>
  );
};

export default Single51;
