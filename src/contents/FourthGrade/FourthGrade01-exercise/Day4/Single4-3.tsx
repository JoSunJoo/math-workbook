import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data43QuizProps2 as QuizProps } from '../../Type/Type1';

const Single43 = (props: QuizProps) => {
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
      <Styled.ColorBox1>{quiz1}</Styled.ColorBox1>
      <Styled.CircleInput
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
        value={inputValue[idx][0]}
      />
      <Styled.ColorBox2>{quiz2}</Styled.ColorBox2>
    </Styled.RowBox13>
  );
};

export default Single43;
