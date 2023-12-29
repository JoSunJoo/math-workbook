import Styled from '../../style';

import img from '../../Image/3-2-1_1.png';

const Example21 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.ColGapBox gap={0.1}>
        <Styled.TextBox3>
          • 분수는
          <Styled.RedSpan2> 두 양을 비교</Styled.RedSpan2>할 때 사용합니다.
        </Styled.TextBox3>
        <Styled.TextBox3>
          • 다음 그림에서 오른쪽 도형은 왼쪽 도형의
          <Styled.MarginBox left={0.6} right={0.3}>
            <Styled.ColGapBox>
              <Styled.FractUnderLine>
                <Styled.TextBox3>6</Styled.TextBox3>
              </Styled.FractUnderLine>
              <Styled.FractUnderNum>
                <Styled.TextBox3>9</Styled.TextBox3>
              </Styled.FractUnderNum>
            </Styled.ColGapBox>
          </Styled.MarginBox>
          이고, 왼쪽 도형은 오른쪽 도형의
          <Styled.MarginBox left={0.6} right={0.3}>
            <Styled.ColGapBox>
              <Styled.FractUnderLine>
                <Styled.TextBox3>9</Styled.TextBox3>
              </Styled.FractUnderLine>
              <Styled.FractUnderNum>
                <Styled.TextBox3>6</Styled.TextBox3>
              </Styled.FractUnderNum>
            </Styled.ColGapBox>
          </Styled.MarginBox>
          입니다.
        </Styled.TextBox3>
        <Styled.MarginBottomBox2 />
        <Styled.ImgSize4 src={img} alt="" />
      </Styled.ColGapBox>
    </Styled.ImgBox2>
  );
};

export default Example21;
