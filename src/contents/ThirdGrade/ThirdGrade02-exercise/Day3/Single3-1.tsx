import Styled from '../../style';

import type { Data31QuizProps2 as QuizProps } from '../../Type/Type2';

import img1 from '../../Image/2-3-1_1.png';
import img2 from '../../Image/2-3-1_2.png';
import img3 from '../../Image/2-3-1_3.png';

const Single31 = (props: QuizProps) => {
  const { id, imgId, quiz1 } = props;
  const imgUrl = [img1, img2, img3];

  return (
    <Styled.RowBox13>
      <div>{id}</div>
      <Styled.SingleWrapper5>
        <Styled.InputWrapper3>
          <Styled.ColGapBox gap={1.5}>
            <Styled.ImgSize6 src={imgUrl[imgId]} alt="" />
            <Styled.ColGapBox2>
              <Styled.InputWrapper3>
                <div>{quiz1}</div>
              </Styled.InputWrapper3>
              <Styled.SetCenter>
                <Styled.RowBox3>
                  <Styled.InputWrapper3>
                    <div>=</div>
                    <Styled.InputBox1 />
                    <div>+</div>
                    <Styled.InputBox3 />
                    <div>=</div>
                    <Styled.InputBox1 />
                  </Styled.InputWrapper3>
                </Styled.RowBox3>
              </Styled.SetCenter>
            </Styled.ColGapBox2>
          </Styled.ColGapBox>
        </Styled.InputWrapper3>
      </Styled.SingleWrapper5>
    </Styled.RowBox13>
  );
};

export default Single31;
