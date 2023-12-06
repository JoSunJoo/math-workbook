import Styled from '../../style';
import Matrix from '../../utils/Matrix';

const Example21 = () => {
  return (
    <Styled.ExampleBox3>
      <Styled.RowBox>
        <Styled.ColGapBox gap={0}>
          <Matrix />
          <Styled.InputWrapper2>
            <div>468</div>
            <div>+</div>
            <div>645</div>
            <div>=</div>
            <Styled.InputBox2 placeholder="645"></Styled.InputBox2>
          </Styled.InputWrapper2>
        </Styled.ColGapBox>
        <Styled.ColGapBox gap={0.65}>
          <Styled.RedFont1>(400 + 100 = 500)</Styled.RedFont1>
          <Styled.RedFont1>(60 + 70 = 130)</Styled.RedFont1>
          <Styled.RedFont1>(8 + 7 = 15)</Styled.RedFont1>
        </Styled.ColGapBox>
      </Styled.RowBox>
    </Styled.ExampleBox3>
  );
};

export default Example21;
