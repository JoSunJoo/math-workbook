import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data13QuizProps2 as QuizProps } from '../../Type/Type1';

const Single13 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
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
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <div>{quiz1}</div>
      <Styled.InputBox4
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
        value={inputValue[idx][0]}
      />
      <div>{quiz2}</div>
    </Styled.RowBox13>
  );
};

export default Single13;
