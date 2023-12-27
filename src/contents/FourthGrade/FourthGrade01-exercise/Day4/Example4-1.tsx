import Styled from '../../style';

import img from '../../Image/1-4-1.png';

const Example41 = () => {
  return (
    <Styled.RowBox13>
      <div />
      <Styled.ColGapBox3 gap={2}>
        <Styled.RelativeBox>
          <Styled.AsoluteBox3>
            <Styled.ImgSize16 src={img} alt="" />
          </Styled.AsoluteBox3>
          <Styled.SetBox2>
            <Styled.ColGapBox6 gap={2}>
              <Styled.BetweenBox>
                <Styled.WhiteText>① 490483</Styled.WhiteText>
                <Styled.WhiteText>② 74859</Styled.WhiteText>
              </Styled.BetweenBox>
              <Styled.BetweenBox>
                <Styled.WhiteText>③ 596781</Styled.WhiteText>
                <Styled.WhiteText>④ 257497</Styled.WhiteText>
              </Styled.BetweenBox>
            </Styled.ColGapBox6>
          </Styled.SetBox2>
        </Styled.RelativeBox>
        <Styled.SetCenter>
          <Styled.RowBox>
            <Styled.TextSize>가장 큰 수:</Styled.TextSize>
            <Styled.ShortInput2 placeholder="3" disabled />
          </Styled.RowBox>
          <Styled.RowBox>
            <Styled.TextSize>가장 작은 수:</Styled.TextSize>
            <Styled.ShortInput2 placeholder="2" disabled />
          </Styled.RowBox>
        </Styled.SetCenter>
      </Styled.ColGapBox3>
    </Styled.RowBox13>
    // 테두리 두르고 싶으면 </Styled.FitExampleBox> 대신 일반 컴포넌트 사이즈보다 좀 더 커 이물감이 있을 수 있음
  );
};

export default Example41;
