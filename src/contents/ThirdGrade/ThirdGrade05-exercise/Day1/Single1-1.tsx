import Styled from '../../style';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type5';

import img1 from '../../Image/5-1-1_1.png';
import img2 from '../../Image/5-1-1_2.png';
import img3 from '../../Image/5-1-1_3.png';
import img from '../../Image/redArrow.png';

const Single11 = (props: QuizProps) => {
  const { id, quiz1, quiz2, quiz3, quiz4, imgId } = props;
  const imgArray = [img1, img2, img3];
  return (
    <Styled.RowBox13>
      <div>{id}</div>

      <Styled.RowBox12>
        <Styled.ImgSize9 src={imgArray[imgId]} alt="" />
        <Styled.FitInputWrapper2>
          <Styled.ColGapBox2 gap={1}>
            <div>{quiz1}</div>
            <Styled.SetCenter>
              <Styled.HandleImgSize src={img} size={1.5} />
              <Styled.AngleShapeBox>
                <Styled.AngleShapeLeft />
              </Styled.AngleShapeBox>
              <Styled.InnerColBox>
                <Styled.InputWrapper4>
                  {quiz2} ÷ <Styled.InputBox1 /> = {quiz3}
                </Styled.InputWrapper4>
                <Styled.InputWrapper4>
                  {quiz2} ÷ <Styled.InputBox1 /> = {quiz4}
                </Styled.InputWrapper4>
              </Styled.InnerColBox>
            </Styled.SetCenter>
          </Styled.ColGapBox2>
        </Styled.FitInputWrapper2>
      </Styled.RowBox12>
    </Styled.RowBox13>
  );
};

export default Single11;
