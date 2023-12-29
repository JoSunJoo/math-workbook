import Styled from '../../style';
import SignArrow from '../../utils/SignArrow';

const Example42 = () => {
  return (
    <Styled.ExampleBox6>
      <Styled.SetCenter>
        <Styled.TempSize1>
          <SignArrow deg={90} sign="÷" />
        </Styled.TempSize1>
        <Styled.ColGapBox3 gap={1}>
          <SignArrow sign="÷" />
          <Styled.ColGapBox3>
            <Styled.RowBox2>
              <Styled.RowBox>
                <Styled.NumBox1 color="rgba(255, 98, 146, 0.6)">
                  64
                </Styled.NumBox1>
                <Styled.NumBox1 color="rgba(98, 151, 255, 0.6)">
                  4
                </Styled.NumBox1>
              </Styled.RowBox>
              <Styled.InputBox1 placeholder="16" disabled></Styled.InputBox1>
            </Styled.RowBox2>
            <Styled.NumBox1 color="rgba(143, 108, 255, 0.6)">2</Styled.NumBox1>
          </Styled.ColGapBox3>
          <Styled.InputBox1 placeholder="32" disabled></Styled.InputBox1>
        </Styled.ColGapBox3>
      </Styled.SetCenter>
    </Styled.ExampleBox6>
  );
};

export default Example42;
