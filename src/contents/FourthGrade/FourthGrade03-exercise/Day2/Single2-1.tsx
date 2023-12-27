import Styled from '../../style';

import img1 from '../../Image/3-2-1_2.png';
import img2 from '../../Image/3-2-1_3.png';
import img3 from '../../Image/3-2-1_4.png';
import img4 from '../../Image/3-2-1_5.png';
import img5 from '../../Image/3-2-1_6.png';
import img6 from '../../Image/3-2-1_7.png';
import img7 from '../../Image/3-2-1_8.png';
import img8 from '../../Image/3-2-1_9.png';
import img9 from '../../Image/3-2-1_10.png';

const Single21 = () => {
  const imgArray = [img1, img4, img7];
  const totalArray = [
    [img2, img3],
    [img5, img6],
    [img8, img9],
  ];
  const numArray = [
    ['①', '②'],
    ['③', '④'],
    ['⑤', '⑥'],
  ];
  const sizeArray1 = [6, 7, 7];
  const sizeArray2 = [
    [4, 4],
    [3, 7],
    [4, 7],
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
