import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type3';

import img1 from '../../Image/3-3-1.png';
import img2 from '../../Image/3-3-1_2.png';

const Single31 = (props: QuizProps) => {
  const {
    id,
    imgId,
    quiz1,
    quiz2,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const imgUrl = [img1, img2];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.SingleWrapper7>
        <Styled.RowBox11>
          {imgId === 0 ? (
            <Styled.ImgSize8 src={imgUrl[imgId]} />
          ) : (
            <Styled.ImgSize7 src={imgUrl[imgId]} />
          )}

          <Styled.PaddingBox2>
            <Styled.ColGapBox gap={1}>
              <Styled.RowBox10>{quiz1}</Styled.RowBox10>
              <Styled.RowBox10>
                <div>= </div>
                <Styled.FitBox1>{quiz2}</Styled.FitBox1>
                <div> × 10</div>
              </Styled.RowBox10>
              <Styled.RowBox10>
                <div>=</div>
                <Styled.InputBox1
                  onChange={e => handleInput(e.target.value, 0)}
                />
                <div>× 10</div>
              </Styled.RowBox10>
              <Styled.RowBox10>
                <div>=</div>
                <Styled.InputBox1
                  onChange={e => handleInput(e.target.value, 1)}
                />
              </Styled.RowBox10>
            </Styled.ColGapBox>
          </Styled.PaddingBox2>
        </Styled.RowBox11>
      </Styled.SingleWrapper7>
    </Styled.RowBox13>
  );
};

export default Single31;
