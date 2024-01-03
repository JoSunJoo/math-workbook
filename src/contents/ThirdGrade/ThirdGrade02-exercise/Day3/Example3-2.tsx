import Styled from '../../style';

const Example32 = () => {
  return (
    <Styled.ExampleBox1>
      <Styled.InputWrapper>
        31 × 6
        <Styled.AngleShapeBox>
          <Styled.AngleLineLeft />
          <Styled.AngleShapeLeft />
        </Styled.AngleShapeBox>
        <Styled.InnerColBox>
          <Styled.InputWrapper3>
            30 × 6 =<Styled.InputBox1 placeholder="180" disabled />
          </Styled.InputWrapper3>
          <Styled.InputWrapper3>
            1 × 6 =<Styled.InputBox1 placeholder="6" disabled />
          </Styled.InputWrapper3>
        </Styled.InnerColBox>
        <Styled.AngleShapeBox>
          <Styled.AngleLineRight />
          <Styled.AngleShapeRight />
        </Styled.AngleShapeBox>
        <Styled.InputBox1 placeholder="186" disabled />
      </Styled.InputWrapper>
    </Styled.ExampleBox1>
  );
};

export default Example32;
