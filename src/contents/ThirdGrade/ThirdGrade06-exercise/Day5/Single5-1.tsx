import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data51QuizProps2 as QuizProps } from '../../Type/Type6';

const Single51 = (props: QuizProps) => {
  const {
    id,
    mune,
    deno,
    len,
    conj,
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
    <Styled.TextBox4>
      <Styled.IdNumBox4>
        <IdSymbol id={id} correct={correct} />
      </Styled.IdNumBox4>
      <Styled.ColGapBox>
        <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
        <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
      </Styled.ColGapBox>
      <div>
        {conj} {len}이면 전체는
      </div>
      <Styled.InputBox1
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
        value={inputValue[idx][0]}
      />
      <div>입니다.</div>
    </Styled.TextBox4>
  );
};

export default Single51;
