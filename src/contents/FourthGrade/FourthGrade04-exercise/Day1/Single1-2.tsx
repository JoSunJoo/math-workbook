import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data12QuizProps2 as Props } from '../../Type/Type4';

import img2 from '../../Image/4-1-2_2.png';
import img3 from '../../Image/4-1-2_3.png';
import img4 from '../../Image/4-1-2_4.png';
import img5 from '../../Image/4-1-2_5.png';
import img6 from '../../Image/4-1-2_6.png';
import img7 from '../../Image/4-1-2_7.png';
import img8 from '../../Image/4-1-2_8.png';
import img9 from '../../Image/4-1-2_9.png';
import img10 from '../../Image/4-1-2_10.png';
import img11 from '../../Image/4-1-2_11.png';
import img12 from '../../Image/4-1-2_12.png';
import arrow from '../../Image/redArrow.png';

const Single12 = (props: Props) => {
  const {
    id,
    imgId,
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

  const imgArray = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      <Styled.GapRowBox2 gap={1}>
        <Styled.HandleImgSize src={imgArray[imgId]} size={2} />
        <Styled.HandleImgSize src={arrow} size={1.5} />
        <Styled.InputBox1
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 0)}
          value={inputValue[idx][0]}
        />
      </Styled.GapRowBox2>
    </Styled.SingleWrapper2>
  );
};

export default Single12;
