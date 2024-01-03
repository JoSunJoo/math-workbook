import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data53QuizProps2 as QuizProps } from '../../Type/Type1';

const Single31 = (props: QuizProps) => {
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
    <Styled.SingleWrapper2Short>
      <IdSymbol id={id} correct={correct} />
      <Styled.SetCenter>
        <Styled.RowBox4>
          <div>{quiz1}</div>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.RowBox7>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 0)} />
            <div>×</div>
            <Styled.InputBox3 onChange={e => handleInput(e.target.value, 1)} />
            <div>=</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 2)} />
          </Styled.RowBox7>
        </Styled.RowBox4>
      </Styled.SetCenter>
    </Styled.SingleWrapper2Short>
  );
};

export default Single31;
