import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type5';

const Single21 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
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
  const handleComponent = (num: string, i: number) => {
    if (num === '')
      return (
        <Styled.NumBox3
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, i)}
          value={inputValue[idx][i]}
        />
      );
    else
      return (
        <Styled.NumBox2 color="rgba(98, 151, 255, 0.3)">{num}</Styled.NumBox2>
      );
  };
  return (
    <Styled.SingleWrapper8>
      <Styled.IdNumBox3>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox3>
      <Styled.SetCenter>
        <Styled.ColGapBox3 gap={1}>
          <Styled.ColGapBox3>
            <Styled.RowBox>
              <Styled.RowBox>
                {handleComponent(quiz5, 0)}
                {handleComponent(quiz8, 1)}
              </Styled.RowBox>
              <Styled.NumBox2Input noBottom={true}>{quiz4}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              {handleComponent(quiz6, 2)}
              {handleComponent(quiz7, 3)}
              <Styled.NumBox2Input>{quiz3}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2Input noRight={true}>{quiz1}</Styled.NumBox2Input>
              <Styled.NumBox2Input>{quiz2}</Styled.NumBox2Input>
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper8>
  );
};

export default Single21;
