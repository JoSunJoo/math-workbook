import Styled from '../../style';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type3';

const Single11 = (props: QuizProps) => {
  const { id, imgId, imgArray } = props;

  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.FitInputWrapper2>
        <Styled.RowBox12>
          <Styled.ImgSize6 src={imgArray[imgId]} />
          <Styled.ColGapBox gap={0.1}>
            <Styled.FractUnderLine>
              <Styled.InputBox3 />
            </Styled.FractUnderLine>
            <Styled.InputBox3 />
          </Styled.ColGapBox>
        </Styled.RowBox12>
      </Styled.FitInputWrapper2>
    </Styled.RowBox5>
  );
};

export default Single11;
