import Styled from '../../style';

const Example32 = () => {
  return (
    <Styled.ExampleBox3Short>
      <Styled.InputWrapper2>
        <div>37 × </div>
        <Styled.UnderLineBox>
          60
          <Styled.InputExplain1>6 × 10 </Styled.InputExplain1>
        </Styled.UnderLineBox>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ColorBox>37 × 6 </Styled.ColorBox>
            <div>× 10</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1 placeholder="222" disabled />
              <div>× 10</div>
            </Styled.InputWrapper>
          </div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox4 placeholder="2220" disabled />
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.ExampleBox3Short>
  );
};

export default Example32;
