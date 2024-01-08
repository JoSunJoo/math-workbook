import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';
import SignArrow from '../../utils/SignArrow';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type3';

//정답 순서 위, 아래
const Single51 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    sign1,
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
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox3>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.TempSize1>
          <SignArrow deg={90} sign={sign1} />
        </Styled.TempSize1>
        <Styled.ColGapBox3 gap={1}>
          <SignArrow sign={sign1} />
          <Styled.ColGapBox3>
            <Styled.RowBox2>
              <Styled.RowBox>
                <Styled.NumBox1 color="rgba(255, 98, 146, 0.6)">
                  {quiz1}
                </Styled.NumBox1>
                <Styled.NumBox1 color="rgba(98, 151, 255, 0.6)">
                  {quiz2}
                </Styled.NumBox1>
              </Styled.RowBox>
              <Styled.InputBox1
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.RowBox2>
            <Styled.NumBox1 color="rgba(143, 108, 255, 0.6)">
              {quiz3}
            </Styled.NumBox1>
          </Styled.ColGapBox3>
          <Styled.InputBox1
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
          />
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single51;
