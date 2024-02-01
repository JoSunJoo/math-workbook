import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type2';

const Single22 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  const handleQuiz = (id: string) => {
    if (id === '①') return 1;
    else if (id === '②') return 3;
    else if (id === '③') return 2;
    else return 4;
  };
  const QuizSeq = [quiz1, quiz2, quiz3];
  const AnswerSeq = [1, 2];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox4>
      <Styled.ColGapBox gap={2}>
        <Styled.SingleWrapper4>
          <Styled.RowBox11>
            {QuizSeq.map((quiz: string, idx) => (
              <Styled.ColGapBox key={idx} gap={0}>
                <Styled.FractUnderLine>{handleQuiz(id)}</Styled.FractUnderLine>
                <div>{quiz}</div>
              </Styled.ColGapBox>
            ))}
          </Styled.RowBox11>
        </Styled.SingleWrapper4>
        <Styled.RowBox7>
          {AnswerSeq.map((seq: number) => (
            <Styled.RowBox10 key={seq}>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3
                    disabled={correct === null ? false : true}
                    onChange={e => handleInput(e.target.value, (seq - 1) * 2)}
                    value={inputValue[idx][(seq - 1) * 2]}
                  />
                </Styled.FractUnderLine>
                <Styled.InputBox3
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, seq * 2 - 1)}
                  value={inputValue[idx][seq * 2 - 1]}
                />
              </Styled.ColGapBox>
              ＜
            </Styled.RowBox10>
          ))}
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 4)}
                value={inputValue[idx][4]}
              />
            </Styled.FractUnderLine>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 5)}
              value={inputValue[idx][5]}
            />
          </Styled.ColGapBox>
        </Styled.RowBox7>
      </Styled.ColGapBox>
    </Styled.RowBox>
  );
};

export default Single22;
