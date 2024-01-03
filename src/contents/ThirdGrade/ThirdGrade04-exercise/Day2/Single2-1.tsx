import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type4';

import img1 from '../../Image/4-2-1_2.png';
import img2 from '../../Image/4-2-1_3.png';
import img3 from '../../Image/4-2-1_4.png';
import img4 from '../../Image/4-2-1_5.png';

const Single21 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    imgId,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const imgUrl = [img1, img2, img3, img4];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };
  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper8>
        <Styled.InputWrapper3>
          <Styled.ColGapBox gap={1.5}>
            <Styled.ImgSize6 src={imgUrl[imgId]} alt="" />
            <Styled.RowBox7>
              <div>{quiz1} = </div>
              <Styled.InputBox1
                onChange={e => handleInput(e.target.value, 0)}
              />
            </Styled.RowBox7>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single21;
