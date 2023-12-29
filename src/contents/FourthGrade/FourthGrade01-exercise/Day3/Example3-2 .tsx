import Styled from '../../style';

import img from '../../Image/1-3-2.png';

const Example32 = () => {
  return (
    <Styled.FitExampleBox>
      <Styled.RowWrapBox10>
        <Styled.RowBox13>
          <div />
          <Styled.ColGapBox5>
            <Styled.BetweenBox>
              <Styled.InputSameBox4>2만</Styled.InputSameBox4>
              <Styled.RowBox4>
                <Styled.InputSameBox4>200만</Styled.InputSameBox4>
              </Styled.RowBox4>
            </Styled.BetweenBox>
            <Styled.ImgSize14 src={img} alt="" />
            <Styled.MarginBottomBox3 />
            <Styled.SetCenter>
              <Styled.RowBox4>
                <Styled.InputBox4 placeholder="100" disabled />배
              </Styled.RowBox4>
            </Styled.SetCenter>
          </Styled.ColGapBox5>
        </Styled.RowBox13>

        <Styled.RowBox13>
          <div />
          <Styled.ColGapBox5>
            <Styled.BetweenBox>
              <Styled.InputSameBox4>3만</Styled.InputSameBox4>
              <Styled.RowBox4>
                <Styled.InputBox4 placeholder="300만" disabled />
              </Styled.RowBox4>
            </Styled.BetweenBox>
            <Styled.ImgSize14 src={img} alt="" />
            <Styled.MarginBottomBox3 />
            <Styled.SetCenter>
              <Styled.RowBox4>
                <Styled.InputSameBox4>100</Styled.InputSameBox4>배
              </Styled.RowBox4>
            </Styled.SetCenter>
          </Styled.ColGapBox5>
        </Styled.RowBox13>
      </Styled.RowWrapBox10>
    </Styled.FitExampleBox>
  );
};

export default Example32;
