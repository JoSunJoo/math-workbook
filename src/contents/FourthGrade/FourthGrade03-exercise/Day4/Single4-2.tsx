import Styled from '../../style';

import type { Data42QuizProps2 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-4-2_2.png';
import img2 from '../../Image/3-4-2_3.png';
import img3 from '../../Image/3-4-2_4.png';
import img4 from '../../Image/3-4-2_5.png';
import img5 from '../../Image/3-4-2_6.png';
import img6 from '../../Image/3-4-2_7.png';
import img7 from '../../Image/3-4-2_8.png';

const Single42 = (props: QuizProps) => {
  const { id, type, imgId, quiz1, quiz2, quiz3 } = props;
  const imgArray = [img1, img2, img3, img4, img5, img6, img7];
  const handleFrac = (type: number, item: string) => {
    switch (type) {
      case 1:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.FitBox>{item}</Styled.FitBox>
          </Styled.ColGapBox>
        );

      case 2:
        return (
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <div>{item}</div>
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        );

      default:
        break;
    }
  };

  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.ColGapBox gap={1}>
        <Styled.HandleImgSize src={imgArray[imgId]} size={5} />
        <Styled.GapRowBox2 gap={1}>
          <div>{handleFrac(type, quiz1)}</div>
          <div>=</div>
          <div>{handleFrac(type, quiz2)}</div>
          {quiz3 === '' ? (
            <></>
          ) : (
            <>
              <div>=</div>
              <>{handleFrac(type, quiz3)}</>
            </>
          )}
        </Styled.GapRowBox2>
      </Styled.ColGapBox>
    </Styled.RowBox5>
  );
};

export default Single42;
