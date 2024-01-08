import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type1';

const Single32 = (props: QuizProps) => {
  const {
    id,
    quiz1,
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
      <IdSymbol id={id} correct={correct} />
      <Styled.SetCenter>
        <Styled.RowBox8>
          <Styled.RowBox7>
            <div>{quiz1}</div>
            <div>=</div>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
            />
          </Styled.RowBox7>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.RowBox7>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
            />
            <div>×</div>
            <Styled.InputBox3
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 2)}
            />
            <div>=</div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 3)}
            />
          </Styled.RowBox7>
        </Styled.RowBox8>
      </Styled.SetCenter>
    </Styled.SingleWrapper5>
  );
};

export default Single32;
