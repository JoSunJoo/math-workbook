import Styled from '../../style';

import examImg from '../../Image/1-5-1.png';
import img from '../../Image/1-5-1_1.png';
import star from '../../Image/blueStar.png';

const Example51 = () => {
  const unit = 'mm';
  return (
    <Styled.ColGapBox gap={3}>
      {/* <Styled.ImgSize17 src={img} alt="" /> */}
      <Styled.ExampleBox1>
        <Styled.ColGapBox gap={2}>
          <Styled.TextSize>
            지폐 한 장의 길이가 다음과 같습니다.
          </Styled.TextSize>
          <Styled.ImgSize6 src={examImg} />
        </Styled.ColGapBox>
      </Styled.ExampleBox1>
      <Styled.RowBox5>
        <div>
          <Styled.ImgSize12 src={star} />
        </div>
        <Styled.SingleWrapper4>
          <Styled.TextBoxWrapper>
            <Styled.TextBox>
              천 원짜리 지폐 10장을 겹치는 부분 없이 한 줄로 이은 길이를
              구하세요.
            </Styled.TextBox>
            <Styled.TextBoxWrapper>
              <Styled.FlexEndBox2>
                <Styled.ColGapBox gap={0.2}>
                  <Styled.RowBox>
                    <Styled.InputBox1 placeholder="10" disabled />배
                  </Styled.RowBox>
                  <Styled.ImgSize17 src={img} />
                  <Styled.RowBox12>
                    <Styled.RowBox>
                      <Styled.InputBox1 placeholder="136" disabled />
                      {unit}
                    </Styled.RowBox>
                    <Styled.RowBox>
                      <Styled.InputBox1 placeholder="1360" disabled />
                      {unit}
                    </Styled.RowBox>
                  </Styled.RowBox12>
                </Styled.ColGapBox>
                <Styled.RowBox4>
                  <Styled.TextSize>답: </Styled.TextSize>
                  <Styled.InputBox1 placeholder="1360" disabled />
                  <Styled.TextSize>{unit}</Styled.TextSize>
                </Styled.RowBox4>
              </Styled.FlexEndBox2>
            </Styled.TextBoxWrapper>
          </Styled.TextBoxWrapper>
        </Styled.SingleWrapper4>
      </Styled.RowBox5>
    </Styled.ColGapBox>
  );
};

export default Example51;
