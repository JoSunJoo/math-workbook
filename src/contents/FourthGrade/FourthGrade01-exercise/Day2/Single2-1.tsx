import Styled from '../../style';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-2-1_2.png';
import img2 from '../../Image/1-2-1_3.png';
import img3 from '../../Image/1-2-1_4.png';

const Single21 = (props: QuizProps) => {
  const { id, imgId } = props;
  const imgArray = [img1, img2, img3];

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.SingleWrapper8>
        <Styled.ColGapBox gap={2}>
          <Styled.ImgSize4 src={imgArray[imgId]} alt="" />
          <Styled.SetCenter>
            <Styled.PaddingBox6>
              <Styled.ColGapBox4 gap={1}>
                <Styled.BetweenBox>
                  <Styled.InputBox4 />
                  <div> + </div>
                  <Styled.InputBox1 />
                  <div> + </div>
                  <Styled.InputBox1 />
                  <div> + </div>
                  <Styled.InputBox1 />
                  <div> + </div>
                  <Styled.InputBox3 />
                </Styled.BetweenBox>
                <Styled.SetCenter>
                  <Styled.RowBox5>
                    <div>=</div>
                    <Styled.InputBox4 />
                  </Styled.RowBox5>
                </Styled.SetCenter>
              </Styled.ColGapBox4>
            </Styled.PaddingBox6>
          </Styled.SetCenter>
        </Styled.ColGapBox>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single21;
