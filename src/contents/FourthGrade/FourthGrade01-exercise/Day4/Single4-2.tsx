import Styled from '../../style';

import type { Data42QuizProps2 as QuizProps } from '../../Type/Type1';

import img2 from '../../Image/1-4-2/5.png';
import img3 from '../../Image/1-4-2/6.png';
import img4 from '../../Image/1-4-2/7.png';
import img5 from '../../Image/1-4-2/8.png';
import img6 from '../../Image/1-4-2/9.png';
import img7 from '../../Image/1-4-2/10.png';
import img8 from '../../Image/1-4-2/11.png';
import img9 from '../../Image/1-4-2/12.png';
import img10 from '../../Image/1-4-2/13.png';
import img11 from '../../Image/1-4-2/14.png';
import img12 from '../../Image/1-4-2/15.png';
import img13 from '../../Image/1-4-2/16.png';
import img14 from '../../Image/1-4-2/17.png';
import img15 from '../../Image/1-4-2/18.png';
import img16 from '../../Image/1-4-2/19.png';
import img17 from '../../Image/1-4-2/20.png';
import img18 from '../../Image/1-4-2/21.png';
import img19 from '../../Image/1-4-2/22.png';
import img20 from '../../Image/1-4-2/23.png';
import img21 from '../../Image/1-4-2/24.png';
import img from '../../Image/blueArrow.png';

const Single42 = (props: QuizProps) => {
  const { id, imgId } = props;
  const imgArray = [
    [img2, img3, img4, img5],
    [img6, img7, img8, img9],
    [img10, img11, img12, img13],
    [img14, img15, img16, img17],
    [img18, img19, img20, img21],
  ];
  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.RowWrapBox17>
        <>
          {imgArray[imgId].map(imgSrc => (
            <Styled.RowBox16>
              <Styled.HandleImgSize src={img} size={1.5} />
              <Styled.ColGapBox gap={1}>
                <Styled.HandleImgSize src={imgSrc} size={2} />
                <Styled.LongInput3 />
              </Styled.ColGapBox>
            </Styled.RowBox16>
          ))}
        </>
        <Styled.RowBox16>
          <Styled.HandleImgSize src={img} size={1.5} />
          <Styled.ColGapBox gap={1}>
            <Styled.TextSize>가장 큰 수: </Styled.TextSize>
            <Styled.LongInput3 />
          </Styled.ColGapBox>
        </Styled.RowBox16>
      </Styled.RowWrapBox17>
    </Styled.RowBox5>
  );
};

export default Single42;
