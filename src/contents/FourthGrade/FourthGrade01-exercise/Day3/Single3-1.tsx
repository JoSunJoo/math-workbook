import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data31QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-3-1_2.png';
import img2 from '../../Image/1-3-1_3.png';

const Single31 = (props: QuizProps) => {
  const {
    id,
    type,
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
  let img = '';
  if (id === '②') img = img1;
  else if (id === '④') img = img2;
  else img = '';

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      {type === 1 ? (
        <Styled.RowBox4>
          <div>{quiz1}</div>
          <Styled.InputBox4
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
          />
        </Styled.RowBox4>
      ) : (
        <Styled.RowBox4>
          <Styled.ImgSize10 src={img} alt="" />
          <Styled.NonFlexText>이 {quiz1}장 있으면</Styled.NonFlexText>
          <Styled.InputBox4
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
          />
          <div>원</div>
        </Styled.RowBox4>
      )}
    </Styled.RowBox13>
  );
};

export default Single31;
