import Styled from '../../style';

import type { Data23QuizProps as QuizProps } from '../../Type/Type6';

const Single23 = (props: QuizProps) => {
  const { id, quiz1_1, quiz1_2, quiz2_1, quiz2_2, quiz3_1, quiz3_2 } = props;

  const MuneSeq = [quiz1_1, quiz2_1, quiz3_1]; //분자
  const DenoSeq = [quiz1_2, quiz2_2, quiz3_2]; //분모
  const AnswerSeq = [1, 2];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
      <Styled.ColGapBox gap={2}>
        <Styled.SingleWrapper4>
          <Styled.RowBox11>
            {DenoSeq.map((quiz: string, idx) => (
              <Styled.ColGapBox key={idx} gap={0}>
                <Styled.FractUnderLine>{MuneSeq[idx]}</Styled.FractUnderLine>
                <div>{quiz}</div>
              </Styled.ColGapBox>
            ))}
          </Styled.RowBox11>
        </Styled.SingleWrapper4>
        {/* 하단의 input box 부분 */}
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

export default Single23;
