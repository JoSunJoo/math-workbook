import Styled from '../../style';

import type { Data11QuizProps as QuizProps } from '../../Type/Type2';

import img1 from '../../Image/2-2-1_1.png';
import img2 from '../../Image/2-2-1_2.png';

const Single21 = (props: QuizProps) => {
  const { id, imgId, quiz1, quiz2 } = props;
  const imgUrl = [img1, img2];

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.SingleWrapper8>
        <Styled.InputWrapper3>
          <Styled.ColGapBox gap={1.5}>
            {imgId === 0 ? (
              <Styled.ImgSize5 src={imgUrl[imgId]} alt="" />
            ) : (
              <Styled.ImgSize6 src={imgUrl[imgId]} alt="" />
            )}

            <Styled.RowBox12>
              <Styled.InputWrapper3>
                <div>{quiz1} = (</div>
                <Styled.InputBox1 />
                <div>× {quiz2} ) + (</div>
                <Styled.InputBox3 />
                <div>× {quiz2} ) =</div>
                <Styled.InputBox1 />
              </Styled.InputWrapper3>
            </Styled.RowBox12>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper8>
    </Styled.RowBox13>
  );
};

export default Single21;
