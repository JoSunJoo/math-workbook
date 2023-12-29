import Styled from '../../style';

import type { Data23QuizProps as QuizProps } from '../../Type/Type2';

import img from '../../Image/divide.png';

const Single23 = (props: QuizProps) => {
  const { id, quiz1, quiz2 } = props;

  return (
    <Styled.PaddingBox7>
      <Styled.GapRowBox gap={3}>
        <div>{id}</div>
        <Styled.ColGapBox7 gap={0.2}>
          <Styled.InputBox8 />
          <Styled.GapRowBox gap={1.6}>
            <div>{quiz2} </div>
            <Styled.RelativeBox>
              <Styled.LetterSpacingBox gap={0.5}>
                {quiz1}
              </Styled.LetterSpacingBox>
              <Styled.AsoluteBox4>
                <Styled.ImgSize10 src={img} alt="" />
              </Styled.AsoluteBox4>
              <Styled.AsoluteBox5>
                <Styled.GapRowBox gap={0.3}>
                  <div>···</div>
                  <Styled.InputBox8 />
                </Styled.GapRowBox>
              </Styled.AsoluteBox5>
            </Styled.RelativeBox>
          </Styled.GapRowBox>
        </Styled.ColGapBox7>
      </Styled.GapRowBox>
    </Styled.PaddingBox7>
  );
};

export default Single23;
