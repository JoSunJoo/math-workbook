import Styled from '../../style';

import img from '../../Image/3-4-1.png';

const Example41 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.ColGapBox gap={2}>
        <Styled.SetCenter>
          <Styled.TextBox3>
            • 전체를 똑같이 4조각으로 나눈 것 중에 색칠된 1조각을
            <Styled.MarginBox left={0.6} right={0.3}>
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <div>1</div>
                </Styled.FractUnderLine>
                <Styled.FitBox>4</Styled.FitBox>
              </Styled.ColGapBox>
            </Styled.MarginBox>
            이라고 나타냅니다.
          </Styled.TextBox3>
          <Styled.ImgSize15 src={img} alt="" />
        </Styled.SetCenter>
        <Styled.TextBox3>
          • 4조각을 두 조각씩 똑같이 나누면 8조각이 되고, 색칠된 부분은 8조각
          중에 2조각이기 때문에
          <Styled.MarginBox left={0.6} right={0.3}>
            <Styled.ColGapBox>
              <Styled.FractUnderLine>
                <Styled.TextBox3>2</Styled.TextBox3>
              </Styled.FractUnderLine>
              <Styled.FractUnderNum>
                <Styled.TextBox3>8</Styled.TextBox3>
              </Styled.FractUnderNum>
            </Styled.ColGapBox>
          </Styled.MarginBox>
          라고 나타냅니다.
        </Styled.TextBox3>
      </Styled.ColGapBox>
    </Styled.ImgBox2>
  );
};

export default Example41;
