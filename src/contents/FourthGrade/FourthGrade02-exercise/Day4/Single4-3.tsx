import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data43QuizProps2 as QuizProps } from '../../Type/Type2';

import img from '../../Image/2-4-3_2.png';

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
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      <Styled.RelativeBox>
        <Styled.ImgSize6 src={img} />
        <Styled.AsoluteBox6>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <Styled.NoBorderInputBox
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
          <Styled.NoBorderInputBox
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[idx][1]}
          />
        </Styled.AsoluteBox6>
      </Styled.RelativeBox>
    </Styled.SingleWrapper2>
  );
};

export default Single43;
