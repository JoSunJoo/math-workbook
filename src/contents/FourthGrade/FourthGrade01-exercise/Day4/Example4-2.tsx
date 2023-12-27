import Styled from '../../style';

import img2 from '../../Image/1-4-2/1.png';
import img3 from '../../Image/1-4-2/2.png';
import img4 from '../../Image/1-4-2/3.png';
import img5 from '../../Image/1-4-2/4.png';
import img from '../../Image/blueArrow.png';

const Example42 = () => {
  const imgArray = [img2, img3, img4, img5];
  const holderArray = ['4000', '90', '10000', '8'];
  return (
    <Styled.RowBox5>
      <div />
      <Styled.RowWrapBox17>
        <>
          {imgArray.map((imgSrc: string, idx: number) => (
            <Styled.RowBox16>
              <Styled.HandleImgSize src={img} size={1.5} />
              <Styled.ColGapBox gap={1}>
                <Styled.HandleImgSize src={imgSrc} size={2} />
                <Styled.LongInput3 placeholder={holderArray[idx]} disabled />
              </Styled.ColGapBox>
            </Styled.RowBox16>
          ))}
        </>
        <Styled.RowBox16>
          <Styled.HandleImgSize src={img} size={1.5} />
          <Styled.ColGapBox gap={1}>
            <Styled.TextSize>가장 큰 수: </Styled.TextSize>
            <Styled.LongInput3 placeholder="10000" disabled />
          </Styled.ColGapBox>
        </Styled.RowBox16>
      </Styled.RowWrapBox17>
    </Styled.RowBox5>
  );
};

export default Example42;
