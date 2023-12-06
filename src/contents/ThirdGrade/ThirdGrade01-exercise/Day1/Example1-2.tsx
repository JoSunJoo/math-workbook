import Styled from '../../style';

const Example12 = () => {
  return (
    <Styled.ExampleBox1>
      <Styled.InputExplainWrapper left={10.3}>
        <Styled.InputExplain>600+200</Styled.InputExplain>
        <Styled.InputExplain>80+50</Styled.InputExplain>
        <Styled.InputExplain>7+3</Styled.InputExplain>
      </Styled.InputExplainWrapper>
      <Styled.InputWrapper2>
        <div>687</div>
        <div>+</div>
        <div>253</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ExplainInputBox1>800</Styled.ExplainInputBox1>
            <div>+</div>
            <Styled.ExplainInputBox1>130</Styled.ExplainInputBox1>
            <div>+</div>
            <Styled.ExplainInputBox1>10</Styled.ExplainInputBox1>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.ExplainInputBox1>940</Styled.ExplainInputBox1>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.ExampleBox1>
  );
};

export default Example12;
