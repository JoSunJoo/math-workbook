import Styled from '../../style';

const Example14 = () => {
  return (
    <Styled.ExampleBox4>
      <Styled.InputWrapper>
        <div>57 ÷ 3</div>
        <div>=</div>
        <Styled.InputBox1 placeholder="19" />
        <Styled.AngleShapeBox>
          <Styled.AngleLineLeft />
          <Styled.AngleShapeLeft />
        </Styled.AngleShapeBox>
        <Styled.InnerColBox>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="3" />
            <div>×</div>
            <Styled.InputBox1 placeholder="19" />
            <div>=</div>
            <Styled.InputBox1 placeholder="57" />
          </Styled.InputWrapper3>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="19" />
            <div>×</div>
            <Styled.InputBox1 placeholder="3" />
            <div>=</div>
            <Styled.InputBox1 placeholder="57" />
          </Styled.InputWrapper3>
        </Styled.InnerColBox>
      </Styled.InputWrapper>
    </Styled.ExampleBox4>
  );
};

export default Example14;
