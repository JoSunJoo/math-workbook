import Styled from '../../style';

const Example31 = () => {
  return (
    <Styled.SingleWrapper2Short>
      <Styled.SetCenter>
        <Styled.RowBox4>
          <div> 40 ÷ 8 = 5 </div>
          <div>➨</div>
          <Styled.BorderBox2>검산</Styled.BorderBox2>
          <Styled.RowBox7>
            <Styled.InputBox3 placeholder="8" />
            <div>×</div>
            <Styled.InputBox3 placeholder="5" />
            <div>=</div>
            <Styled.InputBox1 placeholder="40" />
          </Styled.RowBox7>
        </Styled.RowBox4>
      </Styled.SetCenter>
    </Styled.SingleWrapper2Short>
  );
};

export default Example31;
