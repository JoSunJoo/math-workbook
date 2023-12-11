import Styled from '../../style';

const Example132 = () => {
  return (
    <Styled.SingleWrapper2>
      <Styled.InputWrapper1>
        <div>10.48</div>
        <div>=</div>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox1 placeholder="1048" />
          </Styled.FractUnderLine>
          <Styled.FractUnderNum>
            <Styled.InputBox1 placeholder="100" />
          </Styled.FractUnderNum>
        </Styled.ColGapBox>
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Example132;
