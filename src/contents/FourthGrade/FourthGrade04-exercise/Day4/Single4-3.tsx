import Styled from '../../style';

import type { Data43QuizProps2 as QuizProps } from '../../Type/Type4';

import img1 from '../../Image/4-4-3_5.png';
import img2 from '../../Image/4-4-3_6.png';
import img3 from '../../Image/4-4-3_7.png';
import img4 from '../../Image/4-4-3_8.png';
import img5 from '../../Image/4-4-3_9.png';
import img6 from '../../Image/4-4-3_10.png';

const Single43 = (props: QuizProps) => {
  const { id, quiz1, unit, imgId } = props;
  const imgArray = [img1, img2, img3, img4, img5, img6];

  return (
    <Styled.SingleWrapper2>
      <div>{id}</div>
      <Styled.InputWrapper1>
        <Styled.ImgSize6 src={imgArray[imgId]} alt="" />
        <div>=</div>
        <Styled.InputBox1 />
        <div>{unit}</div>
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Single43;
