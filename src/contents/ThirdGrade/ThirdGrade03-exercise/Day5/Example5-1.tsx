import Styled from '../../style';
import SignArrow from '../../utils/SignArrow';

const Example51 = () => {
  return (
    <Styled.ExampleBox6>
      <Styled.SetCenter>
        <Styled.TempSize1>
          <SignArrow deg={90} sign="×" />
        </Styled.TempSize1>
        <Styled.ColGapBox3 gap={1}>
          <SignArrow sign="×" />
          <Styled.ColGapBox3>
            <Styled.RowBox2>
              <Styled.RowBox>
                <Styled.NumBox1 color="rgba(255, 98, 146, 0.6)">
                  40
                </Styled.NumBox1>
                <Styled.NumBox1 color="rgba(98, 151, 255, 0.6)">
                  70
                </Styled.NumBox1>
              </Styled.RowBox>
              <Styled.InputBox1 placeholder="2800"></Styled.InputBox1>
            </Styled.RowBox2>
            <Styled.NumBox1 color="rgba(143, 108, 255, 0.6)">30</Styled.NumBox1>
          </Styled.ColGapBox3>
          <Styled.InputBox1 placeholder="1200"></Styled.InputBox1>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.ExampleBox6>
  );
};

export default Example51;
