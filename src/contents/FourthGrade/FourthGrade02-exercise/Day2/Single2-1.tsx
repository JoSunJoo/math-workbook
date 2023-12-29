import Styled from '../../style';

import type { Data21QuizProps2 as QuizProps } from '../../Type/Type2';

import img from '../../Image/divide.png';

const Single21 = (props: QuizProps) => {
  const { rightQuiz1, rightQuiz2 } = props;

  return (
    <Styled.ColorBox4>
      <Styled.ColGapBox7 gap={0.2}>
        <Styled.InputBox8 />
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
