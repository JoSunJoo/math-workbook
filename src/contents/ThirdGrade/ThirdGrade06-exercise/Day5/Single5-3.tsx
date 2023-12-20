import Styled from '../../style';

import type { Data41QuizProps as QuizProps } from '../../Type/Type6';

import img from '../../Image/6-5-3.png';

const Single53 = (props: QuizProps) => {
  const { id, method, mune, deno, len } = props;
  return (
    <Styled.SingleWrapper5>
      <Styled.IdNumBox2>{id}</Styled.IdNumBox2>

      <Styled.PaddingBox3>
        <Styled.ColGapBox gap={1}>
          {id === '①' ? (
            <Styled.MarginBottomBox2>
              <Styled.ImgSize6 src={img} alt="" />
            </Styled.MarginBottomBox2>
          ) : (
            <></>
          )}
          <Styled.TextBox4>
            <div>{method}의</div>
            <Styled.ColGapBox>
              <Styled.FractUnderLine>{mune}</Styled.FractUnderLine>
              <Styled.FractUnderNum>{deno}</Styled.FractUnderNum>
            </Styled.ColGapBox>
            <div>
              를 사용했습니다. 남은 {method}의 길이가 {len}cm 일 때
            </div>
          </Styled.TextBox4>
          <Styled.TextBox4>
            전체의 길이는
            <Styled.InputBox1 />
            <div>cm 입니다.</div>
          </Styled.TextBox4>
        </Styled.ColGapBox>
      </Styled.PaddingBox3>
    </Styled.SingleWrapper5>
  );
};

export default Single53;
