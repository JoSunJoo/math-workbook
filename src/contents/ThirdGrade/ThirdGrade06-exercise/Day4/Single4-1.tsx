import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data41QuizProps2 as QuizProps } from '../../Type/Type6';

const Single41 = (props: QuizProps) => {
  const {
    id,
    method,
    mune,
    deno,
    len,
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
    <Styled.ColGapBox gap={1.5}>
      <Styled.TextBox4>
        <Styled.IdNumBox4>
          <IdSymbol id={id} correct={correct} />
        </Styled.IdNumBox4>
        <div>{method}</div>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
          <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>의 길이가 {len}cm 이면</div>
      </Styled.TextBox4>
      <Styled.TextBox4>
        전체의 길이는
        <Styled.InputBox1
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 0)}
          value={inputValue[idx][0]}
        />
        <div>cm 입니다.</div>
      </Styled.TextBox4>
    </Styled.ColGapBox>
  );
};

export default Single41;
