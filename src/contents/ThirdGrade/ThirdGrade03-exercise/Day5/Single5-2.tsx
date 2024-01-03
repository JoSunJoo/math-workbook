import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';
import SignArrow from '../../utils/SignArrow';

import type { Data52QuizProps2 as QuizProps } from '../../Type/Type3';

//정답 순서 위, 아래
const Single52 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
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
            <Styled.RowBox>
              <Styled.RowBox>
                <Styled.NumBox2 color="rgba(255, 98, 146, 0.4)">
                  {quiz1}
                </Styled.NumBox2>
                <Styled.NumBox2 color="rgba(98, 151, 255, 0.4)">
                  {quiz2}
                </Styled.NumBox2>
              </Styled.RowBox>
              <Styled.NumBox3Input
                noBottom={true}
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2 color="rgba(143, 108, 255, 0.4)">
                {quiz3}
              </Styled.NumBox2>
              <Styled.NumBox2 color="rgba(255, 117, 19, 0.4)">
                {quiz4}
              </Styled.NumBox2>
              <Styled.NumBox3Input
                onChange={e => handleInput(e.target.value, 1)}
              />
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox3Input
                noRight={true}
                onChange={e => handleInput(e.target.value, 2)}
              />
              <Styled.NumBox3Input
                onChange={e => handleInput(e.target.value, 3)}
              />
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single52;
