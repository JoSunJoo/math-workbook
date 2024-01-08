import Styled from '../../style';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type2';

import img from '../../Image/divide.png';

const Single21 = (props: QuizProps) => {
  const {
    rightQuiz1,
    rightQuiz2,
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

  return (
    <Styled.ColorBox4>
      <Styled.ColGapBox7 gap={0.2}>
        <Styled.InputBox8
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 1)}
        />
        <Styled.GapRowBox gap={1.6}>
          <div>{rightQuiz2} </div>
          <Styled.RelativeBox>
            <Styled.LetterSpacingBox gap={0.5}>
              {rightQuiz1}
            </Styled.LetterSpacingBox>
            <Styled.AsoluteBox4>
              <Styled.ImgSize10 src={img} alt="" />
            </Styled.AsoluteBox4>
          </Styled.RelativeBox>
        </Styled.GapRowBox>
      </Styled.ColGapBox7>
    </Styled.ColorBox4>
  );
};

export default Single21;
