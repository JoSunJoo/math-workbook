import Styled from '../../style';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type6';

import img1 from '../../Image/6-1-1_1.png';
import img2 from '../../Image/6-1-1_2.png';
import img3 from '../../Image/6-1-1_3.png';
import img4 from '../../Image/6-1-1_4.png';

const Single11 = (props: QuizProps) => {
  const { id, imgId } = props;

  const imgArray = [img1, img2, img3, img4];
  return (
    <Styled.RowBox>
      <Styled.IdNumBox4>{id}</Styled.IdNumBox4>
      <Styled.TextSize>
        <Styled.GapRowBox gap={1}>
          <Styled.HandleImgSize src={imgArray[imgId]} size={5} />
          <div>색칠된 부분은 전체를 똑같이</div>
          <Styled.InputBox3 />
          <div>으로 나눈 것 중</div>
          <Styled.InputBox3 />
          <div>이므로</div>
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
          <div>입니다.</div>
        </Styled.GapRowBox>
      </Styled.TextSize>
    </Styled.RowBox>
  );
};

export default Single11;
