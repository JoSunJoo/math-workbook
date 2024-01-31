import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data13QuizProps2 as Props } from '../../Type/Type2';

const Single13 = (props: Props) => {
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
          <Styled.GapRowBox gap={0.3}>
            <Styled.InputBox7
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
              value={inputValue[idx][0]}
            />
            <div>···</div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 1)}
              value={inputValue[idx][1]}
            />
          </Styled.GapRowBox>
        </Styled.DivTopInputWrapper>
        <Styled.DivCenterNum2>{quiz1}</Styled.DivCenterNum2>
      </Styled.DivWrapper>
    </Styled.DivSingleWrapper>
  );
};

export default Single13;
