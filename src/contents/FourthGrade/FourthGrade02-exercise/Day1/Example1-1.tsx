import Styled from '../../style';

import arrow from '../../Image/blueArrow.png';

const Example11 = () => {
  return (
    <Styled.FitExampleBox>
      <Styled.RowBox17>
        <Styled.RowBox4>
          <div>70 × </div>
          <Styled.InputBox3 placeholder="6" disabled />
          <div>= 420</div>
        </Styled.RowBox4>
        <Styled.ImgSize10 src={arrow} />
        <Styled.RowBox4>
          <Styled.InputBox1 placeholder="420" disabled />
          <div>÷</div>
          <Styled.InputBox1 placeholder="70" disabled />
          <div>=</div>
          <Styled.InputBox3 placeholder="6" disabled />
        </Styled.RowBox4>
      </Styled.RowBox17>
    </Styled.FitExampleBox>
  );
};

export default Example11;
