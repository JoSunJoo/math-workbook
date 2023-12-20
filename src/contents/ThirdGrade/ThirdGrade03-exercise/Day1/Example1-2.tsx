import Styled from '../../style';

const Example12 = () => {
  return (
    <Styled.ExampleBox3>
      <Styled.InputWrapper2>
        <div>60 × </div>
        <Styled.UnderLineBox>
          40
          <Styled.InputExplain1>4 × 10 </Styled.InputExplain1>
        </Styled.UnderLineBox>
        <div>
          <Styled.InputWrapper>
            <div>=</div>
            <Styled.ColorBox>60 × 4 </Styled.ColorBox>
            <div>× 10</div>
          </Styled.InputWrapper>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox1 placeholder="240"></Styled.InputBox1>
              <div>× 10</div>
            </Styled.InputWrapper>
          </div>
          <div>
            <Styled.InputWrapper>
              <div>=</div>
              <Styled.InputBox4 placeholder="2400"></Styled.InputBox4>
            </Styled.InputWrapper>
          </div>
        </div>
      </Styled.InputWrapper2>
    </Styled.ExampleBox3>
  );
};

export default Example12;
