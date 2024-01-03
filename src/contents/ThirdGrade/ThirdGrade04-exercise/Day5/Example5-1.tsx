import Styled from '../../style';

const Example51 = () => {
  return (
    <Styled.RowBox2>
      <div>★</div>
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>
            놓여진 의자를 3개씩 한 줄로 놓으면 모두 몇 줄로 놓을 수 있을까요?
          </Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox3>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput placeholder="30 ÷ 3 = 10 " disabled />
              <Styled.TextSize>답:</Styled.TextSize>
              <Styled.ShortInput placeholder="10" disabled />
              <Styled.TextSize>줄</Styled.TextSize>
            </Styled.RowBox3>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Example51;
