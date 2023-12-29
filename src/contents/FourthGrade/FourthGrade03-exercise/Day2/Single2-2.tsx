import Styled from '../../style';

import img1 from '../../Image/3-2-2_1.png';
import img2 from '../../Image/3-2-2_2.png';
import img3 from '../../Image/3-2-2_3.png';
import img4 from '../../Image/3-2-2_4.png';
import img5 from '../../Image/3-2-2_5.png';
import img6 from '../../Image/3-2-2_6.png';
import img7 from '../../Image/3-2-2_7.png';
import img8 from '../../Image/3-2-2_8.png';
import img9 from '../../Image/3-2-2_9.png';
import img10 from '../../Image/3-2-2_10.png';
import img11 from '../../Image/3-2-2_11.png';
import img12 from '../../Image/3-2-2_12.png';
import img13 from '../../Image/3-2-2_13.png';
import img14 from '../../Image/3-2-2_14.png';
import img15 from '../../Image/3-2-2_15.png';

const Single21 = () => {
  const imgArray = [img1, img4, img7, img10, img13];
  const totalArray = [
    [img2, img3],
    [img5, img6],
    [img8, img9],
    [img11, img12],
    [img14, img15],
  ];
  const numArray = [
    ['①', '②'],
    ['③', '④'],
    ['⑤', '⑥'],
    ['⑦', '⑧'],
    ['⑨', '⑩'],
  ];
  const sizeArray1 = [8, 5, 5, 7, 8];
  const sizeArray2 = [
    [6, 4],
    [3, 3],
    [5, 7],
    [5, 7],
    [4, 6],
  ];

  return (
    <Styled.ColGapBox gap={2}>
      {imgArray.map((item: string, idx: number) => (
        <Styled.GapRowBox3 gap={3}>
          <Styled.SetCenter>
            <Styled.ImgSizeWidth src={item} width={sizeArray1[idx]} />
          </Styled.SetCenter>
          <Styled.FitInputWrapper3>
            <Styled.GapRowBox3 gap={4}>
              <Styled.GapRowBox gap={2}>
                <div>{numArray[idx][0]}</div>
                <Styled.GapRowBox2 gap={0.2}>
                  <Styled.ImgSizeWidth
                    src={totalArray[idx][0]}
                    width={sizeArray2[idx][0]}
                  />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <Styled.InputBox3 />
                    </Styled.FractUnderLine>
                    <Styled.InputBox3 />
                  </Styled.ColGapBox>
                </Styled.GapRowBox2>
              </Styled.GapRowBox>
              <Styled.GapRowBox gap={2}>
                <div>{numArray[idx][1]}</div>
                <Styled.GapRowBox2 gap={0.2}>
                  <Styled.ImgSizeWidth
                    src={totalArray[idx][1]}
                    width={sizeArray2[idx][1]}
                  />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <Styled.InputBox3 />
                    </Styled.FractUnderLine>
                    <Styled.InputBox3 />
                  </Styled.ColGapBox>
                </Styled.GapRowBox2>
              </Styled.GapRowBox>
            </Styled.GapRowBox3>
          </Styled.FitInputWrapper3>
        </Styled.GapRowBox3>
      ))}
    </Styled.ColGapBox>
  );
};

export default Single21;
