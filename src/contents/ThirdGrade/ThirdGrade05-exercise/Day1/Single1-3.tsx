import Styled from '../../style';

import type { Data13QuizProps2 as QuizProps } from '../../Type/Type5';

import img1 from '../../Image/5-1-3_1.png';
import img2 from '../../Image/5-1-3_2.png';
import img3 from '../../Image/5-1-3_3.png';

const Single13 = (props: QuizProps) => {
  const { id, quiz1, quiz2, imgId } = props;
  const imgArray = [img1, img2, img3];
  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.RowBox12>
        <Styled.ImgSize9 src={imgArray[imgId]} alt="" />
        <Styled.FitInputWrapper2>
          <Styled.ColGapBox2 gap={1}>
            <div>{quiz1}</div>
            <Styled.RowBox7>
              <div>⇒</div>
              <Styled.InputBox3 /> {quiz2}
            </Styled.RowBox7>
          </Styled.ColGapBox2>
        </Styled.FitInputWrapper2>
      </Styled.RowBox12>
    </Styled.RowBox13>
  );
};

export default Single13;
