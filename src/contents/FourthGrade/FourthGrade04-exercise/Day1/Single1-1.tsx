import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as Props } from '../../Type/Type4';

import img1 from '../../Image/4-1-1.png';
import img2 from '../../Image/4-1-1_2.png';
import img3 from '../../Image/4-1-1_3.png';
import img4 from '../../Image/4-1-1_4.png';
import img5 from '../../Image/4-1-1_5.png';
import img6 from '../../Image/4-1-1_6.png';
import img7 from '../../Image/4-1-1_7.png';
import img8 from '../../Image/4-1-1_8.png';
import img9 from '../../Image/4-1-1_9.png';
import img10 from '../../Image/4-1-1_10.png';
import img11 from '../../Image/4-1-1_11.png';
import img12 from '../../Image/4-1-1_12.png';

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
    img1,
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
  const leftArray = [15.3, 10, 6.3, 19, 11.7, 13.7, 13.5, 6.5, 10, 17, 5, 17];
  return (
    <Styled.SingleWrapper2>
      <IdSymbol id={id} correct={correct} />
      <Styled.ColGapBox2 gap={2}>
        <Styled.RelativeBox>
          <Styled.HandleImgSize src={imgArray[imgId]} size={4} />
        </Styled.RelativeBox>
        <Styled.LeftAbsoluteBox left={leftArray[imgId]}>
          <Styled.InputBox1 onChange={e => handleInput(e.target.value, 0)} />
        </Styled.LeftAbsoluteBox>
      </Styled.ColGapBox2>
    </Styled.SingleWrapper2>
  );
};

export default Single12;
