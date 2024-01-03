import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as DataProps } from '../../Type/Type1';

import correctImg from '../../Image/Correct.svg';
import inCorrectImg from '../../Image/inCorrect.svg';
const Single13 = (props: DataProps) => {
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
    <Styled.SingleWrapper>
      <IdSymbol id={id} correct={correct} />
      <Styled.InputWrapper3>
        <div>{quiz1}</div>
        <div>+</div>
        <div>{quiz2}</div>
        <div>
          <Styled.InputWrapper3>
            <div>=</div>
            <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
          </Styled.InputWrapper3>
        </div>
      </Styled.InputWrapper3>
    </Styled.SingleWrapper>
  );
};

export default Single13;
