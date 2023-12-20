import Styled from '../../style';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-1-1_2.png';
import img2 from '../../Image/1-1-1_3.png';
import img3 from '../../Image/1-1-1_4.png';
import img4 from '../../Image/1-1-1_5.png';

const Single11 = (props: QuizProps) => {
  const { id, quiz1, imgId } = props;
  const imgArray = [img1, img2, img3, img4];

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.RowBox12>
        <Styled.ImgSize9 src={imgArray[imgId]} alt="" />
        <Styled.FitInputWrapper2>
          <Styled.SetCenter>
            <Styled.RowBox4>
              <div>{quiz1} + </div>
              <Styled.InputBox1 />
              <div>= 10000</div>
            </Styled.RowBox4>
          </Styled.SetCenter>
        </Styled.FitInputWrapper2>
      </Styled.RowBox12>
    </Styled.RowBox13>
  );
};

export default Single11;
