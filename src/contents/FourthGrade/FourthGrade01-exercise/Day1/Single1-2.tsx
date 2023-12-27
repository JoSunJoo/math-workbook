import Styled from '../../style';

import type { Data12QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-1-2_1.png';
import img2 from '../../Image/1-1-2_2.png';
import img3 from '../../Image/1-1-2_3.png';
import img4 from '../../Image/1-1-2_4.png';
import img5 from '../../Image/1-1-2_5.png';
import img6 from '../../Image/1-1-2_6.png';

const Single12 = (props: QuizProps) => {
  const { id, imgId } = props;
  const imgArray = [img1, img2, img3, img4, img5, img6];

  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.SingleWrapper8>
        <Styled.SetCenter2>
          <Styled.ColGapBox gap={2}>
            <Styled.ImgSize9 src={imgArray[imgId]} alt="" />
            <Styled.InputBox1 />
          </Styled.ColGapBox>
        </Styled.SetCenter2>
      </Styled.SingleWrapper8>
    </Styled.RowBox5>
  );
};

export default Single12;
