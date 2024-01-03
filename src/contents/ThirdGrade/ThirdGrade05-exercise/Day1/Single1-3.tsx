import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data13QuizProps2 as QuizProps } from '../../Type/Type5';

import img1 from '../../Image/5-1-3_1.png';
import img2 from '../../Image/5-1-3_2.png';
import img3 from '../../Image/5-1-3_3.png';
import img from '../../Image/redArrow.png';

const Single13 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    imgId,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const imgArray = [img1, img2, img3];
  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.RowBox12>
        <Styled.ImgSize9 src={imgArray[imgId]} />
        <Styled.FitInputWrapper2>
          <Styled.ColGapBox2 gap={1}>
            <div>{quiz1}</div>
            <Styled.RowBox7>
              <Styled.HandleImgSize src={img} size={1.5} />
              <Styled.InputBox3
                onChange={e => handleInput(e.target.value, 0)}
              />
              {quiz2}
            </Styled.RowBox7>
          </Styled.ColGapBox2>
        </Styled.FitInputWrapper2>
      </Styled.RowBox12>
    </Styled.RowBox13>
  );
};

export default Single13;
