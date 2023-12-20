import Styled from '../../style';

import img from '../../Image/4-1-3_2.png';

const Example131 = () => {
  return (
    <Styled.SingleWrapper2>
      <Styled.InputWrapper1>
        <Styled.ColGapBox>
          <Styled.FractUnderLine>408</Styled.FractUnderLine>
          <Styled.FractUnderNum>100</Styled.FractUnderNum>
        </Styled.ColGapBox>
        <div>=</div>
        <Styled.RelativeBox>
          <Styled.InputBox4 placeholder="4.08" />
          <Styled.AsoluteBox1>
            <Styled.ImgSize10 src={img} alt="" />
          </Styled.AsoluteBox1>
        </Styled.RelativeBox>
      </Styled.InputWrapper1>
    </Styled.SingleWrapper2>
  );
};

export default Example131;
