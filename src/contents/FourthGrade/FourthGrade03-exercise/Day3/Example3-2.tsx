import Styled from '../../style';

import lowerImg from '../../Image/3-3-2_1.png';
import upperImg from '../../Image/3-3-2_2.png';

const Example32 = () => {
  return (
    <Styled.RowBox18>
      <Styled.InputWrapper1>
        <Styled.RelativeBox>
          <Styled.GapRowBox2 gap={0.3}>
            <div>5</div>
            <div>÷</div>
            <div>3</div>
            <div>=</div>
            <Styled.AbsoluteBox11>
              <Styled.HandleImgSize src={upperImg} size={0.75} />
            </Styled.AbsoluteBox11>
            <Styled.AbsoluteBox12>
              <Styled.HandleImgSize src={lowerImg} size={0.7} />
            </Styled.AbsoluteBox12>
          </Styled.GapRowBox2>
        </Styled.RelativeBox>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <Styled.InputBox3 placeholder="5" />
          </Styled.FractUnderLine>
          <Styled.InputBox3 placeholder="3" />
        </Styled.ColGapBox>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Example32;
