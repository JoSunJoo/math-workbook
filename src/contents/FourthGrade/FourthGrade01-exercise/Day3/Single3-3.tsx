import Styled from '../../style';

import type { Data33QuizProps2 as QuizProps } from '../../Type/Type1';

import arrow from '../../Image/1-3-3.png';
import img1 from '../../Image/1-3-3_2.png';
import img2 from '../../Image/1-3-3_3.png';
import img3 from '../../Image/1-3-3_4.png';
import img4 from '../../Image/1-3-3_5.png';
import img5 from '../../Image/1-3-3_6.png';
import img6 from '../../Image/1-3-3_7.png';
import img7 from '../../Image/1-3-3_8.png';
import cir from '../../Image/1-3-3_circle.png';
import tri from '../../Image/1-3-3_triangle.png';

const Single31 = (props: QuizProps) => {
  const { id, imgId } = props;
  const imgArray = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.ColGapBox2 gap={1.5}>
        <Styled.ImgSize15 src={imgArray[imgId]} alt="" />
        <Styled.SetCenter>
          <Styled.ColGapBox gap={1}>
            <Styled.RowBox5>
              <Styled.ImgSize10 src={tri} alt="" />
              <Styled.MiddleInput2 />
            </Styled.RowBox5>
            <Styled.RowBox5>
              <Styled.ImgSize10 src={cir} alt="" />
              <Styled.MiddleInput2 />
            </Styled.RowBox5>
          </Styled.ColGapBox>
          <Styled.SetBox1>
            <Styled.ImgSize15 src={arrow} alt="" />
            <Styled.RowBox4>
              <Styled.InputBox1 />
              <div>배</div>
            </Styled.RowBox4>
          </Styled.SetBox1>
        </Styled.SetCenter>
      </Styled.ColGapBox2>
    </Styled.RowBox13>
  );
};

export default Single31;
