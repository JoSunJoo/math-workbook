import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data21QuizProps as Props } from '../../Type/Type3';

import img1 from '../../Image/3-2-1_2.png';
import img2 from '../../Image/3-2-1_3.png';
import img3 from '../../Image/3-2-1_4.png';
import img4 from '../../Image/3-2-1_5.png';
import img5 from '../../Image/3-2-1_6.png';
import img6 from '../../Image/3-2-1_7.png';
import img7 from '../../Image/3-2-1_8.png';
import img8 from '../../Image/3-2-1_9.png';
import img9 from '../../Image/3-2-1_10.png';

const Single21 = (props: Props) => {
  const {
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
    correct2,
  } = props;

  const handleInput = (e: string, idx2: number, i: number) => {
    const value = inputValue;
    value[idx2][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

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
  const idxArray = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  const sizeArray1 = [6, 7, 6];
  const sizeArray2 = [
    [4, 4],
    [3, 7],
    [6, 6],
  ];

  return (
    <Styled.GapRowBox3 gap={1} key={idx}>
      <Styled.SetCenter>
        <Styled.ImgSizeWidth src={imgArray[idx]} width={sizeArray1[idx]} />
      </Styled.SetCenter>
      <Styled.NewFitInputWrapper3>
        <Styled.RowWrapBox18>
          {/* 왼쪽 */}
          <Styled.GapRowBox gap={2}>
            <IdSymbol id={numArray[idx][0]} correct={correct} />
            <Styled.GapRowBox2 gap={0.2}>
              <Styled.MakeWidth w={7.2}>
                <Styled.ImgSizeWidth
                  src={totalArray[idx][0]}
                  width={sizeArray2[idx][0]}
                />
              </Styled.MakeWidth>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3
                    onChange={e =>
                      handleInput(e.target.value, idxArray[idx][0], 0)
                    }
                  />
                </Styled.FractUnderLine>
                <Styled.InputBox3
                  onChange={e =>
                    handleInput(e.target.value, idxArray[idx][0], 1)
                  }
                />
              </Styled.ColGapBox>
            </Styled.GapRowBox2>
          </Styled.GapRowBox>
          {/* 오른쪽 */}
          <Styled.GapRowBox gap={2}>
            <IdSymbol id={numArray[idx][1]} correct={correct2} />
            <Styled.GapRowBox2 gap={0.2}>
              <Styled.MakeWidth w={8.5}>
                <Styled.ImgSizeWidth
                  src={totalArray[idx][1]}
                  width={sizeArray2[idx][1]}
                />
              </Styled.MakeWidth>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3
                    disabled={correct2 === null ? false : true}
                    onChange={e =>
                      handleInput(e.target.value, idxArray[idx][1], 0)
                    }
                  />
                </Styled.FractUnderLine>
                <Styled.InputBox3
                  disabled={correct2 === null ? false : true}
                  onChange={e =>
                    handleInput(e.target.value, idxArray[idx][1], 1)
                  }
                />
              </Styled.ColGapBox>
            </Styled.GapRowBox2>
          </Styled.GapRowBox>
        </Styled.RowWrapBox18>
      </Styled.NewFitInputWrapper3>
    </Styled.GapRowBox3>
  );
};

export default Single21;
