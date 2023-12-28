import Styled from '../../style';

const Example511 = () => {
  return (
    <Styled.RowBox6>
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>★</Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>
            연필은 모두 몇 자루인지 곱셈식으로 나타내 보세요.
          </Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox2>
              <Styled.InputBox1 placeholder="12" disabled />
              ×
              <Styled.InputBox1 placeholder="7" disabled />
              <div>=</div>
              <Styled.InputBox1 placeholder="84" disabled />
            </Styled.RowBox2>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox6>
  );
};

export default Example511;
