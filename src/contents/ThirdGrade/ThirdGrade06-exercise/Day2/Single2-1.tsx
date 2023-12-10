import Styled from '../../style';

import type { Data22QuizProps as QuizProps } from '../../Type/Type2';

const Single21 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3 } = props;

  const handleQuiz = (id: string) => {
    if (id === '①') return 4;
    else if (id === '②') return 7;
    else if (id === '③') return 9;
    else return 10;
  };
  const QuizSeq = [quiz1, quiz2, quiz3];
  const AnswerSeq = [1, 2];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
      <Styled.ColGapBox gap={2}>
        <Styled.SingleWrapper4>
          <Styled.RowBox11>
            {QuizSeq.map((quiz: string, idx) => (
              <Styled.ColGapBox key={idx} gap={0}>
                <Styled.FractUnderLine>{quiz}</Styled.FractUnderLine>
                <div>{handleQuiz(id)}</div>
              </Styled.ColGapBox>
            ))}
          </Styled.RowBox11>
        </Styled.SingleWrapper4>
        <Styled.RowBox7>
          {AnswerSeq.map((seq: number) => (
            <Styled.RowBox10 key={seq}>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3 />
                </Styled.FractUnderLine>
                <Styled.InputBox3 />
              </Styled.ColGapBox>
              ＜
            </Styled.RowBox10>
          ))}
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        </Styled.RowBox7>
      </Styled.ColGapBox>
    </Styled.RowBox>
  );
};

export default Single21;
