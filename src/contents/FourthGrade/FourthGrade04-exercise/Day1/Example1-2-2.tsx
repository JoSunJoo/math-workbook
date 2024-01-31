import Styled from '../../style';

import img1 from '../../Image/4-1-2_1.png';
import arrow from '../../Image/redArrow.png';

const Example122 = () => {
  return (
    <Styled.SingleWrapper2>
      <div>①</div>
      <Styled.GapRowBox2 gap={1}>
        <Styled.HandleImgSize src={img1} size={2} />
        <Styled.HandleImgSize src={arrow} size={1.5} />
        <Styled.InputBox1 disabled placeholder="0.06" />
      </Styled.GapRowBox2>
    </Styled.SingleWrapper2>
  );
};

export default Example122;
