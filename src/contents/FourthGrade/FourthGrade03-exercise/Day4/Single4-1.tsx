import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data41QuizProps2 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-4-1_2.png';
import img2 from '../../Image/3-4-1_3.png';
import img3 from '../../Image/3-4-1_4.png';
import img4 from '../../Image/3-4-1_5.png';
import img5 from '../../Image/3-4-1_6.png';
import img6 from '../../Image/3-4-1_7.png';
import img7 from '../../Image/3-4-1_8.png';
import img8 from '../../Image/3-4-1_9.png';
import img9 from '../../Image/3-4-1_10.png';
import img10 from '../../Image/3-4-1_11.png';
import img11 from '../../Image/3-4-1_12.png';
import img12 from '../../Image/3-4-1_13.png';
import img from '../../Image/redArrow.png';

const Single41 = (props: QuizProps) => {
  const {
    id,
    type,
    imgId,
    quiz1,
    quiz2,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  const newType = type - 1;
  const imgArray1 = [
    [{ id2: 1, src: img1, src2: img2 }],
    [{ id2: 2, src: img3, src2: img4 }],
    [{ id2: 3, src: img5, src2: img6 }],
  ];
  const imgArray2 = [
    [{ id2: 4, src: img7, src2: img8 }],
    [{ id2: 5, src: img9, src2: img10 }],
    [{ id2: 6, src: img11, src2: img12 }],
  ];
  const typeImg = [imgArray1, imgArray2];
  return (
    <Styled.RowBox5>
      <IdSymbol id={id} correct={correct} />
      {typeImg[newType][imgId].map(item => (
        <Styled.SingleWrapper2>
          <Styled.ColGapBox gap={0.5}>
            <Styled.RowBox17>
              {type === 2 ? (
                <>
                  <Styled.HandleImgSize src={item.src} size={7} />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <div>{quiz1}</div>
                    </Styled.FractUnderLine>
                    <Styled.InputBox8
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 0)}
                      value={inputValue[idx][0]}
                    />
                  </Styled.ColGapBox>
                </>
              ) : (
                <>
                  <Styled.HandleImgSize src={item.src} size={5} />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <Styled.InputBox8
                        disabled={correct === null ? false : true}
                        onChange={e => handleInput(e.target.value, 0)}
                        value={inputValue[idx][0]}
                      />
                    </Styled.FractUnderLine>
                    <Styled.FitBox>{quiz1}</Styled.FitBox>
                  </Styled.ColGapBox>
                </>
              )}
            </Styled.RowBox17>
            <Styled.MarginBox right={5}>
              <Styled.RotateBox deg={90}>
                <Styled.HandleImgSize src={img} size={1.5} />
              </Styled.RotateBox>
            </Styled.MarginBox>
            <Styled.RowBox17>
              {type === 2 ? (
                <>
                  <Styled.HandleImgSize src={item.src2} size={7} />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <div>{quiz2}</div>
                    </Styled.FractUnderLine>
                    <Styled.InputBox8
                      disabled={correct === null ? false : true}
                      onChange={e => handleInput(e.target.value, 1)}
                      value={inputValue[idx][1]}
                    />
                  </Styled.ColGapBox>
                </>
              ) : (
                <>
                  <Styled.HandleImgSize src={item.src2} size={5} />
                  <Styled.ColGapBox gap={0.1}>
                    <Styled.FractUnderLine>
                      <Styled.InputBox8
                        disabled={correct === null ? false : true}
                        onChange={e => handleInput(e.target.value, 1)}
                        value={inputValue[idx][1]}
                      />
                    </Styled.FractUnderLine>
                    <Styled.FitBox>{quiz2}</Styled.FitBox>
                  </Styled.ColGapBox>
                </>
              )}
            </Styled.RowBox17>
          </Styled.ColGapBox>
        </Styled.SingleWrapper2>
      ))}
    </Styled.RowBox5>
  );
};

export default Single41;
