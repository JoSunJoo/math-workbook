import Styled from '../../style';

const Example32 = () => {
  return (
    <Styled.ExampleBox3>
      <Styled.InputWrapper2>
        <div>37 × 60</div>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ColorBox>37 × 6 </Styled.ColorBox>
            <div>× 10</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1 placeholder="222"></Styled.InputBox1>
              <div>× 10</div>
            </Styled.InputWrapper>
          </div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox4 placeholder="2220"></Styled.InputBox4>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.ExampleBox3>
  );
};

export default Example32;
