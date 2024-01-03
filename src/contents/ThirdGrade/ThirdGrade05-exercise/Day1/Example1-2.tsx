import Styled from '../../style';

const Example12 = () => {
  return (
    <Styled.ExampleBox4>
      <Styled.InputWrapper>
        <div>17 × 2</div>
        <div>=</div>
        <Styled.InputBox1 placeholder="34" disabled />
        <Styled.AngleShapeBox>
          <Styled.AngleLineLeft />
          <Styled.AngleShapeLeft />
        </Styled.AngleShapeBox>
        <Styled.InnerColBox>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="34" disabled />
            <div>÷</div>
            <Styled.InputBox1 placeholder="2" disabled />
            <div>=</div>
            <Styled.InputBox1 placeholder="17" disabled />
          </Styled.InputWrapper3>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="34" disabled />
            <div>÷</div>
            <Styled.InputBox1 placeholder="17" disabled />
            <div>=</div>
            <Styled.InputBox1 placeholder="2" disabled />
          </Styled.InputWrapper3>
        </Styled.InnerColBox>
      </Styled.InputWrapper>
    </Styled.ExampleBox4>
  );
};

export default Example12;
