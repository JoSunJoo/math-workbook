import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type4';

import img1 from '../../Image/4-1-1_2.png';
import img2 from '../../Image/4-1-1_3.png';
import img3 from '../../Image/4-1-1_4.png';
import img4 from '../../Image/4-1-1_5.png';
import img5 from '../../Image/4-1-1_6.png';
import img6 from '../../Image/4-1-1_7.png';
import img7 from '../../Image/4-1-1_8.png';
import img8 from '../../Image/4-1-1_9.png';

const Single11 = (props: QuizProps) => {
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
  const imgUrl = [img1, img2, img3, img4, img5, img6, img7, img8];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.FitInputWrapper4>
        <Styled.ColGapBox gap={1}>
          <Styled.ImgSize3 src={imgUrl[imgId]} alt="" />
          <Styled.RowBox7>
            <div>{quiz1} = </div>
            <Styled.InputBox1
              disabled={correct === null ? false : true}
              onChange={e => handleInput(e.target.value, 0)}
            />
          </Styled.RowBox7>
        </Styled.ColGapBox>
      </Styled.FitInputWrapper4>
    </Styled.RowBox13>
  );
};

export default Single11;
