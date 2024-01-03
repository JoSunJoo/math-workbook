import Styled from '../../style';

import img from '../../Image/1-3-1_2.png';

const Example31 = () => {
  return (
    <Styled.RowBox15>
      <Styled.RowBox4>
        <Styled.ImgSize10 src={img} alt="" />
        <Styled.NonFlexText>이 10장 있으면</Styled.NonFlexText>
        <Styled.InputBox4 placeholder="10만" disabled />
        <div>원</div>
      </Styled.RowBox4>
    </Styled.RowBox15>
  );
};

export default Example31;
