import Styled from '../../style';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type6';

import img1 from '../../Image/6-1-3_1.png';
import img2 from '../../Image/6-1-3_2.png';
import img3 from '../../Image/6-1-3_3.png';
import img4 from '../../Image/6-1-3_4.png';
import img5 from '../../Image/6-1-3_5.png';
import img6 from '../../Image/6-1-3_6.png';
import img7 from '../../Image/6-1-3_7.png';
import img8 from '../../Image/6-1-3_8.png';

const Single13 = (props: QuizProps) => {
  const { id, imgId } = props;

  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
      <Styled.GapRowBox gap={2}>
        <Styled.HandleImgSize src={imgArray[imgId]} size={7} />
        <Styled.GapRowBox gap={1}>
          <Styled.ColorBox1>
            <Styled.ColGapBox gap={0.1}>
              <Styled.FractUnderLine>
                <Styled.InputBox3 />
              </Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.ColGapBox>
          </Styled.ColorBox1>
          <Styled.ColorBox2>
            <Styled.ColGapBox gap={0.1}>
              <Styled.FractUnderLine>
                <Styled.InputBox3 />
              </Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.ColGapBox>
          </Styled.ColorBox2>
        </Styled.GapRowBox>
      </Styled.GapRowBox>
    </Styled.RowBox>
  );
};

export default Single13;
