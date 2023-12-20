import Styled from '../../style';

import img from '../../Image/4-1-3_3.png';

const Example132 = () => {
  return (
    <Styled.SingleWrapper2>
      <Styled.InputWrapper1>
        <Styled.RelativeBox>
          <div>10.48</div>
          <Styled.AsoluteBox2>
            <Styled.ImgSize11 src={img} alt="" />
            <Styled.ImgSize11 src={img} alt="" />
          </Styled.AsoluteBox2>
        </Styled.RelativeBox>
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
