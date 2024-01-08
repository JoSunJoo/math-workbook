import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data22QuizProps2 as QuizProps } from '../../Type/Type5';

const Single22 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
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
        <Styled.ColGapBox3 gap={1}>
          <Styled.ColGapBox3>
            <Styled.RowBox>
              <Styled.RowBox>
                <Styled.NumBox3
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <Styled.NumBox3
                  disabled={correct === null ? false : true}
                  onChange={e => handleInput(e.target.value, 1)}
                />
              </Styled.RowBox>
              <Styled.NumBox2Input noBottom={true}>{quiz4}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 2)}
              />
              <Styled.NumBox3
                disabled={correct === null ? false : true}
                onChange={e => handleInput(e.target.value, 3)}
              />
              <Styled.NumBox2Input>{quiz3}</Styled.NumBox2Input>
            </Styled.RowBox>
            <Styled.RowBox>
              <Styled.NumBox2Input noRight={true}>{quiz1}</Styled.NumBox2Input>
              <Styled.NumBox2Input>{quiz2}</Styled.NumBox2Input>
            </Styled.RowBox>
          </Styled.ColGapBox3>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single22;
