import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data23QuizProps2 as QuizProps } from '../../Type/Type1';

import img1 from '../../Image/1-2-3_1.png';
import img2 from '../../Image/1-2-3_2.png';

const Single23 = (props: QuizProps) => {
  const {
    id,
    imgId,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;
  const quizArray = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7];

  const imgArray = [img1, img2];

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[imgId][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };
  const handleInputBox = (idx: number, value: string) => {
    if (id === '①' && idx === 2) {
      return <Styled.FitInputSameBox2>{value}</Styled.FitInputSameBox2>;
    }
    if (value === ' ') {
      return (
        <Styled.InputBox4
          placeholder={value}
          onChange={e => handleInput(e.target.value, idx)}
        />
      );
    } else {
      return <Styled.FitInputSameBox>{value}</Styled.FitInputSameBox>;
    }
  };

  return (
    <Styled.RowBox2>
      <Styled.RowBox14>
        <IdSymbol id={id} correct={correct} />
        <Styled.ColGapBox gap={0}>
          <Styled.ImgSize13 src={imgArray[imgId % 2]} alt="" />
          <Styled.FitInputWrapper>
            {quizArray.map((item: string | undefined, idx: number) => (
              <div key={idx}>
                {item ? (
                  <>{handleInputBox(idx, item)}</>
                ) : (
                  <> {handleInputBox(idx, ' ')}</>
                )}
              </div>
            ))}
          </Styled.FitInputWrapper>
        </Styled.ColGapBox>
      </Styled.RowBox14>
    </Styled.RowBox2>
  );
};

export default Single23;
