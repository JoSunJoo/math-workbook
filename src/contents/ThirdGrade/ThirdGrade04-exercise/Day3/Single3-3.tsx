import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type1';

const Single33 = (props: Props) => {
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
    <Styled.DivSingleWrapper>
      <IdSymbol id={id} correct={correct} />
      <Styled.DivWrapper>
        <Styled.DivLeftCircle></Styled.DivLeftCircle>
        <Styled.DivLeftNum>{quiz2}</Styled.DivLeftNum>
        <Styled.DivTopInputWrapper>
          <Styled.InputBox3
            maxLength={1}
            onChange={e => handleInput(e.target.value, 0)}
          />
          <Styled.InputBox3
            maxLength={1}
            onChange={e => handleInput(e.target.value, 1)}
          />
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum2>{quiz1}</Styled.DivCenterNum2>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper>
  );
};

export default Single33;
