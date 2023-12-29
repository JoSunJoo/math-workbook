import Styled from '../../style';

const Example41 = () => {
  return (
    <Styled.SingleWrapper2>
      <Styled.SetCenter>
        <Styled.RowBox4>
          <div>45 ÷ 7 = 6 ··· 3</div>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.RowBox7>
            <Styled.InputBox3 placeholder="7" />
            <div>×</div>
            <Styled.InputBox3 placeholder="6" />
            <div>+</div>
            <Styled.InputBox3 placeholder="3" />
            <div>=</div>
            <Styled.InputBox1 placeholder="45" />
          </Styled.RowBox7>
        </Styled.RowBox4>
      </Styled.SetCenter>
    </Styled.SingleWrapper2>
  );
};

export default Example41;
