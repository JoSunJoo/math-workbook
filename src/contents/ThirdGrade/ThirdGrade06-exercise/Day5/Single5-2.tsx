import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data52QuizProps2 as QuizProps } from '../../Type/Type6';

const Single52 = (props: QuizProps) => {
  const {
    id,
    method,
    mune,
    deno,
    len,
    totalText,
    unit,
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
    <Styled.ColGapBox gap={1}>
      <Styled.TextBox4>
        <Styled.IdNumBox4>
          <IdSymbol id={id} correct={correct} />
        </Styled.IdNumBox4>
        <div>{method}의 </div>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
          <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>
          이 {len}
          {unit} 일 때
        </div>
      </Styled.TextBox4>
      <Styled.TextBox4>
        {totalText}
        <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
        <div>{unit}입니다.</div>
      </Styled.TextBox4>
    </Styled.ColGapBox>
  );
};

export default Single52;
