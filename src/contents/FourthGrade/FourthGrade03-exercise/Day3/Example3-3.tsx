import Styled from '../../style';

import upperImg from '../../Image/3-3-3_1.png';
import lowerImg from '../../Image/3-3-3_2.png';

const Example32 = () => {
  return (
    <Styled.RowBox18>
      <Styled.InputWrapper1>
        <Styled.ColGapBox gap={0.1}>
          <Styled.FractUnderLine>
            <div>3</div>
          </Styled.FractUnderLine>
          <Styled.FitBox>8</Styled.FitBox>
        </Styled.ColGapBox>
        <Styled.RelativeBox>
          <Styled.GapRowBox2 gap={0.3}>
            <div>=</div>
            <Styled.InputBox3 placeholder="3" />
            <div>÷</div>
            <Styled.InputBox3 placeholder="8" />
            <Styled.AbsoluteBox11>
              <Styled.HandleImgSize src={upperImg} size={0.75} />
            </Styled.AbsoluteBox11>
            <Styled.AbsoluteBox13>
              <Styled.HandleImgSize src={lowerImg} size={0.8} />
            </Styled.AbsoluteBox13>
          </Styled.GapRowBox2>
        </Styled.RelativeBox>
      </Styled.InputWrapper1>
    </Styled.RowBox18>
  );
};

export default Example32;
