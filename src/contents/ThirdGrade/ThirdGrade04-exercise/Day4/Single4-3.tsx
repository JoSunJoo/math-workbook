import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data43QuizProps2 as Props } from '../../Type/Type4';

const Single43 = (props: Props) => {
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
    <Styled.RowBox2>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper4>
        <Styled.ColGapBox gap={0.7}>
          <div>{quiz1}</div>
          <Styled.InputBox1
            maxLength={1}
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
          />
        </Styled.ColGapBox>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Single43;
