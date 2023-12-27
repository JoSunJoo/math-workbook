import Styled from '../../style';

const Example51 = () => {
  return (
    <Styled.RowBox2>
      <div>★</div>
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>
            정수가 집에서 도서관을 거쳐 학교를 가려면 몇 m를 걸어야 할까요?
          </Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.RowBox3>
              <Styled.TextSize>식:</Styled.TextSize>
              <Styled.LongInput
                placeholder="375 + 453 = 828 "
                disabled={true}
              />
              <Styled.TextSize>답:</Styled.TextSize>
              <Styled.ShortInput placeholder="828" disabled={true} />
              <Styled.TextSize>m</Styled.TextSize>
            </Styled.RowBox3>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Example51;
